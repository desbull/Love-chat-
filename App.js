// App.js
import React, { useState, useEffect } from "react";
import { db, ref, push, onValue } from "./firebase-config.js";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    const chatRef = ref(db, "messages");
    push(chatRef, {
      text: message,
      time: Date.now()
    });
    setMessage("");
  };

  useEffect(() => {
    const chatRef = ref(db, "messages");
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(Object.values(data));
      }
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>DesiBull 💬 Chat Room</h2>
      <div style={{ height: 200, overflowY: "scroll", border: "1px solid #ccc", padding: 10 }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
