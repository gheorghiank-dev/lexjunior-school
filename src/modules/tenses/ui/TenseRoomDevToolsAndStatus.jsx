import React from "react";
import { ENV } from "../../../environment.js";

/**
 * Dev bar (Autofill + Reset) + card "Starea camerei".
 * Tense-agnostic variant, can be used by any tense.
 * Visible only when VITE_SHOW_DEV_TOOLS === "true".
 */
export function TenseRoomDevToolsAndStatus({
  roomState,
  onDevAutofill,
  onDevReset,
}) {
  const showDevTools = Boolean(ENV.SHOW_DEV_TOOLS);

  if (!showDevTools) {
    return null;
  }

  return (
    <>
      {/* Dev bar – doar pentru tine, ca profesor / tester */}
      <section className="dev-bar">
        <button
          type="button"
          className="dev-btn dev-btn-secondary"
          onClick={onDevAutofill}
        >
          DEV – Autofill
        </button>
        <button
          type="button"
          className="dev-btn dev-btn-danger"
          onClick={onDevReset}
        >
          DEV – Reset room
        </button>
      </section>

      {/* Card cu starea camerei pentru debugging rapid */}
      <section className="card dev-status-card">
        <h2 className="card-title">Starea camerei – dev only</h2>
        <ul className="dev-status-list">
          <li>
            <strong>Status intern:</strong> {roomState.status}
          </li>
          <li>
            <strong>Încercări:</strong> {roomState.attemptsCount}
          </li>
          <li>
            <strong>Prima încercare:</strong>{" "}
            {roomState.firstAttemptScore === null
              ? "încă nu ai verificat"
              : `${roomState.firstAttemptScore}%`}
          </li>
          <li>
            <strong>Camera trecută:</strong>{" "}
            {roomState.passed ? "DA ✅" : "încă în lucru"}
          </li>
          <li>
            <strong>Cheie:</strong>{" "}
            {roomState.hasKey ? "OBȚINUTĂ 🔑" : "încă blocată 🔒"}
          </li>
        </ul>
      </section>
    </>
  );
}
