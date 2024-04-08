// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-1a070.firebaseapp.com",
  projectId: "mern-1a070",
  storageBucket: "mern-1a070.appspot.com",
  messagingSenderId: "150603373260",
  appId: "1:150603373260:web:b425a7773fc59b44c44069"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);