import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLRrMql-aprM2WoRPEn8I0uwqi9TS24jw",
  authDomain: "organizadorrr.firebaseapp.com",
  projectId: "organizadorrr",
  storageBucket: "organizadorrr.firebasestorage.app",
  messagingSenderId: "953214321442",
  appId: "1:953214321442:web:97870403fbd89becad9b7b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { signInWithPopup, signOut, onAuthStateChanged, doc, setDoc, getDoc, onSnapshot };
