import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebase_api_key, firebase_app_id, firebase_messaging_sender_id, firebase_project_id } from "./envExports";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain: "startup-bauchi-website.firebaseapp.com",
  projectId: firebase_project_id,
  storageBucket: "startup-bauchi-website.appspot.com",
  messagingSenderId: firebase_messaging_sender_id,
  appId: firebase_app_id,
  measurementId: "G-312ZWPYKZB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const programsRef = collection(db, "Programs");
export const startupRef = collection(db, "Startups");
export const postRef = collection(db, "Posts");
export const auth = getAuth(app);
export const storage = getStorage(app);

