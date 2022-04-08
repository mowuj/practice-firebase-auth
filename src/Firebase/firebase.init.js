// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZ-JJhiTsVL-1KV8iqo7GOgWZJg0iHWg",
  authDomain: "practice-firebase-auth-e4337.firebaseapp.com",
  projectId: "practice-firebase-auth-e4337",
  storageBucket: "practice-firebase-auth-e4337.appspot.com",
  messagingSenderId: "614385231256",
  appId: "1:614385231256:web:0d2ec7804a32f9a10cf7ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;