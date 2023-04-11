import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";





//firebase 1


/* const firebaseConfig = {
  apiKey: "AIzaSyCHzdXuiBmgGF3iqgUNMeUQNTLTTE14CIE",
  authDomain: "se-project-31b42.firebaseapp.com",
  projectId: "se-project-31b42",
  storageBucket: "se-project-31b42.appspot.com",
  messagingSenderId: "225403751200",
  appId: "1:225403751200:web:622ec556996d5f22212545"
}; */



//firebase 2
const firebaseConfig = {
  apiKey: "AIzaSyB_JZmRgiDKu3vnlfDeGmxM1wDt-Xw1txo",
  authDomain: "se-project-d9aab.firebaseapp.com",
  projectId: "se-project-d9aab",
  storageBucket: "se-project-d9aab.appspot.com",
  messagingSenderId: "388761228968",
  appId: "1:388761228968:web:0589fc23a19a81ef1dd49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 


export default app;

