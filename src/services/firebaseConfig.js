// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK--9AFXr-xTL5I_IlkaOzEq3Qti_gobM",
  authDomain: "react-login-69433.firebaseapp.com",
  projectId: "react-login-69433",
  storageBucket: "react-login-69433.appspot.com",
  messagingSenderId: "101441576768",
  appId: "1:101441576768:web:677bc13b24b72fc707e4a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);