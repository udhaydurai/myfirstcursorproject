// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAryaDmfExZuozITa2feX-Ys2nlgDK4-XU",
  authDomain: "myfirstcursorproject-3a793.firebaseapp.com",
  projectId: "myfirstcursorproject-3a793",
  storageBucket: "myfirstcursorproject-3a793.firebasestorage.app",
  messagingSenderId: "969629831096",
  appId: "1:969629831096:web:9f83545fa331fd32f1094d",
  measurementId: "G-DNHLYTBW42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);