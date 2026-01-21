import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

export function McqExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = false,
  testIdPrefix,
}) {
  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => (
        <li key={ex.id} className="exercise-row exercise-row--mcq">
                    <div className="exercise-header-row">
            <p className="exercise-text">
              {showIndex && <span className="exercise-index">{index + 1})</span>}
              {ex.prompt}
            </p>

            <LexListenOnCorrect
              isCorrect={feedback[ex.id] === "correct"}
              tts={ex.tts}
              ariaLabel={ex.tts ? `Ascultă propoziția: ${ex.tts}` : "Ascultă propoziția"}
            />
          </div>

          <div className="mcq-options">
            {ex.options.map((opt, optIndex) => {
              const inputId = `ex-${ex.id}-opt-${optIndex}`;
              const isChecked = answers[ex.id] === opt.value;
              const optionTestId = testIdPrefix ? `${testIdPrefix}-ex-${ex.id}-${opt.value}` : undefined;

              const optionClassNames = [
                "mcq-option",
                isChecked ? "mcq-option--selected" : "",
                feedback[ex.id] === "correct" && isChecked ? "mcq-option--correct" : "",
                feedback[ex.id] === "incorrect" && isChecked ? "mcq-option--incorrect" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <label
                  key={opt.value}
                  htmlFor={inputId}
                  className={optionClassNames}
                  data-testid={optionTestId}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`ex-${ex.id}`}
                    className="mcq-option-input"
                    value={opt.value}
                    checked={isChecked}
                    onChange={(e) => onChange(ex.id, e.target.value)}
                  />
                  <span className="mcq-option-label">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  );
}
