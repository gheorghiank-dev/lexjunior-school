import React, { useMemo, useState } from "react";
import { LexListenOnCorrect } from "./LexListenOnCorrect.jsx";

import "../../styles/exercises/base.css";
import "../../styles/exercises/pairs.css";

/**
 * MatchingPairsExerciseList
 *
 * Tip de exercițiu pentru:
 *  - propoziție pe stânga
 *  - expresii de timp pe dreapta (pool comun)
 *  - elevul le potrivește prin drag & drop sau click.
 *
 * Structura unui exercițiu:
 * {
 *   id: 1,
 *   leftText: "I go jogging ___ .",
 *   correct: "every-morning",
 *   options: [
 *     { value: "every-morning", label: "every morning" },
 *     { value: "every-weekend", label: "every weekend" },
 *     { value: "on-friday", label: "on Friday" },
 *   ],
 *   tts?: "I go jogging every morning.",
 * }
 *
 * answers[ex.id] = opt.value selectat (ex: "every-morning")
 * feedback[ex.id] = "correct" | "incorrect" (vine din useRoomEngine)
 *
 * Comportament (globalizat) pentru toate camerele cu matching:
 *  - banca din dreapta pornește cu opțiunile amestecate
 *  - click sau drag pe un cuvânt din bancă -> îl „iei în mână”
 *  - click sau drop pe un slot -> pui cuvântul în slot
 *  - același cuvânt NU poate apărea în două sloturi; dacă îl pui într-un slot nou,
 *    este scos automat din slotul vechi
 *  - cuvintele folosite dispar din bancă (nu mai pot fi alese a doua oară)
 */
export function MatchingPairsExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
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

  // Banca de cuvinte — arătăm doar opțiunile care NU sunt folosite deja,
  // ca în badge: dacă un cuvânt e într-un slot, dispare din bancă.
  const poolOptions = useMemo(() => {
    return allOptions.filter((opt) => !isValueUsed(opt.value));
  }, [allOptions, answers]);

  const handleDropOnExercise = (exId) => {
    if (!draggingValue) return;
    const value = draggingValue;

    // Menținem unicitatea: același value nu poate apărea în două exerciții.
    if (answers && exercises && onChange) {
      (exercises || []).forEach((ex) => {
        if (ex.id !== exId && getCurrentValueForExercise(ex) === value) {
          onChange(ex.id, "");
        }
      });
    }

    onChange?.(exId, value);
    setDraggingValue(null);
    setSelectedValue(null);
  };

  const handleClickSlot = (ex) => {
    const exId = ex.id;
    const currentValue = getCurrentValueForExercise(ex);

    // Dacă nu avem nimic selectat din bancă:
    //  - click pe slot plin => îl golește (cuvântul revine în bancă)
    //  - click pe slot gol => nu face nimic
    if (!selectedValue) {
      if (!currentValue) return;
      onChange?.(exId, "");
      return;
    }

    // Avem un cuvânt selectat din bancă: îl punem în acest slot.
    const value = selectedValue;

    // Scoatem acest value din orice alt slot unde ar fi folosit deja.
    if (answers && exercises && onChange) {
      (exercises || []).forEach((otherEx) => {
        if (
          otherEx.id !== exId &&
          getCurrentValueForExercise(otherEx) === value
        ) {
          onChange(otherEx.id, "");
        }
      });
    }

    onChange?.(exId, value);
    setSelectedValue(null);
  };

  const handleClickPoolOption = (value) => {
    setSelectedValue((prev) => (prev === value ? null : value));
  };

  return (
    <div className="notranslate" translate="no">
      <div className="matching-layout">
        {/* Coloana stângă – propozițiile */}
        <div className="matching-left">
          <ol className="exercise-list matching-list">
            {(exercises || []).map((ex, index) => {
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

              const slotElement = (
                <span
                  className={slotClassNames.join(" ")}
                  data-testid={`${safePrefix}-slot-${ex.id}`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDropOnExercise(ex.id);
                  }}
                  onClick={() => handleClickSlot(ex)}
                >
                  {currentLabel ? (
                    <span className="matching-slot-label">{currentLabel}</span>
                  ) : (
                    <span className="matching-slot-placeholder">
                      Trage sau alege o expresie de timp
                    </span>
                  )}
                </span>
              );

              const rawText = ex.leftText || "";

              // Găsim prima secvență de cel puțin 3 underscore-uri: ___, ____, ______ etc.
              const blankRegex = /_{3,}/;
              const match = rawText.match(blankRegex);

              const hasBlank = !!match;
              let beforeBlank = rawText;
              let afterBlank = "";

              if (hasBlank) {
                const blankStart = match.index;
                const blankEnd = blankStart + match[0].length;

                beforeBlank = rawText.slice(0, blankStart).trimEnd();
                afterBlank = rawText.slice(blankEnd).trimStart();
              }

              return (
                <li key={ex.id} className="exercise-row exercise-row--matching">
                  <div className="exercise-header-row">
                    {showIndex && (
                      <span className="exercise-index">{index + 1}.</span>
                    )}
                    <p className="exercise-text">
                      {hasBlank ? (
                        <>
                          {beforeBlank && `${beforeBlank} `}
                          {slotElement}
                          {afterBlank && ` ${afterBlank}`}
                        </>
                      ) : (
                        <>
                          {rawText && `${rawText} `}
                          {slotElement}
                        </>
                      )}
                    </p>
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
            {poolOptions.map((opt) => {
              const safePrefix = testIdPrefix || "matching";
              const isSelected = selectedValue === opt.value;

              const optionClassNames = ["matching-option"];
              if (isSelected)
                optionClassNames.push("matching-option--selected");

              return (
                <button
                  key={opt.value}
                  type="button"
                  className={optionClassNames.join(" ")}
                  data-testid={`${safePrefix}-opt-${opt.value}`}
                  draggable
                  onDragStart={() => setDraggingValue(opt.value)}
                  onDragEnd={() => setDraggingValue(null)}
                  onClick={() => handleClickPoolOption(opt.value)}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
