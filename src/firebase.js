// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCN9wqubvrD45rcgQxbRX1YdjGCjA6Hfos",
  authDomain: "azsk-2fabc.firebaseapp.com",
  projectId: "azsk-2fabc",
  storageBucket: "azsk-2fabc.firebasestorage.app",
  messagingSenderId: "955251017205",
  appId: "1:955251017205:web:a76ad5681bee7caa8e0cbc",
  measurementId: "G-FYGL8QDNJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export default db

export const auth = getAuth()