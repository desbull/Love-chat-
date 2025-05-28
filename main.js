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
  messagesContainer.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const msg = childSnapshot.val();
    const div = document.createElement("div");
    div.textContent = msg.text;
    messagesContainer.appendChild(div);
  });
});

window.sendMessage = sendMessage;
