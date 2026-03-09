import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_SIMPLE_BASE_PATH,
  futureSimpleMapPath,
  futureSimpleRoomPath,
  futureSimpleOverviewPath,
} from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function FutureSimpleNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Future Simple"
      title="Future Simple – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Simple la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>will not</strong> + verbul la <strong>forma de bază</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + not + V1</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will not walk.</li>
              <li>He won&apos;t come with us.</li>
              <li>They won&apos;t forget the meeting.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Trebuie să știi atât forma lungă, cât și forma scurtă.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li><strong>will not</strong></li>
              <li><strong>shall not</strong> pentru I / we</li>
              <li>după ele verbul rămâne în <strong>V1</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>will not → won&apos;t</strong></li>
              <li><strong>shall not → shan&apos;t</strong></li>
              <li>nu folosim <strong>to</strong> după auxiliar</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de contracție sau de formă a verbului după won&apos;t.</>}
      mistakes={[
        { wrong: "She won&apos;t goes there.", correct: "She won&apos;t go there." },
        { wrong: "I will not to call him.", correct: "I will not call him." },
        { wrong: "They shan&apos;t to stay.", correct: "They shan&apos;t stay." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
