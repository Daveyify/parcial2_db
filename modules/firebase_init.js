// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSQziwY30n4K4LKKphRc_KS4rn6ek0Y5Y",
  authDomain: "designcore-ce5a2.firebaseapp.com",
  projectId: "designcore-ce5a2",
  storageBucket: "designcore-ce5a2.firebasestorage.app",
  messagingSenderId: "462033201661",
  appId: "1:462033201661:web:4e9a3f358c389385b8d194"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };