import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "example-proj-1-6b18f",
  storageBucket: "example-proj-1-6b18f.firebasestorage.app",
  messagingSenderId: "752345773932",
  appId: "1:752345773932:web:98f590ab1eafd316866549",
  measurementId: "G-9QDW5PGPVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);