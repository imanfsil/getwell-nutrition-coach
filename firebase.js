import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPuQJb4JBDbZC9bFwzVMLseji-qVN0QMcI",
  authDomain: "getwell-nutrition-coach.firebaseapp.com",
  projectId: "getwell-nutrition-coach",
  storageBucket: "getwell-nutrition-coach.appspot.com",
  messagingSenderId: "996763282056",
  appId: "1:996763282056:web:219c4717188a3acbbc0d3d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export { signInWithEmailAndPassword };
