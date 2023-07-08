import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8j9AC9wixS7c9v7ulgmycxCdmwcoryzY",
  authDomain: "linkedin-clone-cc505.firebaseapp.com",
  projectId: "linkedin-clone-cc505",
  storageBucket: "linkedin-clone-cc505.appspot.com",
  messagingSenderId: "959687968136",
  appId: "1:959687968136:web:8b2eaae53d07f30c9a663d",
  measurementId: "G-3B3PYHE6GH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, db, provider, storage };