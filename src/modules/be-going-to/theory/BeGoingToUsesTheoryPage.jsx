import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import { beGoingToMapPath } from "../be-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "uses";

/**
 * Be Going To – Uses (skeleton page)
 */
export default function BeGoingToUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={beGoingToMapPath()} className="page-header-backlink">
            ← Înapoi la harta Be Going To
          </Link>
        </p>

        <h1 className="page-title">Be Going To – Uses</h1>
        <p className="page-lead">
          Pagină de teorie pentru Be Going To – Uses. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Be Going To – Uses.
            Aici vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Be Going To.
        </p>
      </TenseTheorySectionCard>
    </TenseTheoryPageShell>
  );
}
