import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_SIMPLE_BASE_PATH,
  futureSimpleMapPath,
  futureSimpleRoomPath,
  futureSimpleOverviewPath,
} from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function FutureSimpleInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Future Simple"
      title="Future Simple – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Simple la interogativ."
      section1Intro={
        <>
          La interogativ, <strong>will</strong> trece înaintea subiectului, iar verbul principal rămâne în <strong>V1</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Will + S + V1?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Will you help me?</li>
              <li>Will she visit us tomorrow?</li>
              <li>Will they arrive on time?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte și structurile cu shall sunt importante în exerciții.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li>Yes, I / he / she / it / we / you / they <strong>will</strong>.</li>
              <li>No, I / he / she / it / we / you / they <strong>won&apos;t</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Shall</h3>
            <ul className="ps-mini-list">
              <li><strong>Shall I ...?</strong> = ofertă</li>
              <li><strong>Shall we ...?</strong> = sugestie</li>
              <li><strong>Wh-word + shall I/we...?</strong> = cerere de sugestii sau instrucțiuni</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar des greșeli de ordine a cuvintelor sau de răspuns scurt.</>}
      mistakes={[
        { wrong: "You will come?", correct: "Will you come?" },
        { wrong: "Will she comes tomorrow?", correct: "Will she come tomorrow?" },
        { wrong: "Yes, she won&apos;t.", correct: "Yes, she will." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
