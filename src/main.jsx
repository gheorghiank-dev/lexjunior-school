import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { ensureLexVoiceRuntimeInstalled } from "./shared/tts/lex-voice-runtime";
import "./styles/global.css";
import "./styles/lex.css";

// React-pur: motorul TTS e acum în src/ (nu mai încărcăm script legacy din /public).
ensureLexVoiceRuntimeInstalled();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Mecanism global: la fiecare schimbare de rută, face scroll sus */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
