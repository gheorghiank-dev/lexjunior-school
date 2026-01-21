import React, { useMemo, useState } from "react";
import { useStudentName } from "../student-name-manager.js";

export default function SchoolStudentNameCard({ tenseId, title = "School Mode" }) {
  const { studentName, saveStudentName, clearStudentName } = useStudentName(tenseId);
  const [draft, setDraft] = useState(studentName || "");
  const hasName = Boolean((studentName || "").trim());

  const helperText = useMemo(() => {
    if (hasName) return "Nume salvat local (doar pe acest browser).";
    return "Introdu numele elevului (se salvează local, per timp gramatical).";
  }, [hasName]);

  return (
    <section className="card" style={{ marginTop: "1rem" }} data-testid={`school-student-name-${tenseId}`}
    >
      <div className="card-title">{title}</div>
      <p className="card-description">{helperText}</p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
        <label style={{ display: "grid", gap: "0.35rem", flex: "1 1 240px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--lex-color-text-muted)" }}>Nume elev</span>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ex: Andrei Pop"
            style={{
              padding: "0.6rem 0.8rem",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.45)",
              background: "rgba(255,255,255,0.7)",
              font: "inherit",
              minWidth: 220,
            }}
          />
        </label>

        <button
          type="button"
          className="btn btn-soft"
          onClick={() => {
            const saved = saveStudentName(draft);
            setDraft(saved);
          }}
        >
          Salvează
        </button>

        {hasName ? (
          <button type="button" className="btn btn-outline" onClick={() => {
            clearStudentName();
            setDraft("");
          }}>
            Șterge
          </button>
        ) : null}
      </div>

      {hasName ? (
        <div style={{ marginTop: "0.6rem", fontSize: "0.9rem" }}>
          Elev: <strong>{studentName}</strong>
        </div>
      ) : null}
    </section>
  );
}
