import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


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

