// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaBZj1NKMZ3d_RJtwhuI-61ujIvUmCrXI",
  authDomain: "epistomarth.firebaseapp.com",
  projectId: "epistomarth",
  storageBucket: "epistomarth.firebasestorage.app",
  messagingSenderId: "850264903721",
  appId: "1:850264903721:web:8afdf2cce29131c5940c38",
  measurementId: "G-VRQL1QG3QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);