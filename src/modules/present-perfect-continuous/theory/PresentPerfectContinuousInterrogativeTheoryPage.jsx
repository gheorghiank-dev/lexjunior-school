import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  presentPerfectContinuousMapPath,
  presentPerfectContinuousRoomPath,
  presentPerfectContinuousOverviewPath,
} from "../present-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function PresentPerfectContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect Continuous"
      title="Present Perfect Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect Continuous la interogativ."
      section1Intro={
        <>
          La interogativ, auxiliarul <strong>have / has</strong> trece în fața subiectului.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Have / Has + S + been + V1-ing?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Have you been waiting for a long time?</li>
              <li>Has she been studying since morning?</li>
              <li>Have they been playing outside?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          La acest timp sunt foarte importante răspunsurile scurte.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte afirmative</h3>
            <ul className="ps-mini-list">
              <li>Yes, I / we / you / they <strong>have</strong>.</li>
              <li>Yes, he / she / it <strong>has</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte negative</h3>
            <ul className="ps-mini-list">
              <li>No, I / we / you / they <strong>haven&apos;t</strong>.</li>
              <li>No, he / she / it <strong>hasn&apos;t</strong>.</li>
              <li>Negative-interrogative: <strong>Haven&apos;t you been talking?</strong> / <strong>Hasn&apos;t he been talking?</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici sunt cele mai frecvente greșeli la interogativ.</>}
      mistakes={[
        { wrong: "Has she been study since morning?", correct: "Has she been studying since morning?" },
        { wrong: "Have been you waiting long?", correct: "Have you been waiting long?" },
        { wrong: "Do they have been working?", correct: "Have they been working?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
