import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcRoomPath, pcOverviewPath, pcTheoryPath } from "../pc-paths.js";

const SECTION_ID = "uses";

export default function PcUsesSensoryTheoryPage() {
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
          <Link to={pcTheoryPath(SECTION_ID)} className="page-header-backlink">
            ← Înapoi la teoria clasică – Întrebuințări
          </Link>
        </p>

        <h1 className="page-title">
          Present Continuous – Întrebuințări (Teorie senzorială)
        </h1>
        <p className="page-lead">
          Aici nu memorăm doar reguli. Transformăm întrebuințările lui{" "}
          <strong>Present Continuous</strong> în mici scene și povești, ca să
          le recunoști mai ușor în viața de zi cu zi.
        </p>
      </header>

      {/* Lex Junior – Study Tip (global) */}
      <TenseLexStudyTipCard />

      {/* 1. Cum să folosești această pagină */}
      <TenseTheorySectionCard
        number="1."
        title="Cum să folosești această pagină"
        intro={
          <>
            Alege o scenă, citește-o cu voce tare și imaginează-ți că ești chiar
            acolo. Lasă-ți mintea să vadă, să audă și să simtă ce se întâmplă{" "}
            <strong>acum</strong> sau în <strong>perioada aceasta</strong>.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <p className="ps-text">
          Nu repetăm regulile pas cu pas – acestea apar în teoria clasică. Aici
          îți antrenăm <strong>intuiția</strong>: când „sună” a Present Continuous?
        </p>
        <p className="ps-text">
          Poți folosi butoanele audio pentru a auzi propozițiile și apoi să
          le repeți sau să inventezi variante proprii, păstrând aceeași idee.
        </p>
      </TenseTheorySectionCard>

      {/* 2. Acțiuni care se întâmplă chiar acum */}
      <TenseTheorySectionCard
        number="2."
        title="Acțiuni care se întâmplă chiar acum"
        intro={
          <>
            Present Continuous surprinde acțiuni care se desfășoară chiar în
            momentul vorbirii. Imaginează-ți că apeși „pauză” pe o scenă din
            viața ta.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="example-box">
          <p className="ps-text">
            Închide ochii și imaginează-ți aceste scene. Ce vezi? Ce auzi?
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="I am writing a message to my best friend."
                ariaLabel="Ascultă propoziția: I am writing a message to my best friend."
              />{" "}
              I am <strong>writing</strong> a message to my best friend.
            </li>
            <li>
              <LexTtsButton
                text="She is laughing with her classmates."
                ariaLabel="Ascultă propoziția: She is laughing with her classmates."
              />{" "}
              She is <strong>laughing</strong> with her classmates.
            </li>
            <li>
              <LexTtsButton
                text="They are waiting for the bus in the rain."
                ariaLabel="Ascultă propoziția: They are waiting for the bus in the rain."
              />{" "}
              They are <strong>waiting</strong> for the bus in the rain.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 3. Situații temporare */}
      <TenseTheorySectionCard
        number="3."
        title="Situații temporare"
        intro={
          <>
            Uneori, Present Continuous vorbește despre lucruri care nu se
            întâmplă chiar în secunda aceasta, dar sunt{" "}
            <strong>temporare</strong> sau valabile doar pentru o perioadă.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="example-box">
          <p className="ps-text">
            Gândește-te la o perioadă scurtă din viața ta: această săptămână,
            această lună, acest an școlar.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="I am staying with my cousins this week."
                ariaLabel="Ascultă propoziția: I am staying with my cousins this week."
              />{" "}
              I am <strong>staying</strong> with my cousins this week.
            </li>
            <li>
              <LexTtsButton
                text="He is working on a big school project this month."
                ariaLabel="Ascultă propoziția: He is working on a big school project this month."
              />{" "}
              He is <strong>working</strong> on a big school project this month.
            </li>
            <li>
              <LexTtsButton
                text="We are learning about different countries at school this term."
                ariaLabel="Ascultă propoziția: We are learning about different countries at school this term."
              />{" "}
              We are <strong>learning</strong> about different countries at school this term.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 4. Planuri pentru viitorul apropiat */}
      <TenseTheorySectionCard
        number="4."
        title="Planuri pentru viitorul apropiat"
        intro={
          <>
            Când planul este deja stabilit (ora, ziua, locul), folosim des{" "}
            <strong>Present Continuous</strong> pentru a vorbi despre viitorul
            apropiat.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="example-box">
          <p className="ps-text">
            Imaginează-ți că îți planifici săptămâna în agendă.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton
                text="We are having a class party on Friday."
                ariaLabel="Ascultă propoziția: We are having a class party on Friday."
              />{" "}
              We are <strong>having</strong> a class party on Friday.
            </li>
            <li>
              <LexTtsButton
                text="She is visiting her grandparents this weekend."
                ariaLabel="Ascultă propoziția: She is visiting her grandparents this weekend."
              />{" "}
              She is <strong>visiting</strong> her grandparents this weekend.
            </li>
            <li>
              <LexTtsButton
                text="They are travelling to the mountains tomorrow morning."
                ariaLabel="Ascultă propoziția: They are travelling to the mountains tomorrow morning."
              />{" "}
              They are <strong>travelling</strong> to the mountains tomorrow morning.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

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
