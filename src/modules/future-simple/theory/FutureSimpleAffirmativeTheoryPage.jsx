import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_SIMPLE_BASE_PATH,
  futureSimpleMapPath,
  futureSimpleRoomPath,
  futureSimpleOverviewPath,
} from "../future-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function FutureSimpleAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={FUTURE_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Future Simple"
      title="Future Simple – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Future Simple la afirmativ."
      section1Intro={
        <>
          La afirmativ, Future Simple se formează cu <strong>will</strong> sau forma scurtă <strong>&apos;ll</strong> + verbul la <strong>forma de bază (V1)</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will / &apos;ll + V1</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will walk.</li>
              <li>She&apos;ll call you tonight.</li>
              <li>They will arrive tomorrow.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          Pentru persoana I singular și plural putem folosi și <strong>shall</strong> în loc de <strong>will</strong>, mai ales în engleza formală.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Observații de bază</h3>
            <ul className="ps-mini-list">
              <li>după <strong>will</strong> folosim mereu <strong>V1</strong></li>
              <li>aceeași structură se folosește cu toate persoanele</li>
              <li>forma scurtă este <strong>&apos;ll</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Note utile</h3>
            <ul className="ps-mini-list">
              <li><strong>shall</strong> poate înlocui <strong>will</strong> la <strong>I</strong> și <strong>we</strong></li>
              <li>verbul principal rămâne în forma de bază</li>
              <li>nu adăugăm <strong>-s</strong>, <strong>-ed</strong> sau <strong>-ing</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de formă a verbului principal după will.</>}
      mistakes={[
        { wrong: "She will goes tomorrow.", correct: "She will go tomorrow." },
        { wrong: "I will going there tonight.", correct: "I will go there tonight." },
        { wrong: "They will arrives soon.", correct: "They will arrive soon." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
