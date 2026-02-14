import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/router.jsx";
import { ensureLexVoiceRuntimeInstalled } from "./shared/tts/lex-voice-runtime";
import "./styles/global.css";
import "./styles/lex.css";

// React-pur: motorul TTS e acum în src/ (nu mai încărcăm script legacy din /public).
ensureLexVoiceRuntimeInstalled();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
