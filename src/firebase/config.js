// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "time-tracker-a2c64.firebaseapp.com",
  projectId: "time-tracker-a2c64",
  storageBucket: "time-tracker-a2c64.appspot.com",
  messagingSenderId: "479916850967",
  appId: "1:479916850967:web:e850432e005e1f02b14152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 
