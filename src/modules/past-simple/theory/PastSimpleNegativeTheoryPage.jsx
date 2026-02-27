import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath } from "../past-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "negative";

/**
 * Past Simple – Negative (skeleton page)
 */
export default function PastSimpleNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={pastSimpleMapPath()} className="page-header-backlink">
            ← Înapoi la harta Past Simple
          </Link>
        </p>

        <h1 className="page-title">Past Simple – Negative</h1>
        <p className="page-lead">
          Pagină de teorie pentru Past Simple – Negative. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Past Simple – Negative.
            Aici vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Past Simple.
        </p>
      </TenseTheorySectionCard>
    </TenseTheoryPageShell>
  );
}
