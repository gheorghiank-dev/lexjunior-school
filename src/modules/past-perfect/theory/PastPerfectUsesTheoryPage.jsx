import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import { pastPerfectMapPath } from "../past-perfect-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "uses";

/**
 * Past Perfect – Uses (skeleton page)
 */
export default function PastPerfectUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={pastPerfectMapPath()} className="page-header-backlink">
            ← Înapoi la harta Past Perfect
          </Link>
        </p>

        <h1 className="page-title">Past Perfect – Uses</h1>
        <p className="page-lead">
          Pagină de teorie pentru Past Perfect – Uses. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Past Perfect – Uses.
            Aici vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Past Perfect.
        </p>
      </TenseTheorySectionCard>
    </TenseTheoryPageShell>
  );
}
