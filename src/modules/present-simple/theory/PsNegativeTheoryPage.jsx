import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PS_BASE_PATH, psMapPath, psRoomPath, psOverviewPath } from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import PsTheoryCard from "../components/PsTheoryCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { PsNegativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

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
    <TenseTheoryPageShell>
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
      <TenseLexStudyTipCard />

      {/* 1. Forma negativă – structură generală + exemple */}
      <TenseTheorySectionCard
        number="1."
        title="Forma negativă"
        intro={
          <>
            În Present Simple, la negativ, folosim auxiliarul{" "}
            <strong>do / does</strong> împreună cu <strong>not</strong> pentru a
            spune că ceva <strong>nu</strong> se întâmplă.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >

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
      </TenseTheorySectionCard>

      {/* 2. Formă lungă și formă scurtă */}
      <TenseTheorySectionCard
        number="2."
        title="Formă lungă și formă scurtă"
        intro={
          <>
            Aceeași propoziție negativă poate apărea în{" "}
            <strong>formă lungă</strong> (do not / does not) sau în{" "}
            <strong>formă scurtă</strong> (don&apos;t / doesn&apos;t).
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
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
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente"
        intro={
          <>
            După{" "}
            <span className="rule-highlight-emphasis">
              don&apos;t / doesn&apos;t
            </span>
            , verbul rămâne întotdeauna în <strong>forma de bază</strong> (fără -s
            / -es).
          </>
        }
        mistakes={[
          {
            wrong: "He doesn&apos;t works.",
            correct: "He doesn&apos;t work.",
          },
          {
            wrong: "She doesn&apos;t goes to school by bus.",
            correct: "She doesn&apos;t go to school by bus.",
          },
          {
            wrong: "They don&apos;t plays tennis.",
            correct: "They don&apos;t play tennis.",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regula este clară, poți începe aventura în camerele de
          exerciții pentru Present Simple – Negativ, poți merge înapoi la teorie
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
              to: psRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Negativ",
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