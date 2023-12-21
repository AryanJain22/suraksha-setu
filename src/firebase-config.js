import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCV0FHfq56NFWxIEgsPpMOmT6Bj0XVmbao",
  authDomain: "suraksha-setu-41a29.firebaseapp.com",
  projectId: "suraksha-setu-41a29",
  storageBucket: "suraksha-setu-41a29.appspot.com",
  messagingSenderId: "777745206969",
  appId: "1:777745206969:web:fce73da93f9d6ac9d99568",
  measurementId: "G-7JWCCLSZNC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
