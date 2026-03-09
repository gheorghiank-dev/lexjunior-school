import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousOverviewPath,
  futurePerfectContinuousRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "time-expressions";

export default function FuturePerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futurePerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Future Perfect Continuous"
      title="Future Perfect Continuous – Expresii de timp"
      lead="Aici vezi expresiile de timp care apar cel mai des cu Future Perfect Continuous și cum te ajută ele să recunoști timpul."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect Continuous apare frecvent cu expresii care combină durata cu un punct clar din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce arată aceste expresii">
          <p className="ps-text">
            Aceste expresii indică <strong>cât timp</strong> durează activitatea și <strong>până când</strong> se întinde ea.
          </p>
        </TenseStructureBox>
      }
      card2Title="Expresii de timp frecvente"
      card2Intro={<>Acestea sunt expresiile din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Expresii de bază</h3>
            <ul className="ps-mini-list">
              <li><strong>by</strong></li>
              <li><strong>for</strong></li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte expresii utile</h3>
            <ul className="ps-mini-list">
              <li><strong>by the time</strong></li>
              <li><strong>before</strong></li>
              <li><strong>until</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Title="Model util"
      card3Intro={<>Leagă expresiile de timp de ideea de durată + reper viitor.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>They will have been working here <strong>for</strong> ten years <strong>by</strong> next June.</li>
            <li><strong>By the time</strong> they retire, they will have been working there for decades.</li>
            <li>She will have been studying <strong>before</strong> the exam starts.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
