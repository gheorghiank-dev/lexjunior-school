import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { PAST_SIMPLE_BASE_PATH, pastSimpleMapPath, pastSimpleRoomPath, pastSimpleOverviewPath } from "../past-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";

const SECTION_ID = "negative";

export default function PastSimpleNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PAST_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Past Simple"
      title="Past Simple – Negativ"
      lead="Reguli, forme și exemple pentru propozițiile negative la Past Simple."
      section1Intro={<>În Past Simple, la negativ, folosim auxiliarul <strong>did not</strong> + verbul în <strong>forma de bază</strong>.</>}
      section1Content={
        <>
          <div className="lj-structure-box ps-structure-box">
            <h3 className="lj-structure-title">Formula</h3>
            <p className="ps-text"><span className="rule-highlight">S + did not + V1</span></p>
            <p className="ps-text">Formă scurtă: <strong>did not → didn&apos;t</strong></p>
          </div>

          <div className="example-box" style={{ marginTop: "1.25rem" }}>
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>I <strong>did not walk</strong>.</li>
              <li>I <strong>didn&apos;t walk</strong>.</li>
              <li>He <strong>did not go</strong>.</li>
              <li>They <strong>didn&apos;t play</strong>.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>La negativ, toate persoanele folosesc același auxiliar: <strong>did not / didn&apos;t</strong>.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forma lungă</h3>
            <ul className="ps-mini-list">
              <li>I did not walk.</li>
              <li>You did not walk.</li>
              <li>He did not walk.</li>
              <li>We did not walk.</li>
              <li>They did not walk.</li>
            </ul>
          </div>

          <div className="rule-box">
            <h3>Forma scurtă</h3>
            <ul className="ps-mini-list">
              <li>I didn&apos;t walk.</li>
              <li>You didn&apos;t walk.</li>
              <li>He didn&apos;t walk.</li>
              <li>We didn&apos;t walk.</li>
              <li>They didn&apos;t walk.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>După <span className="rule-highlight-emphasis">didn&apos;t</span>, verbul rămâne întotdeauna în <strong>V1</strong>, nu în V2.</>}
      mistakes={[
        { wrong: "He didn&apos;t walked.", correct: "He didn&apos;t walk." },
        { wrong: "They didn&apos;t went to school.", correct: "They didn&apos;t go to school." },
        { wrong: "She didn&apos;t tried.", correct: "She didn&apos;t try." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pastSimpleMapPath(), label: "Harta modulului" },
        { to: pastSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
