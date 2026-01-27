import React from "react";
import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

import "../../../styles/exercises/base.css";

/**
 * UsesCardMcqExerciseList
 *
 * Variantă specială de MCQ pentru camerele de Uses (Room 5 & 6),
 * cu layout pe carduri.
 *
 * Props:
 * - showIndex: boolean (afișează 1., 2., 3. ...)
 * - exercises: [{ id, prompt, options: [{ value, label }], correct, tts? }]
 * - answers: { [id]: string }
 * - feedback: { [id]: "correct" | "incorrect" | undefined }
 * - onChange: (id, newValue) => void
 */
export function UsesCardMcqExerciseList({
  showIndex = true,
  exercises,
  answers,
  feedback,
  onChange,
}) {
  const handleOptionClick = (exerciseId, optionValue) => {
    if (typeof onChange === "function") {
      onChange(exerciseId, optionValue);
    }
  };

  return (
    <div className="notranslate" translate="no">
      <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const selected = answers && answers[ex.id];
        const itemFeedback = feedback && feedback[ex.id]; // "correct" | "incorrect" | undefined

        const isCorrect = itemFeedback === "correct";
        const isIncorrect = itemFeedback === "incorrect";

        const rowClassNames = [
          "exercise-row",
          "exercise-row--uses-card",
          isCorrect ? "exercise-row-correct" : "",
          isIncorrect ? "exercise-row-incorrect" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={ex.id} className={rowClassNames}>
            <div className="uses-card-body">
              <div className="uses-card-header">
                <p className="exercise-text">
                  {showIndex && (
                    <span className="exercise-index">{index + 1}.</span>
                  )}{" "}
                  {ex.prompt}
                </p>

                <LexListenOnCorrect
                  isCorrect={isCorrect}
                  tts={ex.tts}
                  ariaLabel={`Ascultă propoziția: ${ex.tts}`}
                />
              </div>

              <div className="uses-card-options">
                {ex.options.map((opt, optIndex) => {
                  const isSelected = selected === opt.value;

                  const optionClassNames = [
                    "uses-card-option",
                    isSelected ? "is-selected" : "",
                    isCorrect && isSelected ? "is-correct" : "",
                    isIncorrect && isSelected ? "is-incorrect" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <button
                      key={opt.value}
                      type="button"
                      className={optionClassNames}
                      onClick={() => handleOptionClick(ex.id, opt.value)}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>          </li>
        );
      })}
    </ol>
    </div>
  );
}
