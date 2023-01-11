/*eslint-disable */
import { msgError, msgSuccess } from '../../Tools/vuex';
import fbErrors from '../../Tools/fbcodes';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import router from '../../routes';


const DEFAULT_USER = {
    uid:null,
    email:null,
    firstname:null,
    lastname:null,
    isAdmin:null
}


const authModule = {
    namespaced:true,
    state(){
        return {
            user:DEFAULT_USER,
            auth:false
        }   
    },
    getters:{
        isAuth(state){
            if(state.auth) { return true};
            return false 
        },
        isAdmin(state){
            if(state.user.isAdmin) { return true};
            return false 
        }
    },
    mutations:{
        setUser(state,payload){
            state.user = {
                ...state.user,
                ...payload
            }
            state.auth = true;
        },
        clearUser(state){
            state.user = DEFAULT_USER;
            state.auth = false;
        }
    },
    actions:{
        async signOut({commit}){
            try{
                await auth.signOut();
                commit('clearUser');
                msgSuccess(commit,'Bye :(');
                router.push('/');
            } catch(error){
                msgError(commit);
            }
        },
        async autosign({commit,dispatch},payload){
            try {
                const userData = await dispatch('getUserProfile',payload.uid);
                commit('setUser', userData);
                return true;
            } catch(error){
                msgError(commit);
                console.log(error)
            }
        },
        async getUserProfile({commit},payload){
            try{
                const docSnap = await getDoc(doc(db,'users',payload));

                if(docSnap.exists()){
                    return docSnap.data();
                } else {
                    return null
                }
            } catch(error){
                msgError(commit);
                console.log(error)
            }
        },
        async signin({commit,dispatch},payload){
            try {
                commit('notify/setLoading',true,{ root: true })
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    payload.email,
                    payload.password
                );
                
                const userData = await dispatch('getUserProfile',userCredential.user.uid);
                commit('setUser',userData);

                msgSuccess(commit,'Welcome !!')
                router.push('/user/dashboard');                
            } catch(error){
                msgError(commit,fbErrors(error.code));
            } finally{
                commit('notify/setLoading',false,{ root: true })
            }
            
        },
        async signup({commit},payload){
            try{
                commit('notify/setLoading',true,{ root: true })
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    payload.email,
                    payload.password
                );

                const newUser = {
                    uid:userCredential.user.uid,
                    email:userCredential.user.email,
                    isAdmin:false /// warning -  cloud function
                }
                await setDoc(doc(db,'users',userCredential.user.uid),newUser);
                commit('setUser',newUser);

                msgSuccess(commit,'Welcome !!')
                router.push('/user/dashboard');    
            }catch(error){
                msgError(commit,fbErrors(error.code));
            } finally{
                commit('notify/setLoading',false,{ root: true })
            }
        }
    }
}

export default authModule;