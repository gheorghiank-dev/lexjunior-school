import React from "react";

/**
 * Card reutilizabil pentru mini-dicționar + butoane de listen.
 *
 * Primește:
 * - description: textul sub titlu;
 * - items: array [{ tts, word, meaning }].
 *
 * Folosește aceleași clase CSS ca în camerele originale:
 * - .card, .card-title, .card-description
 * - .glossary-list, .glossary-item
 * - .lex-voice-btn (compatibil cu lex-voice.js)
 */
export function PsMiniDictionaryCard({ description, items }) {
  if (!items || items.length === 0) {
    return null;
  }

  // Sort items alphabetically by word (case-insensitive), without mutating input.
  const sortedItems = [...items].sort((a, b) =>
    String(a?.word ?? "").localeCompare(String(b?.word ?? ""), "en", {
      sensitivity: "base",
    }),
  );

  return (
    <section className="card">
      <h2 className="card-title">Mini-dicționar</h2>
      {description && <p className="card-description">{description}</p>}
      <details>
        <summary>Deschide dicționarul</summary>
        <ul className="glossary-list">
          {sortedItems.map((item, index) => (
            <li key={index} className="glossary-item">
              <button
                type="button"
                className="lex-voice-btn"
                data-tts={item.tts}
                aria-label={`Ascultă: ${item.word}`}
              >
                🔊
              </button>{" "}
              <strong>{item.word}</strong> – {item.meaning}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
