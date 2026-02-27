import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath } from "../past-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "time-expressions";

/**
 * Past Simple – Time Expressions (skeleton page)
 */
export default function PastSimpleTimeExpressionsTheoryPage() {
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

        <h1 className="page-title">Past Simple – Time Expressions</h1>
        <p className="page-lead">
          Pagină de teorie pentru Past Simple – Time Expressions. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Past Simple – Time Expressions.
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
