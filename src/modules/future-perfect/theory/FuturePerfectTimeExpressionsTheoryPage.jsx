import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectMapPath,
  futurePerfectOverviewPath,
  futurePerfectRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "time-expressions";

export default function FuturePerfectTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Expresii de timp"
      lead="Aici vezi expresiile de timp care apar cel mai des cu Future Perfect și cum te ajută ele să recunoști timpul."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect apare frecvent cu expresii care arată un termen-limită sau un punct clar din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce arată aceste expresii">
          <p className="ps-text">
            Aceste expresii indică <strong>momentul până la care</strong> o acțiune va fi deja terminată.
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
              <li><strong>by the time</strong></li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte expresii utile</h3>
            <ul className="ps-mini-list">
              <li><strong>before</strong></li>
              <li><strong>until</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Title="Model util"
      card3Intro={<>Leagă expresia de timp de ideea de finalizare.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li><strong>By next Friday</strong>, they will have finished their project.</li>
            <li><strong>By the time</strong> you arrive, I will have cleaned the house.</li>
            <li>I will have done my homework <strong>before</strong> dinner.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
