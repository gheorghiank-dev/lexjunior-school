import React, { useEffect, useState } from "react";
import { storage } from "./ps-core/storage.js";
import { openPrintDialog } from "../../core/platform/browser-dom.js";


const STORAGE_KEY = "notes_v1";

/**
 * Pagina „My Notes” pentru Present Simple – varianta React.
 *
 * Structură inspirată din ps-notes.html:
 *  1. Regula de bază – în cuvintele mele
 *  2. Exemple inventate de tine (I/you/we/they + he/she/it)
 *  3. Ce mi se pare greu la Present Simple
 *  4. Mini-checklist + buton de print
 *
 * Salvăm cele 4 zone de text în localStorage sub forma unui obiect JSON.
 */
export default function PsNotesPage() {
  const [fields, setFields] = useState({
    q1: "",
    q2a: "",
    q2b: "",
    q3: "",
  });
  const [savedAt, setSavedAt] = useState(null);

  // La prima încărcare: citim din localStorage dacă există ceva
  useEffect(() => {
    try {
      const stored = storage.getRaw(STORAGE_KEY);
      if (!stored) return;

      // Acceptăm fie varianta veche (text simplu), fie JSON
      try {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setFields((prev) => ({
            ...prev,
            ...parsed,
          }));
        } else {
          // dacă nu e obiect, îl punem la q1
          setFields((prev) => ({ ...prev, q1: String(stored) }));
        }
      } catch {
        // dacă nu se poate da JSON.parse, înseamnă că e text simplu
        setFields((prev) => ({ ...prev, q1: String(stored) }));
      }
    } catch {
      // dacă localStorage nu e disponibil, nu facem nimic
    }
  }, []);

  const updateField = (field) => (event) => {
    const value = event.target.value;
    const updated = { ...fields, [field]: value };
    setFields(updated);

    try {
      storage.set(STORAGE_KEY, updated);
      setSavedAt(new Date());
    } catch {
      // ignorăm dacă nu putem salva
    }
  };

  const formattedSavedAt =
    savedAt != null
      ? savedAt.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

  const handlePrint = () => {
    openPrintDialog();
  };

  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">My Present Simple Notes</h1>
        <p className="page-lead">
          Un spațiu ghidat pentru a nota ce ai înțeles despre Present Simple:
          explicația ta, exemple inventate de tine, ce ți se pare greu și o
          mini-checklist pentru auto-evaluare.
        </p>
      </header>

      <section className="ps-grid ps-hub-section" style={{ gap: "1.5rem" }}>
        {/* Intro card */}
        <article className="card">
          <h2 className="card-title">
            Scrie aici ce ai înțeles despre Present Simple
          </h2>
          <p className="card-description">
            Ce scrii pe această pagină NU se salvează pe server. Notițele sunt
            păstrate doar în acest browser (localStorage) sau le poți printa
            dacă vrei să le ai pe hârtie.
          </p>

          <div
            className="ps-info-box"
            style={{
              marginTop: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              background: "rgba(255, 255, 255, 0.6)",
              border: "1px solid var(--color-border-soft)",
            }}
          >
            <p className="ps-text">
              Sugestie pentru profesori: elevii pot completa direct aici (pe
              tabletă / laptop) și apoi pot folosi opțiunea de printare a
              browserului (Ctrl+P) pentru a salva sau printa pagina cu notițele
              lor.
            </p>
          </div>
        </article>

        {/* 1. Regula de bază */}
        <article className="card">
          <h3 className="card-title">1. Regula de bază – în cuvintele mele</h3>
          <p className="card-description">
            Cum ai explica tu Present Simple unui coleg?
          </p>
          <textarea
            className="ps-notes-area"
            rows={4}
            placeholder="Scrie explicația ta aici..."
            value={fields.q1}
            onChange={updateField("q1")}
            style={{
              width: "100%",
              resize: "vertical",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border-soft)",
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: 1.5,
              boxSizing: "border-box",
            }}
          />
        </article>

        {/* 2. Exemple inventate de tine */}
        <article className="card">
          <h3 className="card-title">2. Exemple inventate de tine</h3>
          <p className="card-description">
            Scrie câteva propoziții cu Present Simple.
          </p>
          <textarea
            className="ps-notes-area"
            rows={4}
            placeholder="Exemple cu I / You / We / They..."
            value={fields.q2a}
            onChange={updateField("q2a")}
            style={{
              width: "100%",
              resize: "vertical",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border-soft)",
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: 1.5,
              boxSizing: "border-box",
              marginBottom: "0.75rem",
            }}
          />
          <textarea
            className="ps-notes-area"
            rows={4}
            placeholder="Exemple cu He / She / It..."
            value={fields.q2b}
            onChange={updateField("q2b")}
            style={{
              width: "100%",
              resize: "vertical",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border-soft)",
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: 1.5,
              boxSizing: "border-box",
            }}
          />
        </article>

        {/* 3. Ce mi se pare greu */}
        <article className="card">
          <h3 className="card-title">
            3. Ce mi se pare greu la Present Simple
          </h3>
          <textarea
            className="ps-notes-area"
            rows={4}
            placeholder="Scrie aici ce ți se pare dificil sau ce vrei să întrebi..."
            value={fields.q3}
            onChange={updateField("q3")}
            style={{
              width: "100%",
              resize: "vertical",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border-soft)",
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: 1.5,
              boxSizing: "border-box",
            }}
          />
        </article>

        {/* 4. Mini-checklist + print */}
        <article className="card">
          <h3 className="card-title">4. Mini-checklist</h3>
          <p className="card-description">
            Bifează pentru tine (poți pune un X sau un ✔ când printezi sau
            notezi mental):
          </p>
          <ul className="ps-mini-list">
            <li>
              Știu când folosesc <strong>do</strong> și când folosesc{" "}
              <strong>does</strong>.
            </li>
            <li>
              Nu mai uit de <strong>-s / -es</strong> la he / she / it.
            </li>
            <li>Pot să dau 3 exemple corecte fără să mă uit în caiet.</li>
          </ul>

          <div
            className="ps-card-buttons"
            style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePrint}
            >
              Printează pagina
            </button>
            {formattedSavedAt && (
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  alignSelf: "center",
                }}
              >
                Ultima salvare automată: {formattedSavedAt}
              </span>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
