import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { pastPerfectContinuousMapPath, pastPerfectContinuousOverviewPath, pastPerfectContinuousRoomPath } from "../past-perfect-continuous-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "time-expressions";

export default function PastPerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Past Perfect Continuous"
      title="Past Perfect Continuous – Expresii de timp"
      lead="Expresiile de timp care apar frecvent cu Past Perfect Continuous și cum te ajută ele să recunoști timpul."
      card1Intro={<>Uită-te mai întâi la expresiile care arată durată sau un punct de referință în trecut.</>}
      card1Content={
        <TenseStructureBox title="Expresii-cheie">
          <ul className="ps-list">
            <li><strong>how long</strong></li>
            <li><strong>for</strong></li>
            <li><strong>since</strong></li>
            <li><strong>before</strong></li>
            <li><strong>till / until</strong></li>
          </ul>
        </TenseStructureBox>
      }
      card2Intro={<>Grupează-le logic. Așa le recunoști mai ușor în propoziții.</>}
      card2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Expresii de durată</h3>
            <ul className="ps-mini-list">
              <li><strong>how long</strong></li>
              <li><strong>for</strong></li>
              <li><strong>since</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Puncte de referință în trecut</h3>
            <ul className="ps-mini-list">
              <li><strong>before</strong></li>
              <li><strong>till / until</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Intro={<>Cardul acesta îți arată ideea pe care trebuie să o vezi imediat.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observație importantă</h3>
          <p className="ps-text">
            Când vezi aceste expresii, gândește-te la o acțiune care <strong>se desfășura o perioadă de timp</strong> înaintea unui alt moment din trecut.
          </p>
          <p className="ps-text">
            <strong>Past Perfect Continuous</strong> este echivalentul trecut pentru <strong>Present Perfect Continuous</strong>.
          </p>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
