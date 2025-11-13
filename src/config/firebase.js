// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmVO4qOiYb8dTm9tIUSUyZZXliuddo1c",
  authDomain: "storybook-58efc.firebaseapp.com",
  projectId: "storybook-58efc",
  storageBucket: "storybook-58efc.firebasestorage.app",
  messagingSenderId: "10714570266",
  appId: "1:10714570266:web:1086b72b26588d72193ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);