import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDwf_fb6Y_6u_1iC0_nBljfxk44dDy1ozc",
    authDomain: "gamespot-ded4f.firebaseapp.com",
    projectId: "gamespot-ded4f",
    storageBucket: "gamespot-ded4f.appspot.com",
    messagingSenderId: "631042687140",
    appId: "1:631042687140:web:98167cade5ee2a8bc62631",
    measurementId: "G-F8W677DVMF"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    firebaseApp,
    auth,
    db
}