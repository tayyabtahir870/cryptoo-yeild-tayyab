// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnDuqjGhLkg3SOB8q0XNhqw3oxh2uA2g",
  authDomain: "crypto-59e95.firebaseapp.com",
  projectId: "crypto-59e95",
  storageBucket: "crypto-59e95.appspot.com",
  messagingSenderId: "146792812555",
  appId: "1:146792812555:web:cb7c7b2aef59b80675b70e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const auth = getAuth(app);
