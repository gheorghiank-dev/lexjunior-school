import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  presentPerfectContinuousMapPath,
  presentPerfectContinuousRoomPath,
  presentPerfectContinuousOverviewPath,
} from "../present-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function PresentPerfectContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect Continuous"
      title="Present Perfect Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect Continuous la negativ."
      section1Intro={
        <>
          La negativ, păstrăm structura de bază și adăugăm <strong>not</strong> după auxiliarul <strong>have / has</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + have / has + not + been + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I have not been sleeping well lately.</li>
              <li>He has not been talking to me recently.</li>
              <li>They have not been learning English for very long.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          La negativ sunt importante atât formele lungi, cât și formele scurte.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li>I / You / We / They <strong>have not</strong> been working</li>
              <li>He / She / It <strong>has not</strong> been working</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte</h3>
            <ul className="ps-mini-list">
              <li><strong>have not → haven&apos;t</strong></li>
              <li><strong>has not → hasn&apos;t</strong></li>
              <li>verbul principal rămâne în forma <strong>-ing</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici sunt cele mai frecvente greșeli la negativ.</>}
      mistakes={[
        { wrong: "He hasn't been talk to me.", correct: "He hasn't been talking to me." },
        { wrong: "I haven't been slept well lately.", correct: "I haven't been sleeping well lately." },
        { wrong: "She hasn't been work today.", correct: "She hasn't been working today." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
