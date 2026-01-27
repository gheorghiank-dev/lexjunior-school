import React from "react";
import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

import "../../../styles/exercises/base.css";
import "../../../styles/exercises/adverb-position.css";

/**
 * AdverbPositionExerciseList
 *
 * Tip de exercițiu: propoziții cu două spații posibile pentru un adverb
 * de frecvență, dar doar una dintre poziții este corectă.
 *
 * Structura unui exercițiu:
 * {
 *   id: 1,
 *   before: "Do you",
 *   between: "eat breakfast at home",
 *   after: "?",
 *   word: "usually",
 *   correct: "slot-1" | "slot-2",
 *   tts: "Do you usually eat breakfast at home?"
 * }
 *
 * Motorul (useRoomEngine) primește:
 *  - answers[id] = "slot-1" | "slot-2"
 *  - feedback[id] = "correct" | "incorrect"
 */

export function AdverbPositionExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
}) {
  const getCurrentSlot = (ex) => {
    if (!answers) return null;
    const raw = answers[ex.id];
    if (!raw) return null;
    return String(raw);
  };

  const handleSelectSlot = (ex, slot) => {
    onChange?.(ex.id, slot);
  };

  return (
    <div className="notranslate" translate="no">
      <ol className="exercise-list adverb-position-list">
      {exercises.map((ex, index) => {
        const slot = getCurrentSlot(ex);
        const state = feedback?.[ex.id];
        const isCorrect = state === "correct";
        const isIncorrect = state === "incorrect";

        const rowClassNames = ["exercise-row", "exercise-row--adverb-pos"];
        if (isCorrect) rowClassNames.push("exercise-row--correct");
        if (isIncorrect) rowClassNames.push("exercise-row--incorrect");

        const slot1Filled = slot === "slot-1";
        const slot2Filled = slot === "slot-2";

        return (
          <li key={ex.id} className={rowClassNames.join(" ")}>
            <div className="adverb-pos-header">
              <p className="adverb-pos-sentence">
                {showIndex && (
                  <span className="exercise-index">{index + 1}.</span>
                )}
                <span className="adverb-pos-text">
                  {ex.before}{" "}
                  <button
                    type="button"
                    className={
                      "adverb-pos-slot" +
                      (slot1Filled ? " adverb-pos-slot--filled" : "")
                    }
                    onClick={() => handleSelectSlot(ex, "slot-1")}
                  >
                    {slot1Filled ? ex.word : "_____"}
                  </button>{" "}
                  {ex.between}{" "}
                  <button
                    type="button"
                    className={
                      "adverb-pos-slot" +
                      (slot2Filled ? " adverb-pos-slot--filled" : "")
                    }
                    onClick={() => handleSelectSlot(ex, "slot-2")}
                  >
                    {slot2Filled ? ex.word : "_____"}
                  </button>{" "}
                  {ex.after}
                </span>
              </p>
              <p className="adverb-pos-word-label">
                Adverb: <span className="adverb-pos-word">{ex.word}</span>
              </p>

              {ex.tts && (
                <LexListenOnCorrect
                  isCorrect={isCorrect}
                  tts={ex.tts}
                  ariaLabel={ex.tts ? `Ascultă propoziția: ${ex.tts}` : "Ascultă propoziția"}
                />
              )}
            </div>
          </li>
        );
      })}
    </ol>
    </div>
  );
}
