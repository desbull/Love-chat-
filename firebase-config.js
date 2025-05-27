import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxd9PwLLsxKMuA2ysJSoGUcwkzvBQ1xe0",
  authDomain: "desibull-d6367.firebaseapp.com",
  projectId: "desibull-d6367",
  storageBucket: "desibull-d6367.appspot.com",
  messagingSenderId: "848276211708",
  appId: "1:848276211708:web:2c286e13c60031b91ed479",
  measurementId: "G-G62VNFB4R9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
