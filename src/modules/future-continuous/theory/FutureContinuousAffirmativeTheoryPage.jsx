import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_CONTINUOUS_BASE_PATH,
  futureContinuousMapPath,
  futureContinuousOverviewPath,
  futureContinuousRoomPath,
} from "../future-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function FutureContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={FUTURE_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Continuous"
      title="Future Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Future Continuous la afirmativ."
      section1Intro={
        <>
          La afirmativ, Future Continuous se formează cu <strong>will / &apos;ll</strong> + <strong>be</strong> + verbul cu terminația <strong>-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will / &apos;ll + be + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will be walking.</li>
              <li>She&apos;ll be studying at 8 o&apos;clock tomorrow.</li>
              <li>They will be travelling this time next week.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          Același model se folosește cu toate persoanele. Verbul principal rămâne la forma de <strong>ing</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Observații de bază</h3>
            <ul className="ps-mini-list">
              <li>folosim mereu <strong>will + be</strong></li>
              <li>după <strong>be</strong> urmează verbul cu <strong>-ing</strong></li>
              <li>putem folosi forma scurtă <strong>&apos;ll</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Ce exprimă</h3>
            <ul className="ps-mini-list">
              <li>o acțiune care va fi în desfășurare în viitor</li>
              <li>accentul cade pe durată / desfășurare</li>
              <li>apare adesea cu un moment viitor clar precizat</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli legate de lipsa lui <strong>be</strong> sau de folosirea greșită a verbului principal.</>}
      mistakes={[
        { wrong: "She will studying at 6.", correct: "She will be studying at 6." },
        { wrong: "I&apos;ll be walk tomorrow.", correct: "I&apos;ll be walking tomorrow." },
        { wrong: "They will be travel tonight.", correct: "They will be travelling tonight." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
