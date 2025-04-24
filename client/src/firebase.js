// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-a7c87.firebaseapp.com",
    projectId: "mern-estate-a7c87",
    storageBucket: "mern-estate-a7c87.firebasestorage.app",
    messagingSenderId: "217100706846",
    appId: "1:217100706846:web:494facb0594b371fe9fa0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);