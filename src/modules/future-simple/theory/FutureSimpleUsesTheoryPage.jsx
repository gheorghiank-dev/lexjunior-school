import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futureSimpleMapPath } from "../future-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "uses";

/**
 * Future Simple – Uses (skeleton page)
 */
export default function FutureSimpleUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={futureSimpleMapPath()} className="page-header-backlink">
            ← Înapoi la harta Future Simple
          </Link>
        </p>

        <h1 className="page-title">Future Simple – Uses</h1>
        <p className="page-lead">
          Pagină de teorie pentru Future Simple – Uses. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Future Simple – Uses.
            Aici vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Future Simple.
        </p>
      </TenseTheorySectionCard>
    </TenseTheoryPageShell>
  );
}
