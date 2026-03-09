import React from "react";
import { Link } from "react-router-dom";
import { getTenseCards } from "../../modules/tenses/registry.js";

const TENSE_ROWS = [
  ["present-simple", "present-continuous", "present-perfect", "present-perfect-continuous"],
  ["past-simple", "past-continuous", "past-perfect", "past-perfect-continuous"],
  ["future-simple", "future-continuous", "future-perfect", "future-perfect-continuous"],
  ["be-going-to"],
];

export default function TensesPage() {
  const cards = getTenseCards();
  const cardsById = new Map(cards.map((card) => [card.id, card]));

  return (
    <div className="tenses-page">
      <h2 style={{ marginBottom: "1.5rem" }}>Tenses</h2>

      <div className="tenses-card-layout">
        {TENSE_ROWS.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="tenses-card-row">
            {row.map((id) => {
              const c = cardsById.get(id);
              if (!c) return null;

              return (
                <div key={c.id} className="card tenses-card">
                  {c.tagLabel ? <div className={c.tagClass}>{c.tagLabel}</div> : null}
                  <div className="card-title tenses-card-title">{c.title}</div>
                  <p className="card-description tenses-card-description">{c.description}</p>

                  {c.cta ? (
                    <div className="btn-row">
                      <Link to={c.cta.to} className="btn btn-hub tenses-card-btn" aria-label={c.cta.label}>
                        <span className="tenses-card-btn-top">Mergi la harta</span>
                        <span className="tenses-card-btn-bottom">{c.title}</span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
