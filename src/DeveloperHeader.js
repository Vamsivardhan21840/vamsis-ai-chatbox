// DeveloperHeader.js
import React from "react";
import "./DeveloperHeader.css";

export default function DeveloperHeader() {
  return (
    <div className="dev-header">
      <div className="dev-photo">
        <img
          src="C:\Users\vamsi\OneDrive\Desktop\ChatBox\my-ai-chatbox\public\myphoto.jpg.jpeg"
          alt="Thella Vamsi Vardhan"
        />
      </div>
      <div className="dev-summary">
        <div className="dev-title">
          Developed by <span>Thella Vamsi Vardhan</span>
        </div>
        <div className="dev-professional-summary">
          Passionate Computer Science undergraduate driven to bridge software development and real-world solutions. Skilled in JavaScript, ReactJS, and end-to-end problem-solving, with hands-on project experience in scalable systems and secure applications. A strong analytical thinker, collaborative team player, and dedicated to building impactful, robust technology.
        </div>
      </div>
    </div>
  );
}
