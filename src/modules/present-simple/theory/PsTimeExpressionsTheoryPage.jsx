import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PS_BASE_PATH,
  psMapPath,
  psRoomPath,
  psOverviewPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import PsTheoryCard from "../components/PsTheoryCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { PsTimeExpressionsStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "time-expressions";

export default function PsTimeExpressionsTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (err) {
      console.error(
        "Failed to mark time-expressions theory as completed:",
        err,
      );
    }
  }, []);

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-backlink-row">
          <Link to={PS_BASE_PATH} className="btn btn-soft ps-back-link">
            ← Înapoi la modulul Present Simple
          </Link>
        </p>

        <h1 className="page-title">Present Simple – Expresii de timp</h1>
        <p className="page-lead">
          Adverbe de frecvență și expresii de timp care arată cât de des și în
          ce momente se întâmplă acțiunile la <strong>Present Simple</strong>.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Expresii frecvente – expresii și adverbe de timp comune */}
      <TenseTheorySectionCard
        number="1."
        title="Expresii frecvente"
        intro={
          <>
            Expresii și adverbe de timp care apar foarte des cu{" "}
            <strong>Present Simple</strong>.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Blocul canonic de structură folosit și în Overview */}
        <PsTimeExpressionsStructureBlock />

        <div className="example-box">
          <h3>Exemple</h3>
          <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
            Ascultă propozițiile și repetă cu voce tare.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="I always get up at seven o'clock."
                ariaLabel="Ascultă propoziția: I always get up at seven o'clock."
              />{" "}
              I <strong>always</strong> get up at seven o&apos;clock.
            </li>
            <li>
              <LexTtsButton
                text="We often play football at the weekend."
                ariaLabel="Ascultă propoziția: We often play football at the weekend."
              />{" "}
              We <strong>often</strong> play football at the weekend.
            </li>
            <li>
              <LexTtsButton
                text="She usually does her homework in the evening."
                ariaLabel="Ascultă propoziția: She usually does her homework in the evening."
              />{" "}
              She <strong>usually</strong> does her homework in the evening.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Reguli pentru adverbele de frecvență */}
      <TenseTheorySectionCard
        number="2."
        title="Reguli pentru adverbele de frecvență"
        intro={
          <>
            Unde așezăm adverbele de frecvență și ce greșeli să eviți atunci când
            le folosești.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <ul className="bullet-list">
          <li>
            Răspund la întrebarea{" "}
            <em>
              <strong>How often?</strong>
            </em>
          </li>
          <li>
            Stau <strong>înaintea verbului principal</strong>:
          </li>
          <li>
            Stau{" "}
            <strong>
              după verbul <em>to be</em>, auxiliare și verbe modale
            </strong>
            :
          </li>
          <li>
            <strong>
              Atenție! <em>rarely</em>, <em>seldom</em>, <em>never</em>
            </strong>{" "}
            nu se folosesc cu propoziții negative, ci în propoziții afirmative
            care capătă sens negativ.
          </li>
        </ul>

        <div className="example-box">
          <p>
            <strong>Exemple:</strong> Ascultă propozițiile și repetă.
          </p>
          <ul className="example-list">
            <li className="example-list-item">
              <LexTtsButton
                text="How often do you watch TV shows?"
                ariaLabel="Ascultă propoziția: How often do you watch TV shows?"
              />{" "}
              How often do you watch TV shows?
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="I rarely watch TV shows."
                ariaLabel="Ascultă propoziția: I rarely watch TV shows."
              />{" "}
              I rarely watch TV shows.
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="I am sometimes interested in TV shows."
                ariaLabel="Ascultă propoziția: I am sometimes interested in TV shows."
              />{" "}
              I am sometimes interested in TV shows.
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="I don't usually watch TV shows."
                ariaLabel="Ascultă propoziția: I don't usually watch TV shows."
              />{" "}
              I don&apos;t usually watch TV shows.
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="I may sometimes watch TV shows."
                ariaLabel="Ascultă propoziția: I may sometimes watch TV shows."
              />{" "}
              I may sometimes watch TV shows.
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="Do you usually watch TV shows?"
                ariaLabel="Ascultă propoziția: Do you usually watch TV shows?"
              />{" "}
              Do you usually watch TV shows?
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="Yes, I often do."
                ariaLabel="Ascultă propoziția: Yes, I often do."
              />{" "}
              Yes, I often do.
            </li>
            <li className="example-list-item">
              <LexTtsButton
                text="No, I never do."
                ariaLabel="Ascultă propoziția: No, I never do."
              />{" "}
              No, I never do.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente"
        intro={
          <>
            Câteva greșeli tipice cu adverbe de frecvență și expresii de timp.
            Observă diferența dintre variantele greșite și cele corecte.
          </>
        }
        mistakes={[
          {
            wrong: "I don&apos;t never eat sweets.",
            correct: "I never eat sweets.",
          },
          {
            wrong: "She goes always to the gym.",
            correct: "She always goes to the gym.",
          },
          {
            wrong: "We go every weekend to the mountains.",
            correct: "We go to the mountains every weekend.",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regulile pentru expresiile de timp sunt clare, poți
          începe camerele de exerciții pentru Time Expressions, poți reveni la
          începutul paginii sau poți merge la hartă.
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
              to: psRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Time Expressions",
              variant: "primary",
            },
            {
              to: psMapPath(),
              label: "Mergi la harta Present Simple",
              variant: "outline",
            },
            {
              to: psOverviewPath(),
              label: "Vezi recapitularea Present Simple",
              variant: "secondary",
            },
          ]}
        />
      </PsTheoryCard>
    </TenseTheoryPageShell>
  );
}
