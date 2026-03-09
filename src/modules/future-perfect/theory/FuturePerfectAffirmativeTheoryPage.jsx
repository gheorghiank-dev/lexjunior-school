import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function FuturePerfectAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la afirmativ."
      section1Intro={
        <>
          La afirmativ, Future Perfect se formează cu <strong>will + have + V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + have + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will have walked.</li>
              <li>She will have finished the report by 6 o&apos;clock.</li>
              <li>They will have arrived before dinner.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          <strong>V3</strong> înseamnă participiul trecut: la verbele regulate este de obicei <strong>V1 + -ed</strong>, iar la verbele neregulate folosim forma a treia din listă.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Verbe regulate</h3>
            <ul className="ps-mini-list">
              <li><strong>walk → walked</strong></li>
              <li><strong>finish → finished</strong></li>
              <li><strong>play → played</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Verbe neregulate</h3>
            <ul className="ps-mini-list">
              <li><strong>go → gone</strong></li>
              <li><strong>see → seen</strong></li>
              <li><strong>write → written</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli legate de folosirea formei a doua în loc de <strong>V3</strong> sau de omiterea lui <strong>have</strong>.</>}
      mistakes={[
        { wrong: "She will finished by 5.", correct: "She will have finished by 5." },
        { wrong: "They will have went home.", correct: "They will have gone home." },
        { wrong: "I will have wrote the email.", correct: "I will have written the email." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
