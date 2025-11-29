// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCEpEG6sjmzxEgy0CTE7LAFVDEtEH1emb0",
  authDomain: "shopcart-ecommercesite.firebaseapp.com",
  projectId: "shopcart-ecommercesite",
  storageBucket: "shopcart-ecommercesite.firebasestorage.app",
  messagingSenderId: "359040765072",
  appId: "1:359040765072:web:fc589a77276443c7c25c15",
  measurementId: "G-FD5V441MWG",
  databaseURL: "https://shopcart-ecommercesite-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
