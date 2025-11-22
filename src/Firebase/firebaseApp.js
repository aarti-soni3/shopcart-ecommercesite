// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
// const analytics = getAnalytics(app);
// console.log(analytics);
