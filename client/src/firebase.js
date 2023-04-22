// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDRchm2Ie5tSfSxza0eLgHMbFuhdeYj4xo",
  authDomain: "vishal-tube.firebaseapp.com",
  projectId: "vishal-tube",
  storageBucket: "vishal-tube.appspot.com",
  messagingSenderId: "934116144000",
  appId: "1:934116144000:web:927dd0cb5ec34303944765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;