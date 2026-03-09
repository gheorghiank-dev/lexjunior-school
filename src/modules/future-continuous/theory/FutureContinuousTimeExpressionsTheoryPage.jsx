import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futureContinuousMapPath,
  futureContinuousOverviewPath,
  futureContinuousRoomPath,
} from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FutureContinuousTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futureContinuousMapPath()}
      backLabel="← Înapoi la harta Future Continuous"
      title="Future Continuous – Expresii de timp"
      lead="Aici vezi expresiile de timp care apar cel mai des cu Future Continuous și cum te ajută ele să recunoști timpul."
      card1Title="Ideea generală"
      card1Intro={<>Future Continuous apare frecvent cu expresii care fixează un moment clar în viitor.</>}
      card1Content={
        <div className="rule-box">
          <p className="ps-text">
            Aceste expresii arată <strong>momentul viitor de referință</strong> în jurul căruia acțiunea va fi în desfășurare.
          </p>
        </div>
      }
      card2Title="Expresii de timp frecvente"
      card2Intro={<>Acestea sunt expresiile din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Expresii de bază</h3>
            <ul className="ps-mini-list">
              <li><strong>at this time tomorrow</strong></li>
              <li><strong>at 5 o&apos;clock tomorrow</strong></li>
              <li><strong>in 5 years&apos; time</strong></li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Cum le recunoști</h3>
            <ul className="ps-mini-list">
              <li>arată un punct clar în viitor</li>
              <li>de multe ori apar cu <strong>tomorrow</strong> sau cu un moment precis</li>
              <li>accentul cade pe ce se va întâmpla în acel interval</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Model util"
      card3Intro={<>Leagă expresia de timp de ideea de desfășurare.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li><strong>At this time tomorrow</strong>, I will be travelling.</li>
            <li><strong>At 5 o&apos;clock tomorrow</strong>, she will be studying.</li>
            <li><strong>In 5 years&apos; time</strong>, they will be living abroad.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
