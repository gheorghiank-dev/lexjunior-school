import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FUTURE_PERFECT_BASE_PATH,
  futurePerfectMapPath,
  futurePerfectRoomPath,
  futurePerfectOverviewPath,
} from "../future-paths.js";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
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
 * Future Perfect – Affirmative (skeleton page)
 */
export default function FuturePerfectAffirmativeTheoryPage() {
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
            to={FUTURE_PERFECT_BASE_PATH}
            className="btn btn-soft ps-back-link"
          >
            ← Înapoi la harta Future Perfect
          </Link>
        </p>

        <h1 className="page-title">Future Perfect – Afirmativ</h1>
        <p className="page-lead">
          Reguli, exemple și explicații pentru formarea Future Perfect la
          afirmativ.
        </p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Regula de bază – skeleton"
        intro={
          <>
            Aceasta este o pagină-schelet pentru Future Perfect – Affirmative. Aici
            vei adăuga explicațiile, exemplele și regulile complete.
          </>
        }
      >
        <p>
          Poți copia structura din paginile de Present Simple / Present
          Continuous și să adaptezi regulile pentru Future Perfect.
        </p>
      </TenseTheorySectionCard>

      {/* 4. Unde merg mai departe? */}
      <TenseTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regula este clară, poți începe aventura în camerele de
          exerciții pentru Future Perfect – Afirmativ, poți merge înapoi la teorie
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
              to: futurePerfectRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Afirmativ",
              variant: "primary",
            },
            {
              to: futurePerfectMapPath(),
              label: "Mergi la harta Future Perfect",
              variant: "outline",
            },
            {
              to: futurePerfectOverviewPath(),
              label: "Vezi recapitularea Future Perfect",
              variant: "secondary",
            },
          ]}
        />
      </TenseTheoryCard>
    </TenseTheoryPageShell>
  );
}
