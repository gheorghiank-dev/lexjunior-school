import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PS_BASE_PATH,
  psMapPath,
  psRoomPath,
  psOverviewPath,
  psSensoryTheoryPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryCard from "../../tenses/ui/TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import {
  PRESENT_SIMPLE_USES_TITLES,
  PsUsesStructureBlock,
} from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PsUsesTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (e) {
      // ignore
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
        <h1 className="page-title">
          Present Simple – Întrebuințări (Teorie clasică)
        </h1>
        <p className="page-lead">
          Aici găsești explicațiile de bază pentru principalele întrebuințări
          ale timpului <strong>Present Simple</strong>, cu exemple clare și
          structuri tipice.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* Intro – structură generală */}
      <TenseTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">De ce avem nevoie de „Întrebuințări”?</h2>
        <p className="card-description">
          Nu este suficient să știi cum formezi Present Simple. La fel de
          important este să știi <strong>când</strong> îl folosești corect.
        </p>
        <p className="ps-text">
          În continuare, vei vedea cele mai importante întrebuințări ale
          timpului <strong>Present Simple</strong>. Pentru fiecare, ai:
        </p>
        <ul className="ps-mini-list">
          <li>o explicație scurtă de tip „grammar book”,</li>
          <li>câteva exemple ,</li>
          <li>buton de listen 🔊 pentru a asculta propoziția.</li>
        </ul>

        <PsUsesStructureBlock />
      </TenseTheoryCard>

      {/* 1. Rutine și obiceiuri */}
      <TenseTheorySectionCard
        number="1."
        title={PRESENT_SIMPLE_USES_TITLES[0]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              {" "}
              1. {PRESENT_SIMPLE_USES_TITLES[0]}
            </span>
          </p>
          <p className="ps-text">
            Lucruri pe care le facem în mod regulat: zilnic, săptămânal, în
            general.<br></br> De obicei apar și adverbe de frecvență:{" "}
            <strong>always, usually, often, sometimes, rarely, never</strong>.
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="I get up at seven o'clock."
                ariaLabel="Ascultă propoziția: I get up at seven o'clock."
              />{" "}
              I <strong>get up</strong> at 7 o&apos;clock.
            </li>
            <li>
              <LexTtsButton
                text="She usually walks to school."
                ariaLabel="Ascultă propoziția: She usually walks to school."
              />{" "}
              She usually <strong>walks</strong> to school.
            </li>
            <li>
              <LexTtsButton
                text="We often play tennis at the weekend."
                ariaLabel="Ascultă propoziția: We often play tennis at the weekend."
              />{" "}
              We often <strong>play</strong> tennis at the weekend.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Adevăruri general valabile și legi ale naturii */}
      <TenseTheorySectionCard
        number="2."
        title={PRESENT_SIMPLE_USES_TITLES[1]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              2. {PRESENT_SIMPLE_USES_TITLES[1]}
            </span>
          </p>
          <p className="ps-text">
            Fapte care sunt mereu adevărate sau care sunt considerate legi ale
            naturii.
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="Water boils at one hundred degrees Celsius."
                ariaLabel="Ascultă propoziția: Water boils at one hundred degrees Celsius."
              />{" "}
              Water <strong>boils</strong> at 100°C.
            </li>
            <li>
              <LexTtsButton
                text="The Earth orbits the Sun."
                ariaLabel="Ascultă propoziția: The Earth orbits the Sun."
              />{" "}
              The Earth <strong>orbits</strong> the Sun.
            </li>
            <li>
              <LexTtsButton
                text="Cats have four legs."
                ariaLabel="Ascultă propoziția: Cats have four legs."
              />{" "}
              Cats <strong>have</strong> four legs.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 3. Programe fixe / orare (uneori cu valoare de viitor) */}
      <TenseTheorySectionCard
        number="3."
        title={PRESENT_SIMPLE_USES_TITLES[2]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              3. {PRESENT_SIMPLE_USES_TITLES[2]}
            </span>
          </p>
          <p className="ps-text">
            Programe fixe care nu țin de noi (orare de tren, autobuz, școală,
            cinema etc.).<br></br> Deși uneori ne referim la viitor, programul
            este considerat fix, stabil.
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="The train leaves at six thirty."
                ariaLabel="Ascultă propoziția: The train leaves at six thirty."
              />{" "}
              The train <strong>leaves</strong> at 6:30.
            </li>
            <li>
              <LexTtsButton
                text="School starts at eight o'clock."
                ariaLabel="Ascultă propoziția: School starts at eight o'clock."
              />{" "}
              School <strong>starts</strong> at 8 o&apos;clock.
            </li>
            <li>
              <LexTtsButton
                text="The film begins at nine p.m."
                ariaLabel="Ascultă propoziția: The film begins at nine p.m."
              />{" "}
              The film <strong>begins</strong> at 9 p.m.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 4. Situații și stări permanente */}
      <TenseTheorySectionCard
        number="4."
        title={PRESENT_SIMPLE_USES_TITLES[3]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              4. {PRESENT_SIMPLE_USES_TITLES[3]}
            </span>
          </p>
          <p className="ps-text">
            Lucruri care nu se schimbă des: unde locuim, unde lucrăm, ce credem
            sau ce simțim în general (nu pe moment).
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="They live in Cluj."
                ariaLabel="Ascultă propoziția: They live in Cluj."
              />{" "}
              They <strong>live</strong> in Cluj.
            </li>
            <li>
              <LexTtsButton
                text="He works in IT."
                ariaLabel="Ascultă propoziția: He works in IT."
              />{" "}
              He <strong>works</strong> in IT.
            </li>
            <li>
              <LexTtsButton
                text="We believe this is a good idea."
                ariaLabel="Ascultă propoziția: We believe this is a good idea."
              />{" "}
              We <strong>believe</strong> this is a good idea.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 5. Instrucțiuni, rețete și direcții */}
      <TenseTheorySectionCard
        number="5."
        title={PRESENT_SIMPLE_USES_TITLES[4]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              5. {PRESENT_SIMPLE_USES_TITLES[4]}
            </span>
          </p>
          <p className="ps-text">
            Pași într-o instrucțiune, rețetă sau indicații de orientare.
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="First you mix the flour with the eggs."
                ariaLabel="Ascultă propoziția: First you mix the flour with the eggs."
              />{" "}
              First you <strong>mix</strong> the flour with the eggs.
            </li>
            <li>
              <LexTtsButton
                text="Then you add the milk and you stir."
                ariaLabel="Ascultă propoziția: Then you add the milk and you stir."
              />{" "}
              Then you <strong>add</strong> the milk and you{" "}
              <strong>stir</strong>.
            </li>
            <li>
              <LexTtsButton
                text="You go straight ahead and then you turn left."
                ariaLabel="Ascultă propoziția: You go straight ahead and then you turn left."
              />{" "}
              You <strong>go</strong> straight ahead and then you{" "}
              <strong>turn</strong> left.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 6. Comentarii sportive, transmisiuni live și indicații scenice */}
      <TenseTheorySectionCard
        number="6."
        title={PRESENT_SIMPLE_USES_TITLES[5]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              6. {PRESENT_SIMPLE_USES_TITLES[5]}
            </span>
          </p>
          <p className="ps-text">
            Acțiuni care se întâmplă chiar acum, în fața publicului (meciuri,
            spectacole, scenă).
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="He passes the ball to Smith and Smith scores!"
                ariaLabel="Ascultă propoziția: He passes the ball to Smith and Smith scores!"
              />{" "}
              He <strong>passes</strong> the ball to Smith and Smith{" "}
              <strong>scores</strong>!
            </li>
            <li>
              <LexTtsButton
                text="The singer comes on stage and starts the show."
                ariaLabel="Ascultă propoziția: The singer comes on stage and starts the show."
              />{" "}
              The singer <strong>comes</strong> on stage and{" "}
              <strong>starts</strong> the show.
            </li>
            <li>
              <LexTtsButton
                text="John enters the room and sits down."
                ariaLabel="Ascultă propoziția: John enters the room and sits down."
              />{" "}
              John <strong>enters</strong> the room and <strong>sits</strong>{" "}
              down.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 7. Titluri de ziar */}
      <TenseTheorySectionCard
        number="7."
        title={PRESENT_SIMPLE_USES_TITLES[6]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              7. {PRESENT_SIMPLE_USES_TITLES[6]}
            </span>
          </p>
          <p className="ps-text">Știri mai vii și mai directe.</p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="Government approves new education law."
                ariaLabel="Ascultă propoziția: Government approves new education law."
              />{" "}
              Government <strong>approves</strong> new education law.
            </li>
            <li>
              <LexTtsButton
                text="Scientists discover new planet."
                ariaLabel="Ascultă propoziția: Scientists discover new planet."
              />{" "}
              Scientists <strong>discover</strong> new planet.
            </li>
            <li>
              <LexTtsButton
                text="Local team wins championship."
                ariaLabel="Ascultă propoziția: Local team wins championship."
              />{" "}
              Local team <strong>wins</strong> championship.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 8. Recenzii de filme / cărți / emisiuni */}
      <TenseTheorySectionCard
        number="8."
        title={PRESENT_SIMPLE_USES_TITLES[7]}
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              8. {PRESENT_SIMPLE_USES_TITLES[7]}
            </span>
          </p>
          <p className="ps-text">
            Acțiunea filmului / cărții / emisiunii în general.
          </p>
        </div>

        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="The film tells the story of a young girl who moves to London."
                ariaLabel="Ascultă propoziția: The film tells the story of a young girl who moves to London."
              />{" "}
              The film <strong>tells</strong> the story of a young girl who{" "}
              <strong>moves</strong> to London.
            </li>
            <li>
              <LexTtsButton
                text="The book describes life in the nineteenth century."
                ariaLabel="Ascultă propoziția: The book describes life in the nineteenth century."
              />{" "}
              The book <strong>describes</strong> life in the 19th century.
            </li>
            <li>
              <LexTtsButton
                text="The series follows a group of friends at university."
                ariaLabel="Ascultă propoziția: The series follows a group of friends at university."
              />{" "}
              The series <strong>follows</strong> a group of friends at
              university.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 9. Unde merg mai departe? */}
      <TenseTheoryCard>
        <h2 className="card-title">Unde merg mai departe?</h2>
        <p className="card-description">
          După ce ai citit toate cele 8 întrebuințări, pune-le în practică în
          camerele dedicate din secțiunea Întrebuințări sau treci la varianta
          senzorială pentru a le ancora mai bine în memorie.
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
              label: "Începe Camera 1 – Întrebuințări",
              variant: "primary",
            },
            {
              to: psMapPath(),
              label: "Mergi la harta Present Simple",
              variant: "outline",
            },
            {
              to: psSensoryTheoryPath(),
              label: "Deschide teoria senzorială – Întrebuințări",
              variant: "outline",
            },
            {
              to: psOverviewPath(),
              label: "Vezi recapitularea Present Simple",
              variant: "secondary",
            },
          ]}
        />
      </TenseTheoryCard>
    </TenseTheoryPageShell>
  );
}
