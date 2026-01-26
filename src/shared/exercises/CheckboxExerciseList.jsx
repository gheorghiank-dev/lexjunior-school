import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

/**
 * Generic checkbox exercise list for multiple-true statements.
 * Each exercise:
 *   { id, prompt, correct: "true"|"false", tts? }
 * answers[id] expected same string.
 */
export function CheckboxExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
}) {
  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const inputId = `ex-${ex.id}-chk`;
        const isChecked = answers[ex.id] === "true";

        const classes = [
          "exercise-row",
          "exercise-row--checkbox",
          feedback[ex.id] === "correct" && isChecked
            ? "exercise-row-correct"
            : "",
          feedback[ex.id] === "incorrect" && isChecked
            ? "exercise-row-incorrect"
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        // Listen policy (low-risk, global):
        // - NU arătăm 🔊 înainte de Verify;
        // - după Verify, arătăm 🔊 doar pentru opțiunile selectate CORECT de elev.
        //   (adică: elevul a bifat, iar verdictul e "correct")
        const showListen =
          feedback?.[ex.id] === "correct" && isChecked && ex.correct === "true";

        return (
          <li key={ex.id} className={classes}>
            <label htmlFor={inputId} className="checkbox-option">
              <input
                id={inputId}
                type="checkbox"
                name={`ex-${ex.id}`}
                className="checkbox-option-input"
                checked={isChecked}
                onChange={(e) => {
                  onChange(ex.id, e.target.checked ? "true" : "false");
                }}
              />
              <span className="checkbox-option-label">
                {showIndex && (
                  <span className="exercise-index">{index + 1}.</span>
                )}
                {ex.prompt}
              </span>
            </label>
            <LexListenOnCorrect
              isCorrect={showListen}
              tts={ex.tts}
              ariaLabel={
                ex.tts ? `Ascultă propoziția: ${ex.tts}` : "Ascultă propoziția"
              }
            />
          </li>
        );
      })}
    </ol>
  );
}
