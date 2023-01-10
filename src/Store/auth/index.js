/* eslint-disable */
import { msgError, msgSuccess } from '../../Tools/vuex'
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
    mutations:{
        setUser(state,payload){
            state.user = {
                ...state.user,
                ...payload
            }
            state.auth = true;
        }
    },
    actions:{
        async getUserProfile({commit},payload){
            try{
                const docSnap = await getDoc(doc(db,'users',payload));

                if(docSnap.exists()){
                    return docSnap.data();
                } else {
                    return null
                }
            } catch(error){
                console.log(error)
            }
        },
        async signin({commit,dispatch},payload){
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    payload.email,
                    payload.password
                );
                
                const userData = await dispatch('getUserProfile',userCredential.user.uid);
                commit('setUser',userData);
                router.push('/user/dashboard');

                
            } catch(error){
                console.log(error);
                msgError(commit);
            }
        },
        async signup({commit},payload){
            try{
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
                msgError(commit);
            }
        }
    }
}

export default authModule;