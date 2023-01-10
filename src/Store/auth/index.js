/* eslint-disable */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';


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
                    
            }catch(error){
                console.error(error)
            }
        }
    }
}

export default authModule;