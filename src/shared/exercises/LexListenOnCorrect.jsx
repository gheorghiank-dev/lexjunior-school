import React from "react";

/**
 * Componentă globală pentru butonul de listen în exerciții.
 *
 * Reguli:
 * - apare DOAR când isCorrect === true;
 * - folosește data-tts, compatibil cu lex-voice.js;
 * - în rest nu randăm nimic (null).
 */
export function LexListenOnCorrect({ isCorrect, tts, ariaLabel }) {
  if (!isCorrect) {
    return null;
  }

  return (
    <button
      type="button"
      className="lex-voice-btn"
      data-tts={tts}
      aria-label={ariaLabel || "Ascultă propoziția"}
    >
      🔊
    </button>
  );
}
