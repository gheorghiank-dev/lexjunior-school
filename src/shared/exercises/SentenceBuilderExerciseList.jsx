import React, { useMemo } from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";
import LexTtsButton from "./LexTtsButton.jsx";

import "../../styles/exercises/base.css";
import "../../styles/exercises/sentence-builder.css";

export function SentenceBuilderExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
  testIdPrefix,
}) {
  // 🔁 Shuffle stabil al word bank-ului, o singură dată per montare
  const shuffledBankMap = useMemo(() => {
    const map = new Map();
    if (!exercises) return map;

    exercises.forEach((ex) => {
      const bank = Array.isArray(ex.wordBank) ? ex.wordBank : [];
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

  const getWordsFromAnswer = (raw) => {
    if (!raw) return [];
    const trimmed = String(raw).trim();
    if (!trimmed) return [];
    return trimmed.split(/\s+/);
  };

  // Din banca shuffle-uită scădem ce e deja folosit în răspuns → rămân doar cuvintele disponibile
  const getRemainingWords = (wordBank, chosenWords) => {
    if (!Array.isArray(wordBank) || wordBank.length === 0) return [];
    const remaining = [];
    const usedCounts = {};

    chosenWords.forEach((w) => {
      usedCounts[w] = (usedCounts[w] || 0) + 1;
    });

    wordBank.forEach((w) => {
      const count = usedCounts[w] || 0;
      if (count > 0) {
        usedCounts[w] = count - 1;
      } else {
        remaining.push(w);
      }
    });

    return remaining;
  };

  const handleAddWord = (ex, word) => {
    if (!word || !onChange) return;

    const currentAnswer = answers?.[ex.id] ?? "";
    const currentWords = getWordsFromAnswer(currentAnswer);
    const bank = shuffledBankMap.get(ex.id) || ex.wordBank || [];

    // Siguranță: nu putem folosi un cuvânt de mai multe ori decât apare în bancă
    const totalInBank = bank.filter((w) => w === word).length;
    const alreadyUsed = currentWords.filter((w) => w === word).length;

    if (totalInBank > 0 && alreadyUsed >= totalInBank) {
      return;
    }

    const nextAnswer = [...currentWords, word].join(" ");
    onChange(ex.id, nextAnswer);
  };

  const handleRemoveWordAt = (ex, indexToRemove) => {
    if (!onChange) return;

    const currentAnswer = answers?.[ex.id] ?? "";
    const currentWords = getWordsFromAnswer(currentAnswer);

    if (indexToRemove < 0 || indexToRemove >= currentWords.length) return;

    const nextWords = [
      ...currentWords.slice(0, indexToRemove),
      ...currentWords.slice(indexToRemove + 1),
    ];

    onChange(ex.id, nextWords.join(" "));
  };

  const handleReset = (ex) => {
    if (!onChange) return;
    onChange(ex.id, "");
  };

  return (
    <div className="notranslate" translate="no">
      <ol className="exercise-list sentence-builder-list">
        {exercises.map((ex, index) => {
          const answerForEx = answers?.[ex.id] ?? "";
          const chosenWords = getWordsFromAnswer(answerForEx);
          const shuffledBank = shuffledBankMap.get(ex.id) || ex.wordBank || [];
          const remainingWords = getRemainingWords(shuffledBank, chosenWords);

          const state = feedback?.[ex.id];
          const isCorrect = state === "correct";
          const isIncorrect = state === "incorrect";

          // 🔴🟢 Astea dau culoarea pe rând (corect/greșit)
          const rowClassNames = [
            "exercise-row",
            "exercise-row--sentence-builder",
          ];
          if (isCorrect) rowClassNames.push("exercise-row--correct");
          if (isIncorrect) rowClassNames.push("exercise-row--incorrect");

          const headerText = ex.question || ex.prompt || "";

          return (
            <li
              key={ex.id}
              className={rowClassNames.join(" ")}
              data-testid={
                testIdPrefix ? `${testIdPrefix}-row-${ex.id}` : undefined
              }
            >
              <div className="exercise-card">
                <div className="exercise-card-body">
                  {/* Întrebare + TTS pentru întrebare */}
                  <div className="sentence-builder-header">
                    <p className="sentence-builder-question">
                      {showIndex && (
                        <span className="exercise-index">{index + 1}.</span>
                      )}
                      <span>{headerText}</span>
                    </p>

                    {headerText && (
                      <LexTtsButton
                        text={ex.ttsQuestion || headerText}
                        ariaLabel={`Ascultă întrebarea ${index + 1}`}
                      />
                    )}
                  </div>

                  {/* Zona de propoziție — fix sub întrebare, nu mai „dansează” */}
                  <div className="sentence-builder-answer-zone">
                    <div className="sentence-builder-answer-content">
                      {chosenWords.length === 0 ? (
                        <span className="sentence-builder-placeholder">
                          Click pe cuvintele din bancă pentru a construi
                          propoziția.
                        </span>
                      ) : (
                        <div className="sentence-builder-answer-tokens">
                          {chosenWords.map((word, wordIndex) => (
                            <button
                              key={`${ex.id}-answer-${wordIndex}-${word}`}
                              type="button"
                              className="sentence-builder-answer-token"
                              onClick={() => handleRemoveWordAt(ex, wordIndex)}
                            >
                              {word}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {ex.tts && (
                      <LexListenOnCorrect
                        isCorrect={isCorrect}
                        tts={ex.tts}
                        ariaLabel={`Ascultă propoziția corectă pentru exercițiul ${
                          index + 1
                        }`}
                      />
                    )}
                  </div>

                  {/* Banca de cuvinte — cuvintele folosite dispar */}
                  <div className="sentence-builder-wordbank">
                    {remainingWords.map((word, wordIndex) => (
                      <button
                        key={`${ex.id}-pool-${wordIndex}-${word}`}
                        type="button"
                        className="sentence-builder-word"
                        onClick={() => handleAddWord(ex, word)}
                        data-testid={
                          testIdPrefix
                            ? `${testIdPrefix}-pool-${ex.id}-${wordIndex}`
                            : undefined
                        }
                      >
                        {word}
                      </button>
                    ))}
                  </div>

                  {/* Buton reset */}
                  <div className="sentence-builder-actions-row">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm sentence-builder-reset-button"
                      onClick={() => handleReset(ex)}
                    >
                      Resetează răspunsul
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
