import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpuQJb4JBDbZC9bFWzVMLseji-qVNQMcI",
  authDomain: "getwell-nutrition-coach.firebaseapp.com",
  projectId: "getwell-nutrition-coach",
  storageBucket: "getwell-nutrition-coach.firebasestorage.app",
  messagingSenderId: "996763282056",
  appId: "1:996763282056:web:219c4717188a3acbbc0d3d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
