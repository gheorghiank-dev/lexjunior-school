import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

export function TextareaExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  rows = 2,
  stacked = false,
  showIndex = false,
}) {
  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const rowClassNames = ["exercise-row"];
        if (stacked) {
          rowClassNames.push("exercise-row--stacked-textarea");
        }

        const textareaId = `ex-${ex.id}-textarea`;

        const textareaClassNames = [
          "exercise-input",
          "long-input",
          stacked ? "textarea-large" : "",
          feedback[ex.id] === "correct"
            ? "exercise-input-correct"
            : feedback[ex.id] === "incorrect"
            ? "exercise-input-incorrect"
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={ex.id} className={rowClassNames.join(" ")}>
            <p className="exercise-text">
              {showIndex && (
                <span className="exercise-index">{index + 1})</span>
              )}
              {ex.prompt}
            </p>
            <textarea
              className={textareaClassNames}
              id={textareaId}
              name={textareaId}
              aria-label={ex.prompt ? `Răspuns: ${ex.prompt}` : `Răspuns exercițiul ${index + 1}`}
              rows={rows}
              value={answers[ex.id] ?? ""}
              onChange={(e) => onChange(ex.id, e.target.value)}
            />
            <LexListenOnCorrect
              isCorrect={feedback[ex.id] === "correct"}
              tts={ex.tts}
              ariaLabel={ex.tts ? `Ascultă propoziția: ${ex.tts}` : "Ascultă propoziția"}
            />
          </li>
        );
      })}
    </ol>
  );
}
