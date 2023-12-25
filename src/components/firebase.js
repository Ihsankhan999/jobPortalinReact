import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDbcgbObF0mv8rjpcWW9KbLOM4-vxpC4Sw",
  authDomain: "jobprotal-d4c4e.firebaseapp.com",
  projectId: "jobprotal-d4c4e",
  storageBucket: "jobprotal-d4c4e.appspot.com",
  messagingSenderId: "384771148854",
  appId: "1:384771148854:web:af8f70ec99e11ea13f1c97",
  measurementId: "G-5WDTP95RYD",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
