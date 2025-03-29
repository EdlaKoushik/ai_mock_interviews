// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCl-pSGnYqLhC-neyUcSNtvjmgaoTkpEiE",
    authDomain: "prepwise-dcd4a.firebaseapp.com",
    projectId: "prepwise-dcd4a",
    storageBucket: "prepwise-dcd4a.firebasestorage.app",
    messagingSenderId: "843713328586",
    appId: "1:843713328586:web:62adb92944e4dc211e4b33",
    measurementId: "G-BSN7N1HMWC"
};

// Initialize Firebase
const app = !getApps.length  ? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);