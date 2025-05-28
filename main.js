
// Replace this config with your own Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://YOUR_DATABASE_NAME.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const messagesRef = db.ref("messages");

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (message !== "") {
    messagesRef.push().set({
      text: message,
      timestamp: Date.now()
    });
    input.value = "";
  }
}

messagesRef.on("child_added", function(snapshot) {
  const msg = snapshot.val();
  const msgEl = document.createElement("div");
  msgEl.textContent = msg.text;
  document.getElementById("messages").appendChild(msgEl);
});
import { db, ref, push, onValue } from "./firebase-config.js";

const messagesRef = ref(db, "messages");

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (message !== "") {
    push(messagesRef, {
      text: message,
      timestamp: Date.now()
    });
    input.value = "";
  }
}

onValue(messagesRef, (snapshot) => {
  const messagesContainer = document.getElementById("messages");
  messagesContainer.innerHTML = ""; // clear old
  snapshot.forEach((childSnapshot) => {
    const msg = childSnapshot.val();
    const div = document.createElement("div");
    div.textContent = msg.text;
    messagesContainer.appendChild(div);
  });
});

window.sendMessage = sendMessage;
