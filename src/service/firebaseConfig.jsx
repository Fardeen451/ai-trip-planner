// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1hDoi5HpuXmKW0NSFAsBbcqqPgG_kpTo",
  authDomain: "ai-travel-app-58e16.firebaseapp.com",
  projectId: "ai-travel-app-58e16",
  storageBucket: "ai-travel-app-58e16.appspot.com",
  messagingSenderId: "451809668808",
  appId: "1:451809668808:web:91d52b699abbd8740f7ffd",
  measurementId: "G-ZPJT73JRHS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);