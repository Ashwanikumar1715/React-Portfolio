import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvsE3Vs-eBDPACzFYqWomjM3oBlI7Np3w",
  authDomain: "portfolio-af188.firebaseapp.com",
  projectId: "portfolio-af188",
  storageBucket: "portfolio-af188.appspot.com",
  messagingSenderId: "615492474346",
  appId: "1:615492474346:web:4804856aadbf75fff48e93",
  measurementId: "G-F0TGJLZFHS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
