import React from "react";
import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

import "../../../styles/exercises/base.css";
import "../../../styles/exercises/choice.css";

/**
 * FrequencyAdverbExerciseList
 *
 * Tip de exercițiu special pentru adverbe de frecvență:
 * - propoziții cu [gap] pentru adverb (always / usually / often etc.)
 * - elevul alege un adverb din 3 variante corecte pentru el
 * - la verificare, orice variantă aleasă este considerată corectă
 *   (logica asta este tratată în pagina camerei, prin handleVerify custom),
 *   iar butonul de 🔊 citește exact propoziția cu adverbul ales.
 *
 * Props:
 * - exercises: [{ id, before, after, options: [{ value, label }], defaultAdverb? }]
 * - answers: { [id]: string }
 * - feedback: { [id]: "correct" | "incorrect" | undefined }
 * - onChange: (id, newValue) => void
 * - showIndex: boolean (afișează 1), 2), 3) ...)
 */
export function FrequencyAdverbExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
}) {
  return (
    <div className="notranslate" translate="no">
      <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const selected = (answers && answers[ex.id]) || "";
        const itemFeedback = feedback && feedback[ex.id];

        const isCorrect = itemFeedback === "correct";
        const isIncorrect = itemFeedback === "incorrect";

        const rowClassNames = [
          "exercise-row",
          "exercise-row--mcq",
          isCorrect ? "exercise-row-correct" : "",
          isIncorrect ? "exercise-row-incorrect" : "",
        ]
          .filter(Boolean)
          .join(" ");

        // propoziția afișată – cu gap sau cu adverbul ales
        const displayAdverb = selected || "___";
        const sentenceText = `${ex.before} ${displayAdverb} ${ex.after}`.replace(
          /\s+/g,
          " "
        );

        // propoziția pentru TTS – dacă elevul nu a ales nimic încă,
        // folosim un adverb implicit (primul din listă sau defaultAdverb)
        const ttsAdverb =
          selected || ex.defaultAdverb || (ex.options[0] && ex.options[0].value);
        const ttsSentence = `${ex.before} ${ttsAdverb} ${ex.after}`.replace(
          /\s+/g,
          " "
        );

        return (
          <li key={ex.id} className={rowClassNames}>
            <div className="exercise-header-row">
              <p className="exercise-text">
                {showIndex && (
                  <span className="exercise-index">{index + 1}. </span>
                )}
                {sentenceText}
              </p>

              <LexListenOnCorrect
                isCorrect={isCorrect}
                tts={ttsSentence}
                ariaLabel={ttsSentence ? `Ascultă propoziția: ${ttsSentence}` : "Ascultă propoziția"}
              />
            </div>

            <div className="mcq-options">
              {ex.options.map((opt, optIndex) => {
                const inputId = `freq-ex-${ex.id}-opt-${optIndex}`;
                const isChecked = selected === opt.value;

                return (
                  <label key={opt.value} className="mcq-option" htmlFor={inputId}>
                    <input
                      id={inputId}
                      type="radio"
                      name={`freq-ex-${ex.id}`}
                      className="mcq-radio"
                      value={opt.value}
                      checked={isChecked}
                      onChange={(e) => onChange && onChange(ex.id, e.target.value)}
                    />
                    <span className="mcq-option-label">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </li>
        );
      })}
    </ol>
    </div>
  );
}
