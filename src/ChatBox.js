import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./ChatBox.css";  // Ensure this file contains your styling

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setLoading(true);
    setInput("");

    try {
      // Send message to your backend, not directly to OpenAI!
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      // Safely access bot reply
      const reply =
        res.data &&
        res.data.choices &&
        res.data.choices[0] &&
        res.data.choices[0].message &&
        res.data.choices[0].message.content
          ? res.data.choices[0].message.content
          : "No response from server.";

      setMessages((msgs) => [...msgs, { sender: "bot", text: reply }]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Error contacting backend/server!" }
      ]);
    }
    setLoading(false);
  }

  return (
    <motion.div className="chatbox" initial={{ x: 200 }} animate={{ x: 0 }}>
      <div className="chatbox-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.sender === "user"
                ? "chatbox-message user"
                : "chatbox-message bot"
            }
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="chatbox-message bot">Thinking...</div>
        )}
      </div>
      <form className="chatbox-input" onSubmit={sendMessage}>
        <input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Send
        </button>
      </form>
    </motion.div>
  );
}
