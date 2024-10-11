// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByT9mMj2XHtE8SRoJBbdHsPH-shRMU_vY",
  authDomain: "online-job-portal-acb53.firebaseapp.com",
  projectId: "online-job-portal-acb53",
  storageBucket: "online-job-portal-acb53.appspot.com",
  messagingSenderId: "390935467612",
  appId: "1:390935467612:web:1a9921bee547e64d6af899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};