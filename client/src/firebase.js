// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4caa1.firebaseapp.com",
  projectId: "mern-estate-4caa1",
  storageBucket: "mern-estate-4caa1.appspot.com",
  messagingSenderId: "1073146083159",
  appId: "1:1073146083159:web:5c9606c25965f711c37012",
  measurementId: "G-T48007PF9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);