import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/overview.css";

/**
 * TenseOverviewPage
 *
 * Tense-agnostic shell for tense overview pages.
 * Centralizes:
 *  - page layout (main + header)
 *  - title + lead text
 *  - optional back link (for returning to the tense module root)
 *
 * Individual tenses provide only:
 *  - title, lead, back link config
 *  - the main body content (cards, tables, etc.) as children.
 */
export default function TenseOverviewPage({
  title,
  lead,
  backLinkTo,
  backLinkLabel,
  backLinkClassName,
  children,
}) {
  return (
    <main className="page page-pastel overview-shell">
      <header className="page-header">
        {backLinkTo && (
          <p className="page-backlink-row">
            <Link to={backLinkTo} className={backLinkClassName}>
              {backLinkLabel}
            </Link>
          </p>
        )}

        <h1 className="page-title">{title}</h1>
        <p className="page-lead">{lead}</p>
      </header>

      {children}
    </main>
  );
}
