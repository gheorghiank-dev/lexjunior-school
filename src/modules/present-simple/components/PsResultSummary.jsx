import React from "react";

/**
 * Standard result block for rooms, shown after Verify.
 * Keeps the same className (exercise-result) and text structure.
 */
export default function PsResultSummary({
  lastResult,
  errorText = "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
  successText = "Bravo! Ai completat corect toate exercițiile din această cameră!",
  testId,
}) {
  if (!lastResult) return null;

  return (
    <div
      className="exercise-result"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      data-testid={testId}
    >
      <p>
        <strong>
          {lastResult.correct} / {lastResult.total}
        </strong>{" "}
        răspunsuri corecte – <strong>{lastResult.percent}%</strong>.
      </p>

      {lastResult.hasErrors ? <p>{errorText}</p> : <p>{successText}</p>}
    </div>
  );
}
