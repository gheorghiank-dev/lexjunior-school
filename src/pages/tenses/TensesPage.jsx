import React from "react";
import { Link } from "react-router-dom";
import { getTenseCards } from "../../core/manifest/tense-registry.js";

export default function TensesPage() {
  const cards = getTenseCards();

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Tenses</h2>
      <div className="card-grid">
        {cards.map((c) => (
          <div key={c.id} className="card">
            <div className={c.tagClass}>{c.tagLabel}</div>
            <div className="card-title">{c.title}</div>
            <p className="card-description">{c.description}</p>

            {c.cta ? (
              <div className="btn-row">
                <Link to={c.cta.to} className="btn btn-hub">
                  {c.cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        ))}

        <div className="card">
          <div className="card-tag card-tag-soon">Coming soon</div>
          <div className="card-title">Past Simple</div>
          <p className="card-description">
            Escape Room cu camere dedicate pentru Past Simple, similar cu
            Present Simple, după ce finalizăm migrarea.
          </p>
        </div>
      </div>
    </div>
  );
}
