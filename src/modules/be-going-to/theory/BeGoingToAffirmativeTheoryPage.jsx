import React, { useEffect } from "react";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import {
  BE_GOING_TO_BASE_PATH,
  beGoingToMapPath,
  beGoingToRoomPath,
  beGoingToOverviewPath,
} from "../be-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function BeGoingToAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={BE_GOING_TO_BASE_PATH}
      backLabel="← Înapoi la modulul Be Going To"
      title="Be Going To – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea structurii be going to la afirmativ."
      section1Intro={
        <>
          La afirmativ, folosim <strong>to be</strong> la prezent
          (<strong>am / is / are</strong>) + <strong>going to</strong> + verbul la
          <strong> forma de bază (V1)</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + am / is / are + going to + V1</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I am going to eat.</li>
              <li>She is going to study tonight.</li>
              <li>They are going to play tomorrow.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          Auxiliarul <strong>to be</strong> se schimbă după persoană, dar verbul
          principal rămâne mereu la <strong>V1</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme corecte</h3>
            <ul className="ps-mini-list">
              <li><strong>I am</strong> going to work</li>
              <li><strong>He / She / It is</strong> going to work</li>
              <li><strong>We / You / They are</strong> going to work</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Observații utile</h3>
            <ul className="ps-mini-list">
              <li>după <strong>going to</strong> folosim mereu <strong>V1</strong></li>
              <li>nu folosim <strong>will</strong> în această structură</li>
              <li>structura exprimă un plan sau o intenție legată de viitor</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar des greșeli legate de verbul to be sau de forma verbului principal.</>}
      mistakes={[
        { wrong: "She going to study tonight.", correct: "She is going to study tonight." },
        { wrong: "I am going to studies tonight.", correct: "I am going to study tonight." },
        { wrong: "They is going to play tomorrow.", correct: "They are going to play tomorrow." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: beGoingToRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
