import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath, pastSimpleOverviewPath, pastSimpleRoomPath } from "../past-paths.js";

const SECTION_ID = "time-expressions";

export default function PastSimpleTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);
  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastSimpleMapPath()}
      backLabel="← Înapoi la harta Past Simple"
      title="Past Simple – Expresii de timp"
      lead="Expresiile de timp ale lui Past Simple trimit spre un moment clar și încheiat în trecut."
      card1Title="Indici de timp"
      card1Intro={<>Când vezi expresii care fixează acțiunea într-un moment trecut, Past Simple devine alegerea naturală.</>}
      card1Content={<div className="lj-structure-box ps-structure-box"><p className="ps-text">Caută expresii precum <strong>yesterday</strong>, <strong>last week</strong>, <strong>ago</strong> sau <strong>in 1786</strong>.</p></div>}
      card2Title="Expresii de timp frecvente"
      card2Intro={<>Grupează-le după tipul de reper temporal. Asta te ajută să le recunoști mai ușor în exerciții.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Momente clare în trecut</h3>
            <ul className="ps-mini-list">
              <li>yesterday</li>
              <li>last week / month / year / Monday</li>
              <li>in 1786</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Distanță față de prezent</h3>
            <ul className="ps-mini-list">
              <li>2 days ago</li>
              <li>3 months ago</li>
              <li>5 years ago</li>
              <li>when, then</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Pattern notes"
      card3Intro={<>Nu memora doar expresia. Uită-te și la rolul ei în propoziție.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>Aceste expresii arată că acțiunea este <strong>încheiată</strong> și legată de trecut.</li>
            <li><strong>When</strong> apare des în întrebări despre momentul acțiunii.</li>
            <li><strong>Then</strong> ajută frecvent la redarea unei succesiuni de evenimente în trecut.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Mergi spre camerele de time expressions pentru a fixa semnalele de trecut."
      nextStepActions={[
        { to: pastSimpleRoomPath('time-expressions', 1), label: 'Camera 1 – Expresii de timp' },
        { to: pastSimpleMapPath(), label: 'Harta modulului' },
        { to: pastSimpleOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
