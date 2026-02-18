import React from "react";
import "../../../styles/components/lex-voice-btn.css";
import "../../../styles/components/dictionary.css";

/**
 * TenseMiniDictionaryCard
 *
 * Tense-agnostic variant of the mini dictionary card used in rooms.
 *
 * Props:
 *  - description: optional text shown under the title
 *  - items: array of { tts, word, meaning }
 */
export function TenseMiniDictionaryCard({ description, items }) {
  if (!items || items.length === 0) {
    return null;
  }

    // Sort items alphabetically by word (case-insensitive), without mutating input.
  const sortedItems = [...items].sort((a, b) =>
    String(a?.word ?? "").localeCompare(String(b?.word ?? ""), "en", {
      sensitivity: "base",
    }),
  );

  const itemCount = items.length;
  const summaryLabel =
    itemCount === 1 ? "1 cuvânt în dicționar" : `${itemCount} cuvinte în dicționar`;

  return (
    <section
      className="mini-dictionary-card"
      aria-label="Mini-dicționar pentru această cameră"
    >
      <details className="mini-dictionary-card__details">
        <summary className="mini-dictionary-card__summary">
          <div className="mini-dictionary-card__summary-main">
            <div className="mini-dictionary-card__summary-text">
              <span className="mini-dictionary-card__title">Mini-dicționar</span>
              <span className="mini-dictionary-card__meta">
                <span className="mini-dictionary-card__badge">
                  {itemCount} {itemCount === 1 ? "cuvânt" : "cuvinte"}
                </span>
                <span className="mini-dictionary-card__hint">
                  click pentru a deschide / închide
                </span>
              </span>
            </div>
            <span
              className="mini-dictionary-card__chevron"
              aria-hidden="true"
            >
              ▾
            </span>
          </div>
          <span className="mini-dictionary-card__summary-visually-hidden">
            {summaryLabel}
          </span>
        </summary>

        {description && (
          <p className="mini-dictionary-card__description">{description}</p>
        )}

        <ul className="mini-dictionary-card__list">
          {sortedItems.map((item) => (
            <li key={item.word} className="glossary__item">
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
