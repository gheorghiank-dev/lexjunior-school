import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

export function GapSentenceExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
  testIdPrefix,
}) {
  const GAP_TOKEN = "[gap]";

  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const [before, after] = ex.template.split(GAP_TOKEN);
        const inputId = `ex-${ex.id}-gap`;

        const inputClassNames = [
          "exercise-input",
          feedback[ex.id] === "correct" ? "exercise-input-correct" : "",
          feedback[ex.id] === "incorrect" ? "exercise-input-incorrect" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={ex.id} className="exercise-row">
            <span className="exercise-text">
              {showIndex && (
                <span className="exercise-index">{index + 1}.</span>
              )}
              {before}
              <input
                type="text"
                id={inputId}
                name={inputId}
                aria-label={`Răspuns exercițiul ${index + 1}`}
                className={inputClassNames}
                data-testid={
                  testIdPrefix ? `${testIdPrefix}-gap-${ex.id}` : undefined
                }
                value={answers[ex.id] ?? ""}
                onChange={(e) => onChange(ex.id, e.target.value)}
              />
              {after}
            </span>

            <LexListenOnCorrect
              isCorrect={feedback[ex.id] === "correct"}
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
