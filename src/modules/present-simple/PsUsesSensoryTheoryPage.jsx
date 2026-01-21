import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PS_BASE_PATH, psMapPath, psRoomPath, psTheoryPath } from "./ps-paths.js";
import { markTheoryCompleted } from "./ps-core/theory-progress.js";
import PsTheoryPageShell from "./components/PsTheoryPageShell.jsx";
import PsTheoryCard from "./components/PsTheoryCard.jsx";
import PsTheoryNextSteps from "./components/PsTheoryNextSteps.jsx";
import PsLexStudyTipCard from "./components/PsLexStudyTipCard.jsx";
import LexTtsButton from "../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../core/platform/browser-dom.js";

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
    <PsTheoryPageShell>
      <header className="page-header">
        <p className="page-backlink-row">
          <Link
            to={PS_BASE_PATH}
            className="btn btn-soft ps-back-link"
          >
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
      <PsLexStudyTipCard />

      {/* Intro – cum folosești pagina senzorială */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
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
      </PsTheoryCard>

      {/* 1. Rutine și obiceiuri */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>1. Rutine și obiceiuri</h2>
          <p className="ps-text">
            Tot ce faci în mod regulat: dimineața, seara, în fiecare luni, în
            fiecare vară.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: un calendar cu zile bifate, un ceas deșteptător pe
            noptieră.
            <br />
            👂 Sunet: alarma de dimineață, pași grăbiți pe hol, tacâmuri la
            micul dejun.
            <br />
            🎨 Culoare: portocaliu (energie), galben (lumina de dimineață).
          </p>
          <p className="ps-sense">
            Cum îl simți? Imaginează-ți un calendar plin de zile bifate și auzi
            sunetul alarmei care pornește în fiecare dimineață. Rutinele sunt
            lucrurile pe care le faci mereu, din nou și din nou.
          </p>
          <div className="example-box">
            <ul className="ps-mini-list">
              <li>
                <LexTtsButton
                  text="Every morning, she drinks coffee on the balcony."
                  ariaLabel="Ascultă propoziția: Every morning, she drinks coffee on the balcony."
                />{" "}
                Every morning, she <strong>drinks coffee</strong> on the
                balcony.
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
        </div>
      </PsTheoryCard>

      {/* 2. Adevăruri general valabile și legi ale naturii */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>2. Adevăruri general valabile și legi ale naturii</h2>
          <p className="ps-text">
            Lucruri care sunt mereu adevărate, indiferent de zi sau de persoană.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: globul pământesc, un laborator, un cer plin de stele.
            <br />
            👂 Sunet: un profesor care explică, un experiment în laborator.
            <br />
            🎨 Culoare: albastru închis (cer, spațiu), alb (halate de
            laborator).
          </p>
          <p className="ps-sense">
            Cum îl simți? Vezi Pământul în spațiu și o oală cu apă care fierbe
            pe aragaz. Ai senzația că aceste lucruri se întâmplă mereu la fel,
            indiferent de zi sau de persoană.
          </p>
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
        </div>
      </PsTheoryCard>

      {/* 3. Programe fixe / orare (uneori cu valoare de viitor) */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>3. Programe fixe / orare (uneori cu valoare de viitor)</h2>
          <p className="ps-text">
            Trenuri, autobuze, program de școală, spectacole – tot ce este
            stabilit printr-un orar oficial.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: un panou mare cu plecări și sosiri, un orar colorat.
            <br />
            👂 Sunet: anunțuri în gară, soneria de la școală.
            <br />
            🎨 Culoare: verde închis sau albastru (panouri, tabele), gri
            (peroane).
          </p>
          <p className="ps-sense">
            Cum îl simți? Vezi un ceas mare și un panou cu orarul trenurilor.
            Auzi vocea care anunță: „The train leaves at six thirty.” Programul
            este fix, nu depinde de tine.
          </p>
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
                Our English lesson <strong>starts</strong> at eight
                o&apos;clock.
              </li>
            </ul>
          </div>
        </div>
      </PsTheoryCard>

      {/* 4. Situații permanente */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>4. Situații permanente</h2>
          <p className="ps-text">
            Lucruri care nu se schimbă ușor: unde locuiești, unde lucrezi, ce
            crezi în general.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: o casă stabilă, un birou, aceeași stradă în fiecare zi.
            <br />
            👂 Sunet: pași pe aceeași stradă, zgomotul obișnuit din cartier.
            <br />
            🎨 Culoare: bej sau maro (stabil, calm).
          </p>
          <p className="ps-sense">
            Cum îl simți? Imaginează-ți casa ta, strada pe care treci în fiecare
            zi, drumul până la școală sau la birou. Situațiile permanente sunt
            lucrurile de fundal care nu se schimbă de la o zi la alta.
          </p>
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
        </div>
      </PsTheoryCard>

      {/* 5. Instrucțiuni, rețete și direcții */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>5. Instrucțiuni, rețete și direcții</h2>
          <p className="ps-text">
            Pași clari, unul după altul, ca într-o rețetă sau într-un manual de
            instrucțiuni, sau indicații de orientare.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: o carte de bucate deschisă, un manual, un panou cu
            săgeți și indicatoare.
            <br />
            👂 Sunet: cineva care îți explică „first you..., then you...”.
            <br />
            🎨 Culoare: alb (paginile), galben (post-it), verde sau albastru
            (butoane, pictograme).
          </p>
          <p className="ps-sense">
            Cum îl simți? Vezi o rețetă sau o hartă în fața ta. Auzi pe cineva
            spunând „First you preheat the oven, then you add the milk...”.
            Instrucțiunile sunt ca niște pași de urmat.
          </p>
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
                Then, you <strong>add</strong> the milk and{" "}
                <strong>stir</strong> slowly.
              </li>
            </ul>
          </div>
        </div>
      </PsTheoryCard>

      {/* 6. Comentarii sportive, transmisiuni live și indicații scenice */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>
            6. Comentarii sportive, transmisiuni live și indicații scenice
          </h2>
          <p className="ps-text">
            Descrierea unui meci, a unui spectacol sau a unei scene chiar în
            timp ce se întâmplă.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: un stadion plin sau o scenă de teatru, reflectoare şi
            public.
            <br />
            👂 Sunet: vocea comentatorului care spune „He shoots, he scores!”,
            aplauze, strigăte.
            <br />
            🎨 Culoare: roșu (acțiune, intensitate), verde (terenul), auriu
            (luminile scenei).
          </p>
          <p className="ps-sense">
            Cum îl simți? Ești pe stadion sau în sală. Auzi un comentator care
            descrie exact ce vezi: „He passes the ball, he scores.” Totul se
            întâmplă în fața ta, dar folosim Present Simple ca să facem scena
            mai vie.
          </p>
          <div className="example-box">
            <ul className="ps-mini-list">
              <li>
                <LexTtsButton
                  text="He passes the ball and he scores."
                  ariaLabel="Ascultă propoziția: He passes the ball and he scores."
                />{" "}
                He <strong>passes</strong> the ball and he{" "}
                <strong>scores</strong>.
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
        </div>
      </PsTheoryCard>

      {/* 7. Titluri de ziar */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>7. Titluri de ziar</h2>
          <p className="ps-text">
            Titlurile scurte și puternice care prezintă știrea direct, ca o
            fotografie în cuvinte.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: prima pagină de ziar, titluri mari, îngroșate.
            <br />
            👂 Sunet: foșnet de ziar, cineva care citește cu voce tare „Breaking
            news!”.
            <br />
            🎨 Culoare: negru pe alb (contrast clar), roșu pentru titluri
            importante.
          </p>
          <p className="ps-sense">
            Cum îl simți? Vezi titluri mari, scurte și foarte directe: „Team
            wins final”, „City opens new park”. Titlurile sunt ca niște poze
            rapide în cuvinte.
          </p>
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
        </div>
      </PsTheoryCard>

      {/* 8. Recenzii de filme / cărți / emisiuni */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <div className="ps-sense-box">
          <h2>8. Recenzii de filme / cărți / emisiuni</h2>
          <p className="ps-text">
            Cum povestești, în prezent, ce face un film, o carte sau o emisiune
            „în general”.
          </p>
          <p className="ps-text ps-sense-icons">
            👀 Imagine: un ecran de cinema, rafturi cu cărți, o telecomandă pe
            masă.
            <br />
            👂 Sunet: cineva spune „The film tells the story of…”, un trailer de
            film în fundal.
            <br />
            🎨 Culoare: mov (imaginație, povești), albastru închis (cinema),
            portocaliu (lumina ecranului).
          </p>
          <p className="ps-sense">
            Cum îl simți? Stai pe canapea cu popcorn în mână și povestești
            despre un film sau o carte. Nu spui „the film was telling”, ci „the
            film tells the story of…”.
          </p>
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
        </div>
      </PsTheoryCard>

      {/* Card final – Ce poți face mai departe */}
      <PsTheoryCard>
        <h2 className="card-title">Ce poți face mai departe</h2>
        <p className="card-description">
          Alege una dintre întrebuințări și creează-ți propria ta scenă:
          desenează-o, povestește-o sau inventează alte exemple la Present
          Simple. Apoi treci la camerele din secțiunea Uses ca să pui în
          practică ce ai vizualizat aici.
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
          ]}
        />
      </PsTheoryCard>
    </PsTheoryPageShell>
  );
}
