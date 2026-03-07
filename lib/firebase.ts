import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0AY1RzOE-NhEsI32doAuKDVhydLM3JFM",
  authDomain: "portfolio-16e5a.firebaseapp.com",
  projectId: "portfolio-16e5a",
  storageBucket: "portfolio-16e5a.firebasestorage.app",
  messagingSenderId: "996107219742",
  appId: "1:996107219742:web:641bc5fe62bca2862c8f0f",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
