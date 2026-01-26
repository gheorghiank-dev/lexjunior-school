import React from "react";

import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

/**
 * Room 6 (Interrogative) exercise list:
 * For each question, student writes BOTH a short YES and a short NO answer.
 *
 * This component intentionally preserves the exact markup/classNames from
 * the pre-template Room 6 page to keep UX identical.
 */
export function InterrogativeYesNoPairsExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
}) {
  const pairs = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < (exercises?.length ?? 0); i += 2) {
      const ex1 = exercises[i];
      const ex2 = exercises[i + 1];
      if (!ex1 || !ex2) continue;

      const basePrompt = ex1.prompt || "";
      const questionText = basePrompt.split("–")[0].trim();

      const yesFirst = basePrompt.toLowerCase().includes("afirmativ");
      const yesExercise = yesFirst ? ex1 : ex2;
      const noExercise = yesFirst ? ex2 : ex1;

      result.push({
        id: yesExercise.id,
        questionText,
        yesExercise,
        noExercise,
      });
    }
    return result;
  }, [exercises]);

  return (
    <ol className="exercise-list">
      {pairs.map((pair, index) => {
        const yesFeedback = feedback[pair.yesExercise.id];
        const noFeedback = feedback[pair.noExercise.id];

        const yesTextareaClassNames = [
          "exercise-input",
          "pill-gap",
          "long-input",
          "textarea-large",
          yesFeedback === "correct"
            ? "exercise-input-correct"
            : yesFeedback === "incorrect"
              ? "exercise-input-incorrect"
              : "",
        ]
          .filter(Boolean)
          .join(" ");

        const noTextareaClassNames = [
          "exercise-input",
          "pill-gap",
          "long-input",
          "textarea-large",
          noFeedback === "correct"
            ? "exercise-input-correct"
            : noFeedback === "incorrect"
              ? "exercise-input-incorrect"
              : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li
            key={pair.id}
            className="exercise-row exercise-row--stacked-textarea"
          >
            <p className="exercise-text">
              <span className="exercise-index">{index + 1}.</span>
              {pair.questionText}
              <button
                type="button"
                className="lex-voice-btn"
                data-tts={pair.questionText}
                aria-label={`Ascultă întrebarea: ${pair.questionText}`}
              >
                🔊
              </button>
            </p>

            {/* YES */}
            <div className="short-answer-row">
              <span
                className={[
                  "short-answer-status",
                  yesFeedback === "correct"
                    ? "short-answer-status--correct"
                    : "",
                  yesFeedback === "incorrect"
                    ? "short-answer-status--incorrect"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {yesFeedback === "correct"
                  ? "✅"
                  : yesFeedback === "incorrect"
                    ? "❌"
                    : "•"}
              </span>

              <span className="short-answer-prefix" aria-hidden="true">
                Yes,
              </span>

              <textarea
                className={yesTextareaClassNames}
                rows={1}
                value={answers[pair.yesExercise.id] ?? ""}
                onChange={(e) => onChange(pair.yesExercise.id, e.target.value)}
              />

              <LexListenOnCorrect
                isCorrect={feedback[pair.yesExercise.id] === "correct"}
                tts={pair.yesExercise.tts}
                ariaLabel={`Ascultă răspunsul afirmativ: ${pair.yesExercise.tts}`}
              />
            </div>

            {/* NO */}
            <div className="short-answer-row">
              <span
                className={[
                  "short-answer-status",
                  noFeedback === "correct"
                    ? "short-answer-status--correct"
                    : "",
                  noFeedback === "incorrect"
                    ? "short-answer-status--incorrect"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {noFeedback === "correct"
                  ? "✅"
                  : noFeedback === "incorrect"
                    ? "❌"
                    : "•"}
              </span>

              <span className="short-answer-prefix" aria-hidden="true">
                No,
              </span>

              <textarea
                className={noTextareaClassNames}
                rows={1}
                value={answers[pair.noExercise.id] ?? ""}
                onChange={(e) => onChange(pair.noExercise.id, e.target.value)}
              />

              <LexListenOnCorrect
                isCorrect={feedback[pair.noExercise.id] === "correct"}
                tts={pair.noExercise.tts}
                ariaLabel={`Ascultă răspunsul negativ: ${pair.noExercise.tts}`}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
