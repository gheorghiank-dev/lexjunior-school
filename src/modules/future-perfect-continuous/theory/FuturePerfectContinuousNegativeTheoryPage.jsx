import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH, futurePerfectContinuousMapPath, futurePerfectContinuousRoomPath, futurePerfectContinuousOverviewPath } from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function FuturePerfectContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect Continuous"
      title="Future Perfect Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect Continuous la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>will not + have + been + V1-ing</strong>. Forma scurtă este <strong>won&apos;t</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + not + have + been + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will not have been talking.</li>
              <li>He won&apos;t have been waiting for long.</li>
              <li>We won&apos;t have been living there for ten years by then.</li>
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
              <li><strong>will not have been</strong></li>
              <li>ex.: I <strong>will not have been talking</strong>.</li>
              <li>după <strong>been</strong> folosim <strong>V-ing</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>will not → won&apos;t</strong></li>
              <li>ex.: She <strong>won&apos;t have been working</strong>.</li>
              <li>nu scoatem <strong>have been</strong> din structură</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de contracție sau de formă verbală după <strong>been</strong>.</>}
      mistakes={[
        { wrong: "He won&apos;t been waiting long.", correct: "He won&apos;t have been waiting long." },
        { wrong: "They will not have been worked here for years.", correct: "They will not have been working here for years." },
        { wrong: "We won&apos;t have waiting by then.", correct: "We won&apos;t have been waiting by then." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
