// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBppE_mNBHWp3fqqk2-fVNIp6QOYDqpOSk",
  authDomain: "realtor-clone-react-4b02d.firebaseapp.com",
  projectId: "realtor-clone-react-4b02d",
  storageBucket: "realtor-clone-react-4b02d.appspot.com",
  messagingSenderId: "264644468495",
  appId: "1:264644468495:web:4243dd8be12ff9965b687a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()