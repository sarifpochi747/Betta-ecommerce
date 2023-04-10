import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCHzdXuiBmgGF3iqgUNMeUQNTLTTE14CIE",
  authDomain: "se-project-31b42.firebaseapp.com",
  projectId: "se-project-31b42",
  storageBucket: "se-project-31b42.appspot.com",
  messagingSenderId: "225403751200",
  appId: "1:225403751200:web:622ec556996d5f22212545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 


export default app;

