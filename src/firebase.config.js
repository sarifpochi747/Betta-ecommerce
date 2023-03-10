import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDPsn8vRFg_ADqhslagE90fX0QQhN6AhzQ",
  authDomain: "se-project-23a18.firebaseapp.com",
  projectId: "se-project-23a18",
  storageBucket: "se-project-23a18.appspot.com",
  messagingSenderId: "1058204060115",
  appId: "1:1058204060115:web:bf8758a3050d37648e8726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 


export default app;