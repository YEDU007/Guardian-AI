// firebase-config.js

// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// Import Firebase services
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⬇️ Replace these values with YOUR Firebase config ⬇️
const firebaseConfig = {
  apiKey: "AIzaSyCc59iQLRFMjq7JeKZQWEBwZ4bpenv1o-E",
  authDomain: "guardian-ai-83fb3.firebaseapp.com",
  projectId: "guardian-ai-83fb3",
  storageBucket: "guardian-ai-83fb3.firebasestorage.app",
  messagingSenderId: "925135961092",
  appId: "1:925135961092:web:661d5b236908ba9fc90951",
  measurementId: "G-SG2GX4FNTZ"
};

// Initialize app
const app = initializeApp(firebaseConfig);

// Export what your signup/login pages need
export const auth = getAuth(app);
export const db = getFirestore(app);
