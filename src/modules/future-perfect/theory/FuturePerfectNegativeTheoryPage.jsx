import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function FuturePerfectNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>will not + have + V3</strong>. Forma scurtă este <strong>won&apos;t</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + not + have + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will not have walked.</li>
              <li>He won&apos;t have finished the project by Monday.</li>
              <li>We won&apos;t have arrived by 8 p.m.</li>
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
              <li><strong>will not have</strong></li>
              <li>ex.: I <strong>will not have finished</strong>.</li>
              <li>verbul rămâne la <strong>V3</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>will not → won&apos;t</strong></li>
              <li>ex.: She <strong>won&apos;t have arrived</strong>.</li>
              <li>după <strong>have</strong> folosim tot <strong>V3</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de contracție sau de folosire a formei greșite a verbului principal.</>}
      mistakes={[
        { wrong: "He won&apos;t finished by noon.", correct: "He won&apos;t have finished by noon." },
        { wrong: "They will not have went home.", correct: "They will not have gone home." },
        { wrong: "We won&apos;t have wrote the test.", correct: "We won&apos;t have written the test." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
