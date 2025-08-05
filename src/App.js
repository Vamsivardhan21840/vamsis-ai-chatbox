// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeveloperHeader from "./DeveloperHeader"; // Import the DeveloperHeader component
import Navigation from "./Navigation";
import ChatBox from "./ChatBox";
import "./App.css"; // for welcome-message styling

function Welcome() {
  return (
    <div className="welcome-message">
      <span>Welcome To, <b>Vamsi's AI</b></span>
      <div className="welcome-subtext">
        Ask anything, get instant answers.
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      About: This is a dynamic AI chatbox like ChatGPT.
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DeveloperHeader /> {/* Added DeveloperHeader above navigation */}
      <Navigation />
      <Welcome />
      <Routes>
        <Route path="/" element={<ChatBox />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
