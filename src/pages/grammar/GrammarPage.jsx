import React from "react";
import { Link } from "react-router-dom";
import { getGrammarHubCards } from "../../modules/grammar-hub/registry.js";

export default function GrammarPage() {
  const cards = getGrammarHubCards();

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Grammar hub</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className={card.tagClass}>{card.tagLabel}</div>
            <div className="card-title">{card.title}</div>
            <p
              className="card-description card-description--scroll"
              tabIndex={0}
            >
              {card.description}
            </p>

            {card.cta ? (
              <div className="btn-row">
                <Link to={card.cta.to} className="btn btn-hub">
                  {card.cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
