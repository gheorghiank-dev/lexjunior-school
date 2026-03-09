import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { PAST_SIMPLE_BASE_PATH, pastSimpleMapPath, pastSimpleRoomPath, pastSimpleOverviewPath } from "../past-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";

const SECTION_ID = "interrogative";

export default function PastSimpleInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PAST_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Past Simple"
      title="Past Simple – Interogativ"
      lead="Reguli, răspunsuri scurte și exemple pentru întrebările la Past Simple."
      section1Intro={<>În Past Simple, la interogativ, folosim auxiliarul <strong>did</strong> înaintea subiectului, iar verbul principal rămâne în <strong>V1</strong>.</>}
      section1Content={
        <>
          <div className="lj-structure-box ps-structure-box">
            <h3 className="lj-structure-title">Formula</h3>
            <p className="ps-text"><span className="rule-highlight">Did + S + V1?</span></p>
          </div>

          <div className="example-box" style={{ marginTop: "1.25rem" }}>
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li><strong>Did</strong> I walk?</li>
              <li><strong>Did</strong> you walk?</li>
              <li><strong>Did</strong> he walk?</li>
              <li><strong>Did</strong> they walk?</li>
            </ul>
          </div>
        </>
      }
      section2Title="Răspunsuri scurte și negativ-interogativ"
      section2Intro={<>Răspunsurile scurte se formează tot cu auxiliarul <strong>did</strong>.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li><strong>Yes</strong>, I / he / she / it / we / you / they <strong>did</strong>.</li>
              <li><strong>No</strong>, I / he / she / it / we / you / they <strong>didn&apos;t</strong>.</li>
            </ul>
          </div>

          <div className="rule-box">
            <h3>Negative – Interrogative</h3>
            <ul className="ps-mini-list">
              <li><strong>Didn&apos;t</strong> you walk?</li>
              <li><strong>Didn&apos;t</strong> he walk?</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Și aici, după <strong>did</strong>, verbul principal rămâne în <strong>V1</strong>.</>}
      mistakes={[
        { wrong: "Did he walked?", correct: "Did he walk?" },
        { wrong: "Did they went there?", correct: "Did they go there?" },
        { wrong: "Did she tried to help?", correct: "Did she try to help?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pastSimpleMapPath(), label: "Harta modulului" },
        { to: pastSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
