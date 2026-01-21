import React from "react";
import { PsNextRoomButton } from "./PsNextRoomButton.jsx";

/**
 * Standard action bar for rooms: Verify + (optional) Next room button.
 * Keeps the same classNames used across the project (exercise-actions, btn btn-primary).
 */
export default function PsExerciseActions({
  onVerify,
  nextTo,
  passed,
  verifyLabel = "Verifică răspunsurile",
  verifyTestId,
}) {
  return (
    <div className="exercise-actions">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onVerify?.()}
        data-testid={verifyTestId}
      >
        {verifyLabel}
      </button>

      {nextTo ? <PsNextRoomButton to={nextTo} passed={passed} /> : null}
    </div>
  );
}
