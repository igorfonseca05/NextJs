// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAz5tIHPfWy96C7xzzePMIpL8i0XHC6owQ",
    authDomain: "testing-firebase-38808.firebaseapp.com",
    projectId: "testing-firebase-38808",
    storageBucket: "testing-firebase-38808.firebasestorage.app",
    messagingSenderId: "653475614588",
    appId: "1:653475614588:web:cdde7f527c2ecbbdb65ef9",
    measurementId: "G-193MFSSDE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db,
    setDoc,
    addDoc,
    collection,
    doc
}
