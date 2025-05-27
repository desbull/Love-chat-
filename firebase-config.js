// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// (Optional) Import more services if needed:
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxd9PwLLsxKMuA2ysJSoGUcwkzvBQ1xe0",
  authDomain: "desibull-d6367.firebaseapp.com",
  projectId: "desibull-d6367",
  storageBucket: "desibull-d6367.appspot.com",
  messagingSenderId: "848276211708",
  appId: "1:848276211708:web:2c286e13c60031b91ed479",
  measurementId: "G-G62VNFB4R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app if needed elsewhere
export default app;
