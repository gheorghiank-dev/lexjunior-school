import React from "react";

/**
 * TenseTheorySectionCard
 *
 * Card generic pentru secțiunile numerotate din paginile de teorie
 * (ex.: "1. Forma afirmativă", "2. Reguli de scriere", etc.).
 *
 * Nu impune conținut intern – primește children pentru a rămâne flexibil.
 */
export default function TenseTheorySectionCard({
  number,
  title,
  intro,
  children,
  className = "",
  style,
}) {
  const rootClassName = [
    "card",
    "lex-theory-section-card",
    className || null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClassName} style={style}>
      <header className="lex-theory-section-card__header">
        {number && (
          <div className="lex-theory-section-card__number" aria-hidden="true">
            {number}
          </div>
        )}
        <div className="lex-theory-section-card__title-block">
          <h2 className="card-title">{title}</h2>
          {intro && (
            <p className="card-description">{intro}</p>
          )}
        </div>
      </header>

      <div className="lex-theory-section-card__body">{children}</div>
    </section>
  );
}