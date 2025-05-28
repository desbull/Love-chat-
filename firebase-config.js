import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxd9PwLLsxKMuA2ysJSoGUcwkzvBQ1xe0",
  authDomain: "desibull-d6367.firebaseapp.com",
  databaseURL: "https://desibull-d6367-default-rtdb.firebaseio.com",
  projectId: "desibull-d6367",
  storageBucket: "desibull-d6367.appspot.com",
  messagingSenderId: "848276211708",
  appId: "1:848276211708:web:2c286e13c60031b91ed479"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue };
