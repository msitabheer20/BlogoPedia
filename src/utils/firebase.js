// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE,
  authDomain: "blogopedia-bb483.firebaseapp.com",
  projectId: "blogopedia-bb483",
  storageBucket: "blogopedia-bb483.appspot.com",
  messagingSenderId: "331849242391",
  appId: "1:331849242391:web:55dd414d34e6c6de624952"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);