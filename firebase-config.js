import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4F8Fk5BO_FfWlDMupBmzoBrAYeGtgv1A",
  authDomain: "family-app-007.firebaseapp.com",
  projectId: "family-app-007",
  storageBucket: "family-app-007.firebasestorage.app",
  messagingSenderId: "643830815975",
  appId: "1:643830815975:web:40cea06de31dc3534c9642",
  measurementId: "G-8W2ZSGTRSC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);