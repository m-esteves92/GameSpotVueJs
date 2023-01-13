/* eslint-disable */
import { msgSuccess, msgError } from '../../Tools/vuex';
import { 
    doc, setDoc, getDocs, collection,
    serverTimestamp, limit,deleteDoc,
    orderBy, startAfter, query} from 'firebase/firestore';
import { db } from '../../firebase';
import router from '../../routes';


let articlesCol = collection(db,'articles') 


const articlesModule = {
    namespaced: true,
    state(){
        return {
            homeArticles:'',
            adminArticles:'',
            adminLastVisible:''
        }
    },
    getters:{
        getHomeArticles(state){
            return state.homeArticles;
        },
        getAdminArticles(state){
            return state.adminArticles;
        },
        getLastVisible(state){
            return state.adminLastVisible;
        }
    },
    mutations:{
        setHomeArticles(state,articles){
            state.homeArticles = articles;
        },
        setAdminArticles(state,articles){
            state.adminArticles = articles;
        },
        setAdminLastVisible(state,payload){
            state.adminLastVisible = payload;
        }
    },
    actions:{
        async getArticles({commit},payload){
            try {
                const q = query(articlesCol, orderBy('timestamp','desc'),limit(payload.limit));
                const querySnapshot = await getDocs(q);
                const articles = querySnapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                commit("setHomeArticles",articles);
            } catch(error){
                msgError(commit,error)
            }
        },
        async addArticle({commit,rootGetters},payload){
            try{
                const user = rootGetters['auth/getUserData'];
                const newArticle = doc(articlesCol);
                await setDoc(newArticle,{
                    timestamp:serverTimestamp(),
                    owner:{
                        uid: user.uid,
                        firstname: user.firstname,
                        lastname: user.lastname
                    },
                    ...payload
                });
                router.push({name:'admin_articles',params:{ reload: true }})
                msgSuccess(commit,'Congratulations')
            } catch(error){
                msgError(commit);
                console.log(error)
            }
        },
        async getMoreAdminArticles({commit,getters},payload){
            try{
                if(getters.getLastVisible){
                    let oldArticles = getters.getAdminArticles;

                    const q = query(
                        articlesCol,
                        orderBy('timestamp','desc'),
                        startAfter(getters.getLastVisible),
                        limit(payload.limit)
                    );
                    const querySnapshot = await getDocs(q);
                    const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
                    const newArticles = querySnapshot.docs.map( doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    commit('setAdminArticles',[
                        ...oldArticles,
                        ...newArticles
                    ]);
                    commit('setAdminLastVisible',lastVisible);
                }
            } catch(error){
                msgError(commit,'Opp,try again later')
            }

        },
        async getAdminArticles({commit},payload){
            try{
                const q = query(articlesCol,orderBy('timestamp','desc'),limit(payload.limit));
                const querySnapshot = await getDocs(q);

                const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
                const articles = querySnapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                commit('setAdminArticles',articles);
                commit('setAdminLastVisible',lastVisible);
            } catch(error){
                msgError(commit,error)
            }
        },
        async removeById({commit,state},payload){
            try{
                await deleteDoc(doc(db,"articles",payload));

                const newList = state.adminArticles.filter( x => {
                    return x.id != payload
                });

                commit("setAdminArticles",newList);
                msgSuccess(commit,'Articles deleted !!');

            } catch(error){
                msgError(commit,error)
            }
        }
    }
}

export default articlesModule;


// const obj = {
//     id:'1238635252',
//     owner:{
//         firstname:'Francis',
//         lastname:'Jones',
//         uid:'kjdbciue0998323'
//     },
//     game:'The last of us 2',
//     title:'Lorem ipsum dolor sit amet, consectetur',
//     rating:5,
//     timestamp:'01/01/01',
//     img:'http://placebeard.it/1080/720',
//     excerpt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     editor:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
// }