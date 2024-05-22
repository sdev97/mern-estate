// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: 'AIzaSyDBTKyx5iDLehKONfEAU_BSzG0WJ55CYDA',
  authDomain: "mern-estate-f4f9a.firebaseapp.com",
  projectId: "mern-estate-f4f9a",
  storageBucket: "mern-estate-f4f9a.appspot.com",
  messagingSenderId: "733962778586",
  appId: "1:733962778586:web:bfd099227dc35f81dd72e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);