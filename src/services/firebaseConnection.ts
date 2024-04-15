import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyAkd4R9Ps4g5Wud0eggDlkcrZ-Hy1dJl8o",
  authDomain: "reactlinks-7d592.firebaseapp.com",
  projectId: "reactlinks-7d592",
  storageBucket: "reactlinks-7d592.appspot.com",
  messagingSenderId: "1087841237915",
  appId: "1:1087841237915:web:2e0aceb63c1ac56004ff3e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
