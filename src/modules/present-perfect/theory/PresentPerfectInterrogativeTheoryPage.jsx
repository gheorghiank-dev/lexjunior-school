import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_BASE_PATH,
  presentPerfectMapPath,
  presentPerfectRoomPath,
  presentPerfectOverviewPath,
} from "../present-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function PresentPerfectInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PRESENT_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect"
      title="Present Perfect – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect la interogativ."
      section1Intro={
        <>
          La întrebări, auxiliarul <strong>have / has</strong> trece înaintea subiectului.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Have / Has + S + V3?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Have you visited John?</li>
              <li>Has she already finished?</li>
              <li>Have they been to Rome?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte sunt foarte importante în exerciții.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Întrebări-model</h3>
            <ul className="ps-mini-list">
              <li>Have I walked?</li>
              <li>Have you eaten?</li>
              <li>Has he finished?</li>
              <li>Has she called?</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li>Yes, I / we / you / they <strong>have</strong>.</li>
              <li>Yes, he / she / it <strong>has</strong>.</li>
              <li>No, I / we / you / they <strong>haven&apos;t</strong>.</li>
              <li>No, he / she / it <strong>hasn&apos;t</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar des greșeli de ordine a cuvintelor sau de auxiliar.</>}
      mistakes={[
        { wrong: "You have finished?", correct: "Have you finished?" },
        { wrong: "Has you seen it?", correct: "Have you seen it?" },
        { wrong: "Have he called?", correct: "Has he called?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
