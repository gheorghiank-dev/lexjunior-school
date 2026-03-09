import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import {
  PAST_PERFECT_CONTINUOUS_BASE_PATH,
  pastPerfectContinuousMapPath,
  pastPerfectContinuousRoomPath,
  pastPerfectContinuousOverviewPath,
} from "../past-perfect-continuous-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function PastPerfectContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect Continuous"
      title="Past Perfect Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect Continuous la negativ."
      section1Intro={
        <>
          La negativ, adăugăm <strong>not</strong> după auxiliarul <strong>had</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + had + not + been + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I had not been talking before the lesson started.</li>
              <li>She had not been sleeping well for days.</li>
              <li>They had not been waiting very long before the doors opened.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          La negativ sunt importante atât forma lungă, cât și forma scurtă.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forma lungă</h3>
            <ul className="ps-mini-list">
              <li>I / You / He / She / It / We / They <strong>had not</strong> been working</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forma scurtă</h3>
            <ul className="ps-mini-list">
              <li><strong>had not → hadn&apos;t</strong></li>
              <li>după <strong>hadn&apos;t</strong> păstrăm <strong>been + V-ing</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar cele mai frecvente greșeli la negativ.</>}
      mistakes={[
        { wrong: "She hadn&apos;t been work in the garden.", correct: "She hadn&apos;t been working in the garden." },
        { wrong: "They had not working before lunch.", correct: "They had not been working before lunch." },
        { wrong: "He hadn&apos;t been talked to anyone.", correct: "He hadn&apos;t been talking to anyone." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
