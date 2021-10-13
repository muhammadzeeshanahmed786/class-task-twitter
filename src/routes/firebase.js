import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import {getFirestore,doc,   addDoc, collection,getDocs, query,where} from "firebase/firestore"; 


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAF5tu4EO-bw7pz38ugpMk49e-XRpbRqbA",
    authDomain: "react-project-8b8c0.firebaseapp.com",
    projectId: "react-project-8b8c0",
    storageBucket: "react-project-8b8c0.appspot.com",
    messagingSenderId: "965295630228",
    appId: "1:965295630228:web:b224718864103dcc2dd181",
    measurementId: "G-LKJYR0T141"
  });


  const auth = getAuth();
  const db = getFirestore();
  export {
      auth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      doc,
      addDoc,
      db,
      collection,
      getDocs,
      query,
      where
      
  }