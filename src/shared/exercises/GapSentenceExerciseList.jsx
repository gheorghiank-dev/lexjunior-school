import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

import "../../styles/exercises/base.css";
import "../../styles/exercises/text-input.css";

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
    <div className="notranslate" translate="no">
      <ol className="exercise-list">
        {Array.isArray(exercises) &&
          exercises.map((ex, index) => {
            // guard: dacă ex lipsește, nu mai crăpăm toată camera
            if (!ex) {
              console.warn(
                "GapSentenceExerciseList: missing exercise at index",
                index,
                exercises,
              );
              return null;
            }

            // acceptăm template (nou) sau prompt (în caz că mai există content vechi)
            const template = ex.template ?? ex.prompt ?? "";

            if (!template) {
              console.warn(
                "GapSentenceExerciseList: exercise has no template/prompt",
                ex,
              );
              return null;
            }

            const [before, after] = template.split(GAP_TOKEN);
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
                    ex.tts
                      ? `Ascultă propoziția: ${ex.tts}`
                      : "Ascultă propoziția"
                  }
                />
              </li>
            );
          })}
      </ol>
    </div>
  );
}
