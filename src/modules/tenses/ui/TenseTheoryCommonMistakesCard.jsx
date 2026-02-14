import React from "react";

/**
 * TenseTheoryCommonMistakesCard
 *
 * Card standard pentru secțiunea "Greșeli frecvente" din paginile de teorie.
 *
 * Afișează în două coloane exemple greșite vs corecte și, opțional,
 * un mic tip explicativ pentru fiecare pereche.
 *
 * Structura unui element din `mistakes`:
 * {
 *   wrong: "He go to school every day.",
 *   correct: "He goes to school every day.",
 *   tip: "La he/she/it, verbul primește -s.",
 * }
 */
export default function TenseTheoryCommonMistakesCard({
  title = "Greșeli frecvente",
  intro,
  mistakes = [],
  className = "",
  style,
}) {
  const hasMistakes = Array.isArray(mistakes) && mistakes.length > 0;

  const rootClassName = [
    "card",
    "lex-theory-mistakes-card",
    className || null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClassName} style={style}>
      <h2 className="card-title">{title}</h2>
      {intro && (
        <p className="card-description">{intro}</p>
      )}

      {hasMistakes && (
        <div className="ps-mistakes-box">
          <div className="ps-mistakes-grid">
            {/* Coloana 1 – Greșit */}
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--wrong">
                Greșit
              </div>
              <ul className="ps-list ps-mistakes-list">
                {mistakes.map((item, index) => (
                  <li
                    key={index}
                    className="ps-mistake-item ps-mistake-item--wrong"
                  >
                    {item.wrong}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coloana 2 – Corect (+ tip, dacă există) */}
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--correct">
                Corect
              </div>
              <ul className="ps-list ps-mistakes-list">
                {mistakes.map((item, index) => (
                  <li
                    key={index}
                    className="ps-mistake-item ps-mistake-item--correct"
                  >
                    <div>{item.correct}</div>
                    {item.tip && (
                      <div className="ps-mistake-tip">
                        <em>{item.tip}</em>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}