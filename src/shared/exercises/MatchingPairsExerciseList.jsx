import React, { useMemo, useState } from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

/**
 * MatchingPairsExerciseList
 *
 * Tip nou de exercițiu pentru:
 *  - propoziție pe stânga
 *  - expresii de timp pe dreapta (pool comun)
 *  - elevul le potrivește prin drag & drop sau click.
 *
 * Structură a unui exercițiu:
 * {
 *   id: 1,
 *   leftText: "I go jogging ___ .",
 *   correct: "every-morning",
 *   options: [
 *     { value: "every-morning", label: "every morning" },
 *     { value: "every-weekend", label: "every weekend" },
 *     { value: "on-friday", label: "on Friday" },
 *   ],
 *   tts?: "I go jogging every morning.", // opțional, pentru butonul de listen
 * }
 *
 * answers[ex.id] = opt.value selectat (ex: "every-morning")
 * feedback[ex.id] = "correct" | "incorrect" (vine din useRoomEngine)
 */
export function MatchingPairsExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = false,
  testIdPrefix,
}) {
  const [draggingValue, setDraggingValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  // Agregăm toate opțiunile într-un pool comun (dreapta)
  const allOptions = useMemo(() => {
    const map = new Map();

    (exercises || []).forEach((ex) => {
      (ex.options || []).forEach((opt) => {
        if (!opt || !opt.value) return;
        if (!map.has(opt.value)) {
          map.set(opt.value, opt.label ?? opt.value);
        }
      });
    });

    const entries = Array.from(map.entries());
    // Fisher–Yates shuffle so that banca de cuvinte nu e în aceeași ordine ca răspunsurile corecte
    for (let i = entries.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = entries[i];
      entries[i] = entries[j];
      entries[j] = tmp;
    }

    return entries.map(([value, label]) => ({
      value,
      label,
    }));
  }, [exercises]);

  const valueToLabel = useMemo(() => {
    const obj = {};
    allOptions.forEach((opt) => {
      obj[opt.value] = opt.label;
    });
    return obj;
  }, [allOptions]);

  const getCurrentValueForExercise = (ex) => {
    if (!answers) return "";
    if (!Object.prototype.hasOwnProperty.call(answers, ex.id)) return "";
    return answers[ex.id] ?? "";
  };

  const isValueUsed = (value) => {
    if (!answers) return false;
    return Object.values(answers).some((v) => v === value);
  };

  const handleDropOnExercise = (exId) => {
    if (!draggingValue) return;
    onChange(exId, draggingValue);
    setDraggingValue(null);
    setSelectedValue(null);
  };

  const handleClickSlot = (exId) => {
    if (!selectedValue) return;
    onChange(exId, selectedValue);
  };

  return (
    <div className="matching-layout">
      {/* Coloana stângă – propozițiile */}
      <div className="matching-left">
        <ol className="exercise-list matching-list">
          {exercises.map((ex, index) => {
            const safePrefix = testIdPrefix || "matching";
            const currentValue = getCurrentValueForExercise(ex);
            const currentLabel =
              currentValue && valueToLabel[currentValue]
                ? valueToLabel[currentValue]
                : currentValue || "";

            const status = feedback ? feedback[ex.id] : null;

            const slotClassNames = ["matching-slot"];
            if (!currentLabel) {
              slotClassNames.push("matching-slot--empty");
            }
            if (status === "correct") {
              slotClassNames.push("matching-slot--correct");
            } else if (status === "incorrect") {
              slotClassNames.push("matching-slot--incorrect");
            }

            return (
              <li
                key={ex.id}
                className="exercise-row exercise-row--matching"
              >
                <div className="exercise-header-row">
                  {showIndex && (
                    <span className="exercise-index">{index + 1}.</span>
                  )}
                  <p className="exercise-text">{ex.leftText}</p>
                </div>

                <div
                  className={slotClassNames.join(" ")}
                  data-testid={`${safePrefix}-slot-${ex.id}`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDropOnExercise(ex.id);
                  }}
                  onClick={() => handleClickSlot(ex.id)}
                >
                  {currentLabel ? (
                    <span className="matching-slot-label">
                      {currentLabel}
                    </span>
                  ) : (
                    <span className="matching-slot-placeholder">
                      Trage sau alege o expresie de timp
                    </span>
                  )}
                </div>

                <LexListenOnCorrect
                  isCorrect={status === "correct"}
                  tts={ex.tts}
                  ariaLabel={
                    ex.tts
                      ? `Ascultă propoziția: ${ex.tts}`
                      : "Ascultă propoziția corectă"
                  }
                />
              </li>
            );
          })}
        </ol>
      </div>

      {/* Coloana dreaptă – expresiile de timp */}
      <div className="matching-right">
        <div className="matching-options">
          {allOptions.map((opt) => {
            const safePrefix = testIdPrefix || "matching";
            const isSelected = selectedValue === opt.value;
            const used = isValueUsed(opt.value);

            const optionClassNames = ["matching-option"];
            if (isSelected) optionClassNames.push("matching-option--selected");
            if (used) optionClassNames.push("matching-option--used");

            return (
              <button
                key={opt.value}
                type="button"
                className={optionClassNames.join(" ")}
                data-testid={`${safePrefix}-opt-${opt.value}`}
                draggable
                onDragStart={() => setDraggingValue(opt.value)}
                onDragEnd={() => setDraggingValue(null)}
                onClick={() =>
                  setSelectedValue(isSelected ? null : opt.value)
                }
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
