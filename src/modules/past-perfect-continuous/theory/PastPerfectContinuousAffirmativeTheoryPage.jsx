import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PAST_PERFECT_CONTINUOUS_BASE_PATH,
  pastPerfectContinuousMapPath,
  pastPerfectContinuousRoomPath,
  pastPerfectContinuousOverviewPath,
} from "../past-perfect-continuous-paths.js";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryCard from "../../tenses/ui/TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";

const SECTION_ID = "affirmative";

/**
 * Past Perfect Continuous – Affirmative (skeleton page)
 */
export default function PastPerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (err) {
      console.error("Failed to mark affirmative theory as completed:", err);
    }
  }, []);

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link
            to={PAST_PERFECT_CONTINUOUS_BASE_PATH}
            className="btn btn-soft ps-back-link"
          >
            ← Înapoi la harta Past Perfect Continuous
          </Link>
        </p>

        <h1 className="page-title">Past Perfect Continuous – Afirmativ</h1>
        <p className="page-lead">
          Reguli, exemple și explicații pentru formarea Past Perfect Continuous la
          afirmativ.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Past Perfect Continuous – Affirmative. Aici
            vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Past Perfect Continuous.
        </p>
      </TenseTheorySectionCard>

      {/* 4. Unde merg mai departe? */}
      <TenseTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regula este clară, poți începe aventura în camerele de
          exerciții pentru Past Perfect Continuous – Afirmativ, poți merge înapoi la teorie
          sau la hartă.
        </p>

        <TenseTheoryNextSteps
          actions={[
            {
              key: "scroll-top",
              label: "Înapoi la prezentare",
              variant: "secondary",
              onClick: handleScrollToTop,
            },
            {
              to: pastPerfectContinuousRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Afirmativ",
              variant: "primary",
            },
            {
              to: pastPerfectContinuousMapPath(),
              label: "Mergi la harta Past Perfect Continuous",
              variant: "outline",
            },
            {
              to: pastPerfectContinuousOverviewPath(),
              label: "Vezi recapitularea Past Perfect Continuous",
              variant: "secondary",
            },
          ]}
        />
      </TenseTheoryCard>
    </TenseTheoryPageShell>
  );
}
