import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
// Get all <audio> elements.
const audios = document.querySelectorAll("audio");

// Pause all <audio> elements except for the one that started playing.
function pauseOtherAudios({ target }) {
  for (const audio of audios) {
    if (audio !== target) {
      audio.pause();
    }
  }
}

// Listen for the 'play' event on all the <audio> elements.
for (const audio of audios) {
  audio.addEventListener("play", pauseOtherAudios);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
