// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpuQJb4JBDbZC9bFWzVMLseji-qVNQMcI",
  authDomain: "getwell-nutrition-coach.firebaseapp.com",
  projectId: "getwell-nutrition-coach",
  storageBucket: "getwell-nutrition-coach.firebasestorage.app",
  messagingSenderId: "996763282056",
  appId: "1:996763282056:web:219c4717188a3acbbc0d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Make it available to other files
window.firebaseApp = app;

console.log("✅ Firebase Connected");
