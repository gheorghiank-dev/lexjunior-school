import React from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

/**
 * TextInputExerciseList
 *
 * Reusable list for rooms that have:
 * - a prompt (left)
 * - a text input (middle)
 * - an optional TTS button that appears ONLY when the answer is correct (right)
 *
 * IMPORTANT: keeps the exact class names & structure used in existing rooms.
 */
export default function TextInputExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  // Optional stable test selector prefix (e.g. "ps-aff-room1")
  showIndex = true,
  testIdPrefix,
  /**
   * If true, renders LexListenOnCorrect using each exercise's `tts`.
   * If an exercise has no `tts`, no button is rendered for that row.
   */
  withListenOnCorrect = true,
  /**
   * Optional aria-label builder for the listen button.
   * Defaults to: `Ascultă propoziția: <tts>`
   */
  getListenAriaLabel,
  /**
   * Optional placeholder width (px) used when no right-side control is rendered.
   * Useful for layouts that expect a fixed right column width.
   */
  rightPlaceholderWidth,
}) {
  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const status = feedback?.[ex.id];
        const isCorrect = status === "correct";
        const isIncorrect = status === "incorrect";

        const inputId = `ex-${ex.id}-text`;

        const inputClassName = `exercise-input ${
          isCorrect
            ? "exercise-input-correct"
            : isIncorrect
            ? "exercise-input-incorrect"
            : ""
        }`;

        const ariaLabel =
          typeof getListenAriaLabel === "function"
            ? getListenAriaLabel(ex)
            : ex.tts
            ? `Ascultă propoziția: ${ex.tts}`
            : "Ascultă propoziția";

        const shouldRenderListen = Boolean(withListenOnCorrect && ex.tts);

        return (
          <li key={ex.id} className="exercise-row">
            <span className="exercise-text">
              {showIndex && (
                <span className="exercise-index">{index + 1}.</span>
              )}
              {ex.prompt}
            </span>

            <input
              type="text"
              id={inputId}
              name={inputId}
              aria-label={
                ex.prompt ? `Răspuns: ${ex.prompt}` : `Răspuns exercițiul ${index + 1}`
              }
              data-testid={testIdPrefix ? testIdPrefix + "-input-" + ex.id : undefined}
              className={inputClassName}
              value={answers?.[ex.id] ?? ""}
              onChange={(e) => onChange(ex.id, e.target.value)}
            />

            {shouldRenderListen ? (
              <LexListenOnCorrect isCorrect={isCorrect} tts={ex.tts} ariaLabel={ariaLabel} />
            ) : typeof rightPlaceholderWidth === "number" ? (
              <span style={{ width: rightPlaceholderWidth }} aria-hidden="true" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
