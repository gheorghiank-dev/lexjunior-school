import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH, futurePerfectContinuousMapPath, futurePerfectContinuousRoomPath, futurePerfectContinuousOverviewPath } from "../future-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function FuturePerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={FUTURE_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect Continuous"
      title="Future Perfect Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect Continuous la afirmativ."
      section1Intro={
        <>
          La afirmativ, Future Perfect Continuous se formează cu <strong>will + have + been + V1-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + have + been + V1-ing</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will have been talking.</li>
              <li>She will have been working here for five years by June.</li>
              <li>They will have been studying for three hours by 8 p.m.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          După <strong>been</strong>, verbul principal rămâne la forma cu <strong>-ing</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Model fix</h3>
            <ul className="ps-mini-list">
              <li><strong>will + have + been + V-ing</strong></li>
              <li>aceeași structură pentru toate persoanele</li>
              <li>accent pe <strong>durată</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Ce urmărești</h3>
            <ul className="ps-mini-list">
              <li>un moment clar din viitor</li>
              <li>o acțiune în desfășurare până atunci</li>
              <li>adesea apare și <strong>for</strong> pentru durată</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli legate de omiterea lui <strong>been</strong> sau de folosirea lui <strong>V3</strong> în loc de <strong>V-ing</strong>.</>}
      mistakes={[
        { wrong: "She will have working for two hours.", correct: "She will have been working for two hours." },
        { wrong: "They will have been worked here for years.", correct: "They will have been working here for years." },
        { wrong: "I will been talking by then.", correct: "I will have been talking by then." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
