import React from "react";
import { ENV } from "../../../environment.js";

/**
 * Dev bar (Autofill + Reset) + card "Starea camerei".
 * Vizibil doar când VITE_SHOW_DEV_TOOLS === "true".
 */
export function PsRoomDevToolsAndStatus({
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

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2 className="card-title">Starea camerei</h2>
        <p className="card-description">
          Aceste informații folosesc exact aceleași reguli de progres ca modulul
          clasic: primul scor, camera trecută, cheia pentru hartă / badge.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "0.75rem",
            display: "grid",
            gap: "0.25rem",
            fontSize: "0.95rem",
          }}
        >
          <li>
            <strong>Primul scor:</strong>{" "}
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
