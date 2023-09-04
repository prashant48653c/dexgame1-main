// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/auth';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS7TfIWGK_cYSb48Px-onHMz_hTC-T_LI",
  authDomain: "dexgame-74167.firebaseapp.com",
  projectId: "dexgame-74167",
  storageBucket: "dexgame-74167.appspot.com",
  messagingSenderId: "135482786905",
  appId: "1:135482786905:web:727301448124d1ca199d48",
  measurementId: "G-7SY2YYMPMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const Provider=new GoogleAuthProvider()
export {auth , Provider}