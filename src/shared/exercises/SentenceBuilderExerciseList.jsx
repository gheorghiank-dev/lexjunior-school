import React, { useMemo } from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";
import LexTtsButton from "./LexTtsButton.jsx";

/**
 * SentenceBuilderExerciseList
 *
 * Tip de exercițiu pentru:
 *  - întrebare (How often... ?)
 *  - zonă de răspuns unde elevul construiește propoziția
 *  - bancă de cuvinte (word bank) din care poate selecta cuvinte.
 *
 * Structura unui exercițiu:
 * {
 *   id: 1,
 *   question: "How often do you brush your teeth?",
 *   wordBank: ["I", "brush", "my", "teeth", "twice", "a", "day."],
 *   correct: "I brush my teeth twice a day.",
 *   tts: "I brush my teeth twice a day.",
 * }
 *
 * Componenta este controlată de useRoomEngine prin:
 *  - answers[ex.id] = propoziția construită ("I brush my teeth twice a day.")
 *  - feedback[ex.id] = "correct" | "incorrect" | undefined
 *  - onChange(id, value) pentru actualizarea răspunsului.
 */

export function SentenceBuilderExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
}) {
  const shuffledBankMap = useMemo(() => {
    const map = new Map();
    if (!exercises) return map;
    exercises.forEach((ex) => {
      const bank = ex.wordBank || [];
      const arr = [...bank];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      map.set(ex.id, arr);
    });
    return map;
  }, [exercises]);

  const getCurrentValue = (ex) => {
    if (!answers) return "";
    const raw = answers[ex.id];
    if (raw == null) return "";
    return String(raw);
  };

  const getTokens = (value) => {
    const trimmed = (value || "").trim();
    if (!trimmed) return [];
    return trimmed.split(/\s+/);
  };

  const handleAddWord = (ex, word) => {
    const current = getCurrentValue(ex);
    const tokens = getTokens(current);
    const nextTokens = [...tokens, word];
    const nextValue = nextTokens.join(" ");
    onChange?.(ex.id, nextValue);
  };

  const handleRemoveToken = (ex, indexToRemove) => {
    const current = getCurrentValue(ex);
    const tokens = getTokens(current);
    const nextTokens = tokens.filter((_, idx) => idx !== indexToRemove);
    const nextValue = nextTokens.join(" ");
    onChange?.(ex.id, nextValue);
  };

  const handleReset = (ex) => {
    onChange?.(ex.id, "");
  };

  return (
    <ol className="exercise-list sentence-builder-list">
      {exercises.map((ex, index) => {
        const currentValue = getCurrentValue(ex);
        const tokens = getTokens(currentValue);
        const state = feedback?.[ex.id];
        const isCorrect = state === "correct";
        const isIncorrect = state === "incorrect";

        const rowClassNames = [
          "exercise-row",
          "exercise-row--sentence-builder",
        ];
        if (isCorrect) rowClassNames.push("exercise-row--correct");
        if (isIncorrect) rowClassNames.push("exercise-row--incorrect");

        return (
          <li key={ex.id} className={rowClassNames.join(" ")}>
            <div className="sentence-builder-header">
              <p className="sentence-builder-question">
                {showIndex && (
                  <span className="exercise-index">{index + 1}.</span>
                )}
                <span>{ex.question}</span>
              </p>

              <LexTtsButton
                text={ex.question}
                ariaLabel={`Ascultă întrebarea: ${ex.question}`}
              />
            </div>

            <div className="sentence-builder-answer-zone">
              <div className="sentence-builder-answer-content">
                {tokens.length === 0 ? (
                  <span className="sentence-builder-placeholder">
                    Dă click pe cuvinte ca să construiești propoziția.
                  </span>
                ) : (
                  <div className="sentence-builder-tokens">
                    {tokens.map((token, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="sentence-builder-token"
                        onClick={() => handleRemoveToken(ex, idx)}
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <LexListenOnCorrect
                isCorrect={isCorrect}
                tts={ex.tts}
                ariaLabel={`Ascultă răspunsul corect: ${ex.tts}`}
              />
            </div>

            <div className="sentence-builder-bank">
              <div className="sentence-builder-bank-title">
                Cuvinte disponibile
              </div>
              <div className="sentence-builder-bank-words">
                {(shuffledBankMap.get(ex.id) || ex.wordBank || []).map(
                  (word, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="sentence-builder-word"
                      onClick={() => handleAddWord(ex, word)}
                    >
                      {word}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="sentence-builder-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm sentence-builder-reset-button"
                onClick={() => handleReset(ex)}
              >
                Resetează răspunsul
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
