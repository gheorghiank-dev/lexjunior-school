import React from "react";
import { TenseNextRoomButton } from "./TenseNextRoomButton.jsx";

/**
 * Generic action bar for rooms: Verify + (optional) Next room.
 */
export default function TenseExerciseActions({
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

      {nextTo ? <TenseNextRoomButton to={nextTo} passed={passed} /> : null}
    </div>
  );
}
