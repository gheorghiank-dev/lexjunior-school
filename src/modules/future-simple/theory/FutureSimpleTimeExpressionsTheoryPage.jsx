import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futureSimpleMapPath,
  futureSimpleOverviewPath,
  futureSimpleRoomPath,
} from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FutureSimpleTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futureSimpleMapPath()}
      backLabel="← Înapoi la harta Future Simple"
      title="Future Simple – Expresii de timp"
      lead="Expresiile de timp ale lui Future Simple trimit spre viitor sau apar în contexte de predicție și planificare."
      card1Title="Indiciile de timp"
      card1Intro={<>Mai întâi, uită-te la ideea generală: expresiile de timp arată că acțiunea se va petrece după momentul vorbirii.</>}
      card1Content={
        <div className="rule-box">
          <h3>Indiciile de timp</h3>
          <p className="ps-text">
            Future Simple apare des cu marcatori de viitor precum <strong>tomorrow</strong>, <strong>next...</strong> și <strong>in + perioadă de timp</strong>.
          </p>
        </div>
      }
      card2Title="Expresii frecvente"
      card2Intro={<>Grupează-le pe familii ca să le recunoști mai repede în exerciții.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Marcatori de viitor</h3>
            <ul className="ps-mini-list">
              <li>tomorrow</li>
              <li>the day after tomorrow</li>
              <li>tonight</li>
              <li>soon</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alți marcatori tipici</h3>
            <ul className="ps-mini-list">
              <li>next week / month / year</li>
              <li>in a week / month / year</li>
              <li>I think / perhaps / probably / certainly</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Propoziții de timp și condiționale"
      card3Intro={<>Aici este capcana care contează cel mai mult.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observații importante</h3>
          <ul className="ps-mini-list">
            <li>nu folosim <strong>will</strong> în propozițiile de timp după <strong>when, before, after, until, as soon as, by the time</strong></li>
            <li>nu folosim <strong>will</strong> în propozițiile condiționale după <strong>if, unless, whether, as long as</strong></li>
            <li>în locul lui <strong>will</strong> folosim un timp de prezent, în funcție de context</li>
          </ul>
        </div>
      }
      nextStepsDescription="Mergi spre camerele de time expressions pentru a fixa semnalele specifice lui Future Simple."
      nextStepActions={[
        { to: futureSimpleRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
