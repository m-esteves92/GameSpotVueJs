/* eslint-disable */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
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
    actions:{
        async signup({commit},payload){
            try{
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    payload.email,
                    payload.password
                );


                


            }catch(error){

            }
        }
    }
}

export default authModule;