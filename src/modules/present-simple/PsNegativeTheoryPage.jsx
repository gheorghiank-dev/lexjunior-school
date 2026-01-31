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
import { PsNegativeStructureBlock } from "./components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "negative";

/**
 * Teoria pentru Present Simple – forma negativă (variantă React).
 *
 * Structura paginii:
 *  - Card 1: forma negativă + structură generală + exemple cu do not / does not
 *  - Card 2: formă lungă vs formă scurtă (do not / does not ↔ don't / doesn't)
 *  - Card 3: greșeli frecvente (forma verbului după don't / doesn't)
 *  - Card 4: secțiunea „Unde merg mai departe?”
 */
export default function PsNegativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (err) {
      console.error("Failed to mark negative theory as completed:", err);
    }
  }, []);

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <PsTheoryPageShell>
      <header className="page-header">
        <p className="page-backlink-row">
          <Link to={PS_BASE_PATH} className="btn btn-soft ps-back-link">
            ← Înapoi la modulul Present Simple
          </Link>
        </p>

        <h1 className="page-title">Present Simple – Negativ</h1>
        <p className="page-lead">
          Reguli, forme și exemple pentru propozițiile negative la Present
          Simple. Gândește-te la situațiile în care spui că <strong>nu</strong>{" "}
          faci ceva sau că ceva <strong>nu</strong> este adevărat.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <PsLexStudyTipCard />

      {/* 1. Forma negativă – structură generală + exemple */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">1. Forma negativă</h2>
        <p className="card-description">
          În Present Simple, la negativ, folosim auxiliarul{" "}
          <strong>do / does</strong> împreună cu <strong>not</strong> pentru a
          spune că ceva <strong>nu</strong> se întâmplă.
        </p>

        <PsNegativeStructureBlock />

        <div className="example-box" style={{ marginTop: "1.25rem" }}>
          <h3>Exemple</h3>
          <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
            Ascultă propozițiile și repetă cu voce tare.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="I don’t walk to school."
                ariaLabel="Ascultă propoziția: I don’t walk to school."
              />{" "}
              I don&apos;t walk to school.
            </li>
            <li>
              <LexTtsButton
                text="You don’t like coffee."
                ariaLabel="Ascultă propoziția: You don’t like coffee."
              />{" "}
              You don&apos;t like coffee.
            </li>
            <li>
              <LexTtsButton
                text="We don’t watch TV in the morning."
                ariaLabel="Ascultă propoziția: We don’t watch TV in the morning."
              />{" "}
              We don&apos;t watch TV in the morning.
            </li>
            <li>
              <LexTtsButton
                text="He doesn’t play football."
                ariaLabel="Ascultă propoziția: He doesn’t play football."
              />{" "}
              He doesn&apos;t play football.
            </li>
            <li>
              <LexTtsButton
                text="She doesn’t go to the gym on Mondays."
                ariaLabel="Ascultă propoziția: She doesn’t go to the gym on Mondays."
              />{" "}
              She doesn&apos;t go to the gym on Mondays.
            </li>
          </ul>
        </div>
      </PsTheoryCard>

      {/* 2. Formă lungă și formă scurtă */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">2. Formă lungă și formă scurtă</h2>
        <p className="card-description">
          Aceeași propoziție negativă poate apărea în{" "}
          <strong>formă lungă</strong> (do not / does not) sau în{" "}
          <strong>formă scurtă</strong> (don&apos;t / doesn&apos;t).
        </p>

        <div className="columns-2">
          <div className="rule-box">
            <h3>Formă lungă</h3>
            <ul className="ps-mini-list">
              <li>
                <LexTtsButton
                  text="I do not walk."
                  ariaLabel="Ascultă propoziția: I do not walk."
                />{" "}
                I do not walk.
              </li>
              <li>
                <LexTtsButton
                  text="He does not like chocolate."
                  ariaLabel="Ascultă propoziția: He does not like chocolate."
                />{" "}
                He does not like chocolate.
              </li>
              <li>
                <LexTtsButton
                  text="They do not study French."
                  ariaLabel="Ascultă propoziția: They do not study French."
                />{" "}
                They do not study French.
              </li>
            </ul>
          </div>

          <div className="rule-box">
            <h3>Formă scurtă (contracții)</h3>
            <ul className="ps-mini-list">
              <li>
                <LexTtsButton
                  text="I don’t walk."
                  ariaLabel="Ascultă propoziția: I don’t walk."
                />{" "}
                I don&apos;t walk.
              </li>
              <li>
                <LexTtsButton
                  text="He doesn’t like chocolate."
                  ariaLabel="Ascultă propoziția: He doesn’t like chocolate."
                />{" "}
                He doesn&apos;t like chocolate.
              </li>
              <li>
                <LexTtsButton
                  text="They don’t study French."
                  ariaLabel="Ascultă propoziția: They don’t study French."
                />{" "}
                They don&apos;t study French.
              </li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: "0.75rem" }}>
          În vorbirea de zi cu zi, se folosește cel mai des{" "}
          <strong>forma scurtă</strong> (don&apos;t / doesn&apos;t).
        </p>
      </PsTheoryCard>

      {/* 3. Greșeli frecvente */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">3. Greșeli frecvente</h2>
        <p className="card-description">
          După{" "}
          <span className="rule-highlight-emphasis">
            don&apos;t / doesn&apos;t
          </span>
          , verbul rămâne întotdeauna în <strong>forma de bază</strong> (fără -s
          / -es).
        </p>

        <div className="ps-mistakes-box">
          <div className="ps-mistakes-grid">
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--wrong">
                Greșit
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>
                  He doesn&apos;t{" "}
                  <span className="rule-highlight-emphasis">works</span>.
                </li>
                <li>
                  She doesn&apos;t{" "}
                  <span className="rule-highlight-emphasis">goes</span> to
                  school by bus.
                </li>
                <li>
                  They don&apos;t{" "}
                  <span className="rule-highlight-emphasis">plays</span> tennis.
                </li>
              </ul>
            </div>

            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--correct">
                Corect
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>
                  He doesn&apos;t <strong>work</strong>.
                </li>
                <li>
                  She doesn&apos;t <strong>go</strong> to school by bus.
                </li>
                <li>
                  They don&apos;t <strong>play</strong> tennis.
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
          Când simți că regula este clară, poți începe aventura în camerele de
          exerciții pentru Present Simple – Negativ, poți merge înapoi la teorie
          sau la hartă.
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
              label: "Începe Camera 1 – Negativ",
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
