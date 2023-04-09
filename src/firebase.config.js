import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBumsnXkPmLi-KzUPTINqWMwcMWMLgd3AQ",
  authDomain: "seproject-21184.firebaseapp.com",
  projectId: "seproject-21184",
  storageBucket: "seproject-21184.appspot.com",
  messagingSenderId: "45354095152",
  appId: "1:45354095152:web:177b17a3627626e4c013f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 


export default app;

