import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_CONTINUOUS_BASE_PATH,
  futureContinuousMapPath,
  futureContinuousOverviewPath,
  futureContinuousRoomPath,
} from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function FutureContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Continuous"
      title="Future Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Continuous la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>will not</strong> + <strong>be</strong> + verbul cu <strong>-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + not + be + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will not be walking.</li>
              <li>He won&apos;t be sleeping at that time.</li>
              <li>They won&apos;t be studying tonight.</li>
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
              <li>urmat de <strong>be + verb-ing</strong></li>
              <li>ex.: She <strong>will not be working</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>will not → won&apos;t</strong></li>
              <li>forma scurtă se folosește foarte des</li>
              <li>verbul principal rămâne la <strong>-ing</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de contracție sau lipsa lui <strong>be</strong>.</>}
      mistakes={[
        { wrong: "She won&apos;t working tonight.", correct: "She won&apos;t be working tonight." },
        { wrong: "I will not be walk.", correct: "I will not be walking." },
        { wrong: "They won&apos;t be travel tomorrow.", correct: "They won&apos;t be travelling tomorrow." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
