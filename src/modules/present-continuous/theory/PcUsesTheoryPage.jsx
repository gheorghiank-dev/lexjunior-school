import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import { PcUsesStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PcUsesTheoryPage() {
  useEffect(() => {
    // Gating: teoria pentru "uses" se consideră completă când elevul deschide pagina.
    markTheoryCompleted(SECTION_ID);
  }, []);

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell className="page page-pastel">
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={pcMapPath()} className="page-header-backlink">
            ← Înapoi la harta Present Continuous
          </Link>
        </p>

        <h1 className="page-title">
          Present Continuous – Întrebuințări (Teorie clasică)
        </h1>
        <p className="page-lead">
          Aici vezi în ce situații folosim de obicei{" "}
          <strong>Present Continuous</strong>: ce fel de acțiuni descrie, cum se
          simte în propoziții și cum îl deosebești de{" "}
          <strong>Present Simple</strong>.
        </p>
      </header>

      {/* Lex Junior – Study Tip (global, la fel ca la celelalte teorii) */}
      <TenseLexStudyTipCard />

      {/* 1. Când folosim Present Continuous */}
      <TenseTheorySectionCard
        number="1."
        title="Când folosim Present Continuous"
        intro={
          <>
            Folosim <strong>Present Continuous</strong> când vrem să arătăm că o
            acțiune este <strong>în desfășurare</strong> sau legată de{" "}
            <strong>perioada de acum</strong>, nu doar un obicei general.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <PcUsesStructureBlock />

        <div className="example-box">
          <h3 className="ps-structure-title">Exemple cu audio</h3>
          <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
            Ascultă propozițiile și repetă cu voce tare. Observă cuvintele de
            timp și ideea de <strong>acum / perioadă temporară</strong>.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="I am doing my homework right now."
                ariaLabel="Ascultă propoziția: I am doing my homework right now."
              />{" "}
              I am <strong>doing</strong> my homework right now.
            </li>
            <li>
              <LexTtsButton
                text="She is studying for her exam this week."
                ariaLabel="Ascultă propoziția: She is studying for her exam this week."
              />{" "}
              She is <strong>studying</strong> for her exam this week.
            </li>
            <li>
              <LexTtsButton
                text="We are getting ready for the school play."
                ariaLabel="Ascultă propoziția: We are getting ready for the school play."
              />{" "}
              We are <strong>getting</strong> ready for the school play.
            </li>
            <li>
              <LexTtsButton
                text="They are meeting their cousins tomorrow."
                ariaLabel="Ascultă propoziția: They are meeting their cousins tomorrow."
              />{" "}
              They are <strong>meeting</strong> their cousins tomorrow.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Present Continuous vs Present Simple */}
      <TenseTheorySectionCard
        number="2."
        title="Present Continuous vs Present Simple"
        intro={
          <>
            <strong>Present Simple</strong> vorbește despre{" "}
            <strong>obiceiuri, rutine și fapte generale</strong>.{" "}
            <strong>Present Continuous</strong> se ocupă de{" "}
            <strong>acțiuni în desfășurare</strong> sau lucruri temporare.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="columns-2">
          <div className="rule-box">
            <h3 className="ps-structure-title">Ideea principală</h3>
            <ul className="ps-mini-list">
              <li>
                Folosește <strong>Present Simple</strong> pentru ceea ce este{" "}
                <strong>adevărat în general</strong>.
              </li>
              <li>
                Folosește <strong>Present Continuous</strong> pentru ce se
                întâmplă <strong>acum</strong> sau{" "}
                <strong>în perioada asta</strong>.
              </li>
              <li>
                Uneori, aceleași verbe pot apărea în ambele timpuri, dar cu
                <strong> sens diferit</strong>.
              </li>
            </ul>
          </div>

          <div className="example-box">
            <h3 className="ps-structure-title">Compară exemplele</h3>
            <p className="ps-text">
              Observă diferența dintre o situație generală și una temporară / în
              desfășurare.
            </p>
            <ul className="ps-list">
              <li>
                <LexTtsButton
                  text="I work at a bookshop."
                  ariaLabel="Ascultă propoziția: I work at a bookshop."
                />{" "}
                I <strong>work</strong> at a bookshop.{" "}
                <span className="rule-highlight-note">
                  (Present Simple – job stabil)
                </span>
              </li>
              <li>
                <LexTtsButton
                  text="I am working at a bookshop this summer."
                  ariaLabel="Ascultă propoziția: I am working at a bookshop this summer."
                />{" "}
                I am <strong>working</strong> at a bookshop this summer.{" "}
                <span className="rule-highlight-note">
                  (Present Continuous – situație temporară)
                </span>
              </li>
              <li>
                <LexTtsButton
                  text="She lives in Cluj."
                  ariaLabel="Ascultă propoziția: She lives in Cluj."
                />{" "}
                She <strong>lives</strong> in Cluj.{" "}
                <span className="rule-highlight-note">
                  (Present Simple – fapt stabil)
                </span>
              </li>
              <li>
                <LexTtsButton
                  text="She is living with her aunt this month."
                  ariaLabel="Ascultă propoziția: She is living with her aunt this month."
                />{" "}
                She is <strong>living</strong> with her aunt this month.{" "}
                <span className="rule-highlight-note">
                  (Present Continuous – situație temporară)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente"
        intro={
          <>
            Când lucrăm cu <strong>Present Continuous</strong>, apar des greșeli
            legate de verbul <strong>to be</strong>, de <strong>-ing</strong>{" "}
            sau de confuzia cu <strong>Present Simple</strong>.
          </>
        }
        mistakes={[
          {
            wrong: "She is speak English now.",
            correct: "She is speaking English now.",
            tip: "Nu uita de terminația -ing pentru verbul principal.",
          },
          {
            wrong: "They are not understand the exercise.",
            correct: "They are not understanding the exercise.",
            tip: "Unele verbe de stare se folosesc mai des în Present Simple (ex: understand, know), dar aici exemplul e intenționat pentru discuții de clasă.",
          },
          {
            wrong: "He is usually watching TV in the morning.",
            correct: "He usually watches TV in the morning.",
            tip: "Adverbele de frecvență merg de obicei cu Present Simple.",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      <TenseTheoryNextSteps
        actions={[
          {
            key: "scroll-top",
            label: "Înapoi la prezentare",
            variant: "secondary",
            onClick: handleScrollToTop,
          },
          {
            to: pcRoomPath(SECTION_ID, 1),
            label: "Începe Camera 1 – Întrebuințări",
            variant: "primary",
          },
          {
            to: pcMapPath(),
            label: "Mergi la harta Present Continuous",
            variant: "outline",
          },
          {
            to: pcOverviewPath(),
            label: "Vezi recapitularea Present Continuous",
            variant: "secondary",
          },
        ]}
      />
    </TenseTheoryPageShell>
  );
}
