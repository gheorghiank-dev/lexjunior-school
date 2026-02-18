import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PS_BASE_PATH,
  psMapPath,
  psRoomPath,
  psOverviewPath,
  psTheoryPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryCard from "../../tenses/ui/TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { PRESENT_SIMPLE_USES_TITLES } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PsUsesSensoryTheoryPage() {
  useEffect(() => {
    try {
      // Orice variantă de teorie (clasică sau senzorială) marchează teoria ca parcursă.
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
          Present Simple – Întrebuințări (Teorie senzorială)
        </h1>
        <p className="page-lead">
          Leagă fiecare întrebuințare a lui <strong>Present Simple</strong> de
          imagini, sunete și culori, ca să fie mai ușor de reținut.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* Intro – cum folosești pagina senzorială */}
      <TenseTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">Cum să folosești această pagină</h2>
        <p className="card-description">
          Aici nu repetăm regulile gramaticale clasice. În schimb, transformăm
          fiecare întrebuințare în mici scene pe care le poți vedea, auzi și
          simți.
        </p>
        <p className="ps-text">
          Poți citi exemplele cu voce tare, poți închide ochii și îți poți
          imagina scena sau poți inventa propriile imagini, sunete și culori
          pentru fiecare tip de propoziție.
        </p>
      </TenseTheoryCard>

      {/* 1. Rutine și obiceiuri – senzorial, totul într-un singur card */}
      <TenseTheorySectionCard
        number="1."
        title={PRESENT_SIMPLE_USES_TITLES[0]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              1. {PRESENT_SIMPLE_USES_TITLES[0]}
            </span>
          </p>
          <p className="ps-text">
            Tot ce faci în mod regulat: dimineața, seara, în fiecare lună, în
            fiecare vară.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> un calendar cu zile bifate, un ceas
            deșteptător pe noptieră.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> alarma de dimineață, pași grăbiți pe hol,
            tacâmuri la micul dejun.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Imaginează-ți un calendar plin de zile bifate și auzi sunetul
            alarmei care pornește în fiecare dimineață. Rutinele sunt lucrurile
            pe care le faci mereu, din nou și din nou.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="Every morning, she drinks coffee on the balcony."
                ariaLabel="Ascultă propoziția: Every morning, she drinks coffee on the balcony."
              />{" "}
              Every morning, she <strong>drinks coffee</strong> on the balcony.
            </li>
            <li>
              <LexTtsButton
                text="They go jogging in the park every weekend."
                ariaLabel="Ascultă propoziția: They go jogging in the park every weekend."
              />{" "}
              They <strong>go jogging</strong> in the park every weekend.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Adevăruri general valabile și legi ale naturii – senzorial */}
      <TenseTheorySectionCard
        number="2."
        title={PRESENT_SIMPLE_USES_TITLES[1]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              2. {PRESENT_SIMPLE_USES_TITLES[1]}
            </span>
          </p>
          <p className="ps-text">
            Lucruri care sunt mereu adevărate, indiferent de zi sau de persoană.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> globul pământesc, un laborator, un cer
            plin de stele.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> un profesor care explică, un experiment în
            laborator.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Vezi Pământul în spațiu și o oală cu apă care fierbe pe aragaz. Ai
            senzația că aceste lucruri se întâmplă mereu la fel, indiferent de
            zi sau de persoană.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="The Earth goes around the Sun."
                ariaLabel="Ascultă propoziția: The Earth goes around the Sun."
              />{" "}
              The Earth <strong>goes around</strong> the Sun.
            </li>
            <li>
              <LexTtsButton
                text="Ice melts at zero degrees Celsius."
                ariaLabel="Ascultă propoziția: Ice melts at zero degrees Celsius."
              />{" "}
              Ice <strong>melts</strong> at zero degrees Celsius.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 3. Programe fixe / orare (uneori cu valoare de viitor) – senzorial */}
      <TenseTheorySectionCard
        number="3."
        title={PRESENT_SIMPLE_USES_TITLES[2]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              3. {PRESENT_SIMPLE_USES_TITLES[2]}
            </span>
          </p>
          <p className="ps-text">
            Trenuri, autobuze, program de școală, spectacole – tot ce este
            stabilit printr-un orar oficial.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> un panou mare cu plecări și sosiri, un
            orar colorat.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> anunțuri în gară, soneria de la școală.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Vezi un ceas mare și un panou cu orarul trenurilor. Auzi vocea care
            anunță: „The train leaves at six thirty.” Programul este fix, nu
            depinde de tine.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="The train leaves at six thirty."
                ariaLabel="Ascultă propoziția: The train leaves at six thirty."
              />{" "}
              The train <strong>leaves</strong> at six thirty.
            </li>
            <li>
              <LexTtsButton
                text="Our English lesson starts at eight o'clock."
                ariaLabel="Ascultă propoziția: Our English lesson starts at eight o'clock."
              />{" "}
              Our English lesson <strong>starts</strong> at eight o&apos;clock.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 4. Situații permanente – senzorial */}
      <TenseTheorySectionCard
        number="4."
        title={PRESENT_SIMPLE_USES_TITLES[3]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              4. {PRESENT_SIMPLE_USES_TITLES[3]}
            </span>
          </p>
          <p className="ps-text">
            Lucruri care nu se schimbă ușor: unde locuiești, unde lucrezi, ce
            crezi în general.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> o casă stabilă, un birou, aceeași stradă
            în fiecare zi.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> pași pe aceeași stradă, zgomotul obișnuit
            din cartier.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Imaginează-ți casa ta, strada pe care treci în fiecare zi, drumul
            până la școală sau la birou. Situațiile permanente sunt lucrurile de
            fundal care nu se schimbă de la o zi la alta.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="She lives in a small village."
                ariaLabel="Ascultă propoziția: She lives in a small village."
              />{" "}
              She <strong>lives</strong> in a small village.
            </li>
            <li>
              <LexTtsButton
                text="My dad works in a bank in the city."
                ariaLabel="Ascultă propoziția: My dad works in a bank in the city."
              />{" "}
              My dad <strong>works</strong> in a bank in the city.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 5. Instrucțiuni, rețete și direcții – senzorial */}
      <TenseTheorySectionCard
        number="5."
        title={PRESENT_SIMPLE_USES_TITLES[4]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              5. {PRESENT_SIMPLE_USES_TITLES[4]}
            </span>
          </p>
          <p className="ps-text">
            Pași clari, unul după altul, ca într-o rețetă sau într-un manual de
            instrucțiuni, sau indicații de orientare.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> o carte de bucate deschisă, un manual, un
            panou cu săgeți și indicatoare.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> cineva care îți explică „first you..., then
            you...” .
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Vezi o rețetă sau o hartă în fața ta. Auzi pe cineva spunând „First
            you preheat the oven, then you add the milk...”. Instrucțiunile sunt
            ca niște pași de urmat.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="First, you preheat the oven."
                ariaLabel="Ascultă propoziția: First, you preheat the oven."
              />{" "}
              First, you <strong>preheat</strong> the oven.
            </li>
            <li>
              <LexTtsButton
                text="Then, you add the milk and stir slowly."
                ariaLabel="Ascultă propoziția: Then, you add the milk and stir slowly."
              />{" "}
              Then, you <strong>add</strong> the milk and <strong>stir</strong>{" "}
              slowly.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 6. Comentarii sportive, transmisiuni live și indicații scenice – senzorial */}
      <TenseTheorySectionCard
        number="6."
        title={PRESENT_SIMPLE_USES_TITLES[5]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              6. {PRESENT_SIMPLE_USES_TITLES[5]}
            </span>
          </p>
          <p className="ps-text">
            Descrierea unui meci, a unui spectacol sau a unei scene chiar în
            timp ce se întâmplă.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> un stadion plin sau o scenă de teatru,
            reflectoare și public.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> vocea comentatorului care spune „He shoots,
            he scores!”, aplauze, strigăte.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Ești pe stadion sau în sală. Auzi un comentator care descrie exact
            ce vezi: „He passes the ball, he scores.” Totul se întâmplă în fața
            ta, dar folosim Present Simple ca să facem scena mai vie.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="He passes the ball and he scores."
                ariaLabel="Ascultă propoziția: He passes the ball and he scores."
              />{" "}
              He <strong>passes</strong> the ball and he <strong>scores</strong>
              .
            </li>
            <li>
              <LexTtsButton
                text="The crowd goes wild as the team enters the field."
                ariaLabel="Ascultă propoziția: The crowd goes wild as the team enters the field."
              />{" "}
              The crowd <strong>goes</strong> wild as the team{" "}
              <strong>enters</strong> the field.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 7. Titluri de ziar – senzorial */}
      <TenseTheorySectionCard
        number="7."
        title={PRESENT_SIMPLE_USES_TITLES[6]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              7. {PRESENT_SIMPLE_USES_TITLES[6]}
            </span>
          </p>
          <p className="ps-text">
            Titlurile scurte și puternice care prezintă știrea direct, ca o
            fotografie în cuvinte.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> prima pagină de ziar, titluri mari,
            îngroșate.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> foșnet de ziar, cineva care citește cu voce
            tare „Breaking news!”.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Vezi titluri mari, scurte și foarte directe: „Team wins final”,
            „City opens new park”. Titlurile sunt ca niște poze rapide în
            cuvinte.
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="Local team wins championship."
                ariaLabel="Ascultă propoziția: Local team wins championship."
              />{" "}
              Local team <strong>wins</strong> championship.
            </li>
            <li>
              <LexTtsButton
                text="New cafe opens in town."
                ariaLabel="Ascultă propoziția: New cafe opens in town."
              />{" "}
              New cafe <strong>opens</strong> in town.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 8. Recenzii de filme / cărți / emisiuni – senzorial */}
      <TenseTheorySectionCard
        number="8."
        title={PRESENT_SIMPLE_USES_TITLES[7]}
        style={{ marginBottom: "1.75rem" }}
      >
        {/* Titlu + explicație + Imagine + Sunet */}
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">
            <span className="rule-highlight">
              8. {PRESENT_SIMPLE_USES_TITLES[7]}
            </span>
          </p>
          <p className="ps-text">
            Cum povestești, în prezent, ce face un film, o carte sau o emisiune
            „în general”.
          </p>

          <p className="ps-text">
            <span role="img" aria-label="imagine">
              👀
            </span>{" "}
            <strong>Imagine:</strong> un ecran de cinema, rafturi cu cărți, o
            telecomandă pe masă.
          </p>
          <p className="ps-text">
            <span role="img" aria-label="sunet">
              👂
            </span>{" "}
            <strong>Sunet:</strong> cineva spune „The film tells the story of…”,
            un trailer de film în fundal.
          </p>
        </div>

        {/* Cum îl simți? */}
        <div className="ps-sensory-feel-card">
          <p className="ps-text">
            <span className="rule-highlight">Cum îl simți?</span>
          </p>
          <p className="ps-text">
            Stai pe canapea cu popcorn în mână și povestești despre un film sau
            o carte. Nu spui „the film was telling”, ci „the film tells the
            story of...” .
          </p>
        </div>

        {/* Exemple */}
        <div className="example-box">
          <ul className="ps-mini-list">
            <li>
              <LexTtsButton
                text="The film tells the story of a young girl who moves to London."
                ariaLabel="Ascultă propoziția: The film tells the story of a young girl who moves to London."
              />{" "}
              The film <strong>tells</strong> the story of a young girl who
              moves to London.
            </li>
            <li>
              <LexTtsButton
                text="The book describes life in a small village."
                ariaLabel="Ascultă propoziția: The book describes life in a small village."
              />{" "}
              The book <strong>describes</strong> life in a small village.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* Card final – Ce poți face mai departe */}
      <TenseTheoryCard>
        <h2 className="card-title">Ce poți face mai departe</h2>
        <p className="card-description">
          Alege una dintre întrebuințări și creează-ți propria ta scenă:
          desenează-o, povestește-o sau inventează alte exemple la Present
          Simple. Apoi treci la camerele din secțiunea Uses ca să pui în
          practică ce ai vizualizat aici.
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
              to: psTheoryPath(SECTION_ID),
              label: "Deschide teoria clasică – Întrebuințări",
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
