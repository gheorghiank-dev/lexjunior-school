import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectContinuousMapPath } from "../present-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";

const SECTION_ID = "interrogative";

/**
 * Present Perfect Continuous – Interrogative (skeleton page)
 */
export default function PresentPerfectContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={presentPerfectContinuousMapPath()} className="page-header-backlink">
            ← Înapoi la harta Present Perfect Continuous
          </Link>
        </p>

        <h1 className="page-title">Present Perfect Continuous – Interrogative</h1>
        <p className="page-lead">
          Pagină de teorie pentru Present Perfect Continuous – Interrogative. Conținutul
          detaliat urmează să fie adăugat.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Present Perfect Continuous – Interrogative.
            Aici vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Present Perfect Continuous.
        </p>
      </TenseTheorySectionCard>
    </TenseTheoryPageShell>
  );
}
