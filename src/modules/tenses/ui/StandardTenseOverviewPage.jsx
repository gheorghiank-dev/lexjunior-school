import React from "react";
import TenseOverviewPage from "./TenseOverviewPage.jsx";

/**
 * StandardTenseOverviewPage
 *
 * Generic layout for all tense overview pages:
 *  - header (title + lead + optional back link)
 *  - overview grid with 5 cards (Affirmative, Negative, Interrogative, Uses, Time Expressions)
 *  - single card with the full forms table
 *
 * Content (structure blocks + table) is provided by each tense module.
 */
export default function StandardTenseOverviewPage({
  title,
  lead,
  backLinkTo,
  backLinkLabel,
  backLinkClassName,
  cards,
  tableTitle,
  tableNote,
  tableNode,
}) {
  return (
    <TenseOverviewPage
      title={title}
      lead={lead}
      backLinkTo={backLinkTo}
      backLinkLabel={backLinkLabel}
      backLinkClassName={backLinkClassName}
    >
      <section className="overview-grid" style={{ marginBottom: "1.25rem" }}>
        {cards &&
          cards.map((card) => (
            <div className="card" key={card.key ?? card.title}>
              {card.title && <div className="card-title">{card.title}</div>}
              {card.content}
            </div>
          ))}
      </section>

      <section className="card">
        {tableTitle && <h2 className="card-title">{tableTitle}</h2>}

        {tableNote && (
          <p className="overview-note">
            {tableNote}
          </p>
        )}

        <div className="overview-table-wrap" style={{ marginTop: "0.8rem" }}>
          {tableNode}
        </div>
      </section>
    </TenseOverviewPage>
  );
}
