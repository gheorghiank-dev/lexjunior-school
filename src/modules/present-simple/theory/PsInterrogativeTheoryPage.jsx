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
import { PsInterrogativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";
const SECTION_ID = "interrogative";

/**
 * Teoria pentru Present Simple – forma interogativă (variantă React).
 *
 * Structura paginii:
 *  - Card 1: forma interogativă (structură generală + exemple cu do / does + wh-questions)
 *  - Card 2: răspunsuri scurte (short answers) – întrebarea în coloana stângă, cele două răspunsuri scurte în coloana dreaptă
 *  - Card 3: greșeli frecvente în întrebări (greșit vs. corect, fără butoane de listen)
 *  - Card 4: secțiunea „Unde merg mai departe?”
 */
export default function PsInterrogativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (e) {
      // ignore
    }
  }, []);

  const handleScrollToTop = () => {
    // Preserve previous behavior: scroll main into view if present;
    // do not force an extra window.scrollTo when main exists.
    scrollMainToTop({ smooth: true, forceWindowTop: false });
  };

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-backlink-row">
          <Link to={PS_BASE_PATH} className="btn btn-soft ps-back-link">
            ← Înapoi la modulul Present Simple
          </Link>
        </p>

        <h1 className="page-title">Present Simple – Interrogative</h1>
        <p className="page-lead">
          Învățăm cum să punem întrebări corecte la Present Simple cu{" "}
          <strong>Do / Does</strong> și verbul la forma de bază.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Forma interogativă – structură generală + exemple */}
      <TenseTheorySectionCard
        number="1."
        title="Forma interogativă"
        intro={
          <>
            La forma interogativă, în Present Simple, aducem auxiliarul{" "}
            <strong>Do / Does</strong> la începutul propoziției. După{" "}
            <strong>Do / Does</strong>, verbul rămâne întotdeauna în{" "}
            <strong>forma de bază</strong> (fără -s / -es).
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <PsInterrogativeStructureBlock />

        <div className="example-box">
          <h3>Exemple</h3>
          <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
            Ascultă întrebările și repetă cu voce tare.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton text="Do you like apples?" /> Do you like apples?
            </li>
            <li>
              <LexTtsButton text="Do they live in Cluj?" /> Do they live in
              Cluj?
            </li>
            <li>
              <LexTtsButton text="Does he play football?" /> Does he play
              football?
            </li>
            <li>
              <LexTtsButton text="Does she speak French?" /> Does she speak
              French?
            </li>
            <li>
              <LexTtsButton text="Where do you go on holiday?" /> Where do you
              go on holiday?
            </li>
            <li>
              <LexTtsButton text="When do they start school?" /> When do they
              start school?
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Răspunsuri scurte (Short Answers) – întrebarea stânga, răspunsurile dreapta */}
      <TenseTheorySectionCard
        number="2."
        title="Răspunsuri scurte (Short Answers)"
        intro={
          <>
            La întrebările cu <strong>Do / Does</strong> răspundem de obicei cu{" "}
            <strong>short answers</strong> – răspunsuri scurte cu{" "}
            <strong>Yes / No</strong> + <strong>do / does</strong>. În coloana
            din stânga vezi întrebarea, iar în coloana din dreapta cele două
            răspunsuri corecte (afirmativ și negativ) pentru fiecare persoană.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="columns-2">
          {/* STÂNGA: întrebări */}
          <div className="rule-box">
            <h3>Întrebarea</h3>
            <ul className="ps-mini-list">
              <li>
                <LexTtsButton text="Do I play tennis?" /> Do I play tennis?
              </li>
              <li>
                <LexTtsButton text="Do you like pizza?" /> Do you like pizza?
              </li>
              <li>
                <LexTtsButton text="Do we live in Bucharest?" /> Do we live in
                Bucharest?
              </li>
              <li>
                <LexTtsButton text="Do they go to school by bus?" /> Do they go
                to school by bus?
              </li>
              <li>
                <LexTtsButton text="Does he play football?" /> Does he play
                football?
              </li>
              <li>
                <LexTtsButton text="Does she read books in English?" /> Does she
                read books in English?
              </li>
              <li>
                <LexTtsButton text="Does it rain a lot in autumn?" /> Does it
                rain a lot in autumn?
              </li>
            </ul>
          </div>

          {/* DREAPTA: răspunsuri scurte pentru fiecare persoană */}
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li>
                Yes, I do.
                <br />
                No, I don&apos;t.
              </li>
              <li>
                Yes, you do.
                <br />
                No, you don&apos;t.
              </li>
              <li>
                Yes, we do.
                <br />
                No, we don&apos;t.
              </li>
              <li>
                Yes, they do.
                <br />
                No, they don&apos;t.
              </li>
              <li>
                Yes, he does.
                <br />
                No, he doesn&apos;t.
              </li>
              <li>
                Yes, she does.
                <br />
                No, she doesn&apos;t.
              </li>
              <li>
                Yes, it does.
                <br />
                No, it doesn&apos;t.
              </li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: "0.75rem" }}>
          <strong>Important:</strong> în răspunsurile scurte folosim întotdeauna{" "}
          <em>do / does</em>, nu verbul principal (nu spunem *Yes, I play.* ci{" "}
          <strong>Yes, I do.</strong>).
        </p>
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente în întrebări */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente în întrebări"
        intro={
          <>
            Cele mai multe greșeli apar atunci când uităm că verbul după{" "}
            <strong>Do / Does</strong> rămâne la forma de bază sau când folosim{" "}
            <strong>Do</strong> în loc de <strong>Does</strong> pentru{" "}
            <strong>he / she / it</strong>.
          </>
        }
        mistakes={[
          {
            wrong: "Do he plays football?",
            correct: "Does he play football?",
          },
          {
            wrong: "Does she goes to school?",
            correct: "Does she go to school?",
          },
          {
            wrong: "Do they likes music?",
            correct: "Do they like music?",
          },
          {
            wrong: "Doesn&apos;t he walks to school?",
            correct: "Doesn&apos;t he walk to school?",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regulile pentru întrebări sunt clare, poți începe
          camerele de exerciții pentru Present Simple – Interrogative, poți
          reciti teoria sau poți merge direct la hartă.
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
              label: "Începe Camera 1 – Interrogative",
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
