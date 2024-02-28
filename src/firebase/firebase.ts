import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHJamhjZ_6S-P84cNgBHjwBsvRLKY0Dok",
  authDomain: "todo-list-590e2.firebaseapp.com",
  projectId: "todo-list-590e2",
  storageBucket: "todo-list-590e2.appspot.com",
  messagingSenderId: "995923143434",
  appId: "1:995923143434:web:2c017c40b36d1bd23a68f3",
  measurementId: "G-J435RZRPCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth };
