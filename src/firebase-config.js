// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnfhIpvC5emiA8D91L4ISylCD_JuKdems",
  authDomain: "studenthustle-4a848.firebaseapp.com",
  projectId: "studenthustle-4a848",
  storageBucket: "studenthustle-4a848.appspot.com",
  messagingSenderId: "1036087937242",
  appId: "1:1036087937242:web:98025e0b5b74336ba63de3",
  measurementId: "G-PRDRJX31Q1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);