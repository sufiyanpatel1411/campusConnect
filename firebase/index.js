import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCnfI4m38uqzCsAk1NWTAS2AQZRK1J-2sM",
  authDomain: "campusconnect-auth.firebaseapp.com",
  projectId: "campusconnect-auth",
  storageBucket: "campusconnect-auth.appspot.com",
  messagingSenderId: "914889066395",
  appId: "1:914889066395:web:b8430fd7a4170fd8c6033e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, createUserWithEmailAndPassword, signInWithRedirect, getRedirectResult, provider };
