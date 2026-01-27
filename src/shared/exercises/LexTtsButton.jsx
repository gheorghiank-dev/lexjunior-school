import React from "react";
import "../../styles/components/lex-voice-btn.css";

/**
 * Buton standard pentru text-to-speech (🔊) în paginile de teorie.
 *
 * Nu implementează direct logica de TTS aici – aceasta este delegată
 * runtime-ului TTS din `src/shared/tts/lex-voice-runtime.js`, care ascultă
 * click-urile pe `.lex-voice-btn` și citește atributul `data-tts`.
 *
 * Componenta doar normalizează marcajul HTML/JSX:
 *  - clasa `lex-voice-btn`
 *  - atributul `data-tts`
 *  - aria-label (opțional, pentru accesibilitate)
 */
export default function LexTtsButton({ text, ariaLabel }) {
  const label =
    ariaLabel || (text ? `Ascultă propoziția: ${text}` : "Ascultă propoziția.");

  return (
    <button
      type="button"
      className="lex-voice-btn"
      data-tts={text}
      aria-label={label}
    >
      🔊
    </button>
  );
}
