import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PS_BASE_PATH, psMapPath, psRoomPath } from "./ps-paths.js";
import { markTheoryCompleted } from "./ps-core/theory-progress.js";
import PsTheoryPageShell from "./components/PsTheoryPageShell.jsx";
import PsTheoryCard from "./components/PsTheoryCard.jsx";
import PsTheoryNextSteps from "./components/PsTheoryNextSteps.jsx";
import PsLexStudyTipCard from "./components/PsLexStudyTipCard.jsx";
import LexTtsButton from "../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../core/platform/browser-dom.js";
import {
  PRESENT_SIMPLE_TIME_EXPRESSIONS,
  PRESENT_SIMPLE_FREQUENCY_ADVERBS,
} from "./components/PsPresentSimpleStructureBlocks.jsx";

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

  const t = PRESENT_SIMPLE_TIME_EXPRESSIONS;
  const frequencyAdverbs = PRESENT_SIMPLE_FREQUENCY_ADVERBS;

  return (
    <PsTheoryPageShell>
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
      <PsLexStudyTipCard />

      {/* 1. Expresii frecvente – expresii și adverbe de timp comune */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">1. Expresii frecvente</h2>
        <p className="card-description">
          Expresii și adverbe de timp care apar foarte des cu{" "}
          <strong>Present Simple</strong>.
        </p>

        <div className="lj-structure-box ps-structure-box">
          <h3 className="ps-structure-title">Expresii comune</h3>

          <p className="ps-text">
            <span className="rule-highlight">
              <span className="rule-highlight-emphasis">every</span>{" "}
              {t.every.replace("every ", "")}
            </span>
          </p>

          <p className="ps-text">
            <span className="rule-highlight">
              <span className="rule-highlight-emphasis">in</span>{" "}
              {t.inPhrase.replace("in ", "")}
            </span>
          </p>

          <p className="ps-text">
            <span className="rule-highlight">
              <span className="rule-highlight-emphasis">at</span>{" "}
              {t.atPhrase.replace("at ", "")}
            </span>
          </p>

          <p className="ps-text">
            <span className="rule-highlight">
              <span className="rule-highlight-emphasis">on</span>{" "}
              {t.onPhrase.replace("on ", "")}
            </span>
          </p>
        </div>

        <div className="lj-structure-box ps-structure-box">
          <h3 className="ps-structure-title">Adverbe de frecvență</h3>

          {frequencyAdverbs.map((item) => (
            <p key={item.label} className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">{item.label}</span> –{" "}
                {item.approx}
              </span>
            </p>
          ))}
        </div>

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
      </PsTheoryCard>

      {/* 2. Reguli pentru adverbele de frecvență */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">2. Reguli pentru adverbele de frecvență</h2>
        <p className="card-description">
          Unde așezăm adverbele de frecvență și ce greșeli să eviți atunci când
          le folosești.
        </p>

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
            care capată sens negativ.
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
      </PsTheoryCard>

      {/* 3. Greșeli frecvente */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">3. Greșeli frecvente</h2>
        <p className="card-description">
          Câteva greșeli tipice cu adverbe de frecvență și expresii de timp.
          Observă diferența dintre variantele greșite și cele corecte.
        </p>

        <div className="ps-mistakes-box">
          <div className="ps-mistakes-grid">
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--wrong">
                Greșit
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>I don&apos;t never eat sweets.</li>
                <li>She goes always to the gym.</li>
                <li>We go every weekend to the mountains.</li>
              </ul>
            </div>

            {/* Coloana 2 – Corect */}
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--correct">
                Corect
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>
                  I <strong>never</strong> eat sweets.
                </li>
                <li>
                  She <strong>always goes</strong> to the gym.
                </li>
                <li>
                  We go to the mountains <strong>every weekend</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PsTheoryCard>

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regulile pentru expresiile de timp sunt clare, poți
          începe camerele de exerciții pentru Time Expressions, poți reveni la
          începutul paginii sau poți merge la hartă.
        </p>

        <PsTheoryNextSteps
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
          ]}
        />
      </PsTheoryCard>
    </PsTheoryPageShell>
  );
}
