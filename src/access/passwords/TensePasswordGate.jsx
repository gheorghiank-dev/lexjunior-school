import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { isTensePasswordGateEnabled, getTensePassword, getTenseLabel } from "./config.js";
import { isTenseUnlocked, setTenseUnlocked } from "./helpers.js";

export default function TensePasswordGate({ tenseId, children }) {
  const enabled = isTensePasswordGateEnabled();
  const expected = useMemo(() => getTensePassword(tenseId), [tenseId]);
  const label = useMemo(() => getTenseLabel(tenseId) || "", [tenseId]);

  const [unlocked, setUnlocked] = useState(() => {
    if (!enabled) return true;
    if (!expected) return true;
    return isTenseUnlocked(tenseId);
  });

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  if (!enabled || !expected) return children;
  if (unlocked) return children;

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = value === expected;
    if (!ok) {
      setError("Parolă greșită.");
      return;
    }
    setError("");
    setTenseUnlocked(tenseId, true);
    setUnlocked(true);
  };

  const title = label ? `Acces protejat – ${label}` : "Acces protejat";

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div className="card" style={{ maxWidth: 520, width: "100%" }}>
        <div className="page-header" style={{ marginBottom: 0 }}>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">Introdu parola pentru acest timp ca să continui.</p>
        </div>

        <form onSubmit={onSubmit}>
          <label style={{ display: "grid", gap: 8 }}>
            <span style={{ fontWeight: 600, color: "var(--lex-color-text-main)" }}>Parolă</span>
            <input
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoFocus
              style={{
                padding: "0.7rem 0.9rem",
                borderRadius: 14,
                border: "1px solid rgba(148, 163, 184, 0.35)",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </label>

          {error ? <div style={{ marginTop: 10, color: "#b91c1c", fontWeight: 600 }}>{error}</div> : null}

          <div className="btn-row">
            <button type="submit" className="btn btn-primary">Intră</button>
            <Link to="/grammar/tenses" className="btn btn-secondary">Înapoi la Tenses</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
