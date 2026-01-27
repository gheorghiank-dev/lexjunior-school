import React, { useState, useRef } from "react";
import { normalizeAnswer } from "../ps-core/normalize-answer.js";
import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

import "../../../styles/exercises/base.css";

/**
 * Exerciții de tip "traduceri cu rune" pentru Uses Room 7.
 * 
 * Fiecare exercițiu are forma:
 *   { id, native, hint, correct, tts? }
 *
 * - "native"  = propoziția în română;
 * - "hint"    = explicația tip "Este un program fix.";
 * - "correct" = răspunsul corect în engleză;
 * - "tts"     = opțional, folosit la butonul de listen după verificarea globală.
 *
 * Componenta lucrează împreună cu useRoomEngine:
 * - answers[id]  = textul scris de elev;
 * - feedback[id] = "correct" | "incorrect" după verificarea globală.
 *
 * Rune:
 * - 🧩 Indiciu   → afișează hint-ul sub propoziție;
 * - ✏️ Scrie     → setează focus pe input;
 * - 🔮 Verifică  → verifică DOAR propoziția curentă (feedback local, formativ).
 */
export function RuneTranslationExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
}) {
  const [visibleHints, setVisibleHints] = useState({});
  const [localMessages, setLocalMessages] = useState({});
  const inputRefs = useRef({});

  const handleHintClick = (id) => {
    setVisibleHints((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleWriteClick = (id) => {
    const el = inputRefs.current[id];
    if (el && typeof el.focus === "function") {
      el.focus();
    }
  };

  const handleCheckOne = (ex) => {
    const raw = (answers && answers[ex.id]) || "";
    const trimmed = raw.trim();

    if (!trimmed) {
      setLocalMessages((prev) => ({
        ...prev,
        [ex.id]: { type: "error", text: "Scrie răspunsul." },
      }));
      return;
    }

    const student = normalizeAnswer(trimmed);
    const correct = normalizeAnswer(ex.correct || "");

    const isCorrect = student === correct;

    setLocalMessages((prev) => ({
      ...prev,
      [ex.id]: {
        type: isCorrect ? "ok" : "error",
        text: isCorrect ? "Corect!" : "Mai încearcă.",
      },
    }));
  };

  const hasGlobalFeedback = (id) =>
    feedback && Object.prototype.hasOwnProperty.call(feedback, id);

  return (
    <div className="notranslate" translate="no">
      <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const rowClasses = [
          "exercise-row",
          "exercise-row--rune",
          hasGlobalFeedback(ex.id) && feedback[ex.id] === "correct"
            ? "exercise-row-correct"
            : "",
          hasGlobalFeedback(ex.id) && feedback[ex.id] === "incorrect"
            ? "exercise-row-incorrect"
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        const message = localMessages[ex.id];

        return (
          <li key={ex.id} className={rowClasses}>
            <div className="exercise-main">
              <p className="sentence-native">
                <span className="exercise-index">{index + 1}.</span>{" "}
                {ex.native}
              </p>

              <div className="rune-row">
                <button
                  type="button"
                  className="rune-btn"
                  onClick={() => handleHintClick(ex.id)}
                >
                  🧩 Indiciu
                </button>
                <button
                  type="button"
                  className="rune-btn"
                  onClick={() => handleWriteClick(ex.id)}
                >
                  ✏️ Scrie
                </button>
                <button
                  type="button"
                  className="rune-btn"
                  onClick={() => handleCheckOne(ex)}
                >
                  🔮 Verifică
                </button>
              </div>

              {visibleHints[ex.id] && ex.hint && (
                <div className="hint-text">{ex.hint}</div>
              )}

              <div className="answer-wrapper">
                <input
                  type="text"
                  className="translation-input js-input"
                  id={`rune-ex-${ex.id}`}
                  name={`rune-ex-${ex.id}`}
                  aria-label={`Traducere exercițiul ${index + 1}`}
                  ref={(el) => {
                    if (el) {
                      inputRefs.current[ex.id] = el;
                    }
                  }}
                  value={(answers && answers[ex.id]) || ""}
                  onChange={(e) => onChange(ex.id, e.target.value)}
                />
              </div>

              {message && (
                <div
                  className={
                    "mini-message " +
                    (message.type === "ok" ? "ok" : "error")
                  }
                >
                  {message.text}
                </div>
              )}
            </div>

            <LexListenOnCorrect
              isCorrect={feedback && feedback[ex.id] === "correct"}
              tts={(answers && answers[ex.id]) || ex.correct}
              ariaLabel={`Ascultă propoziția: ${
                (answers && answers[ex.id]) || ex.correct
              }`}
            />
          </li>
        );
      })}
    </ol>
    </div>
  );
}
