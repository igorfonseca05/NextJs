
import { initializeApp } from "firebase/app";

import {
  getFirestore, 
  addDoc, 
  collection, 
  onSnapshot, 
  doc, 
  query, 
  where, 
  orderBy,
 deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tasks-ee0f3.firebaseapp.com",
  projectId: "tasks-ee0f3",
  storageBucket: "tasks-ee0f3.firebasestorage.app",
  messagingSenderId: "681974365534",
  appId: "1:681974365534:web:e10d0c81c5392f7ee063cf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
  db, 
  addDoc, 
  collection, 
  onSnapshot, 
  doc,
  query, 
  where,
  orderBy,
  deleteDoc
}