import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4FLb2f2wcWAJ_pdl1kmFG2Hhxs9k3FHc",
  authDomain: "satisfyingyou-mobile-cbe6a.firebaseapp.com",
  projectId: "satisfyingyou-mobile-cbe6a",
  storageBucket: "satisfyingyou-mobile-cbe6a.appspot.com",
  messagingSenderId: "616417646080",
  appId: "1:616417646080:web:85cfb6b9691923ead1eae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const storage = getStorage(app);

export { auth_mod, app, db, storage };