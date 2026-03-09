import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectMapPath, presentPerfectOverviewPath, presentPerfectRoomPath } from "../present-paths.js";

const SECTION_ID = "time-expressions";

export default function PresentPerfectTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={presentPerfectMapPath()}
      backLabel="← Înapoi la harta Present Perfect"
      title="Present Perfect – Expresii de timp"
      lead="Expresiile de timp ale lui Present Perfect leagă trecutul de prezent sau arată că perioada de timp nu s-a încheiat încă."
      card1Title="Indiciile de timp"
      card1Intro={<>Mai întâi, uită-te la ideea generală: timpul se leagă de acum.</>}
      card1Content={
        <div className="rule-box">
          <h3>Indiciile de timp</h3>
          <p className="ps-text">
            Present Perfect apare des cu expresii care arată <strong>durata</strong>, <strong>momentul de început</strong>, <strong>experiența</strong> sau o perioadă de timp încă deschisă.
          </p>
        </div>
      }
      card2Title="Expresii frecvente"
      card2Intro={<>Grupează-le pe familii ca să le recunoști mai repede în exerciții.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Durată / perioadă neîncheiată</h3>
            <ul className="ps-mini-list">
              <li>How long...?</li>
              <li>for</li>
              <li>since</li>
              <li>lately</li>
              <li>recently</li>
              <li>today / this morning / this week / this month / this year</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Marcatori tipici</h3>
            <ul className="ps-mini-list">
              <li>already</li>
              <li>yet</li>
              <li>just</li>
              <li>always</li>
              <li>ever / never</li>
              <li>so far / still</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Poziție și observații"
      card3Intro={<>La multe dintre ele contează și poziția în propoziție.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observații importante</h3>
          <ul className="ps-mini-list">
            <li><strong>already</strong>, <strong>just</strong>, <strong>always</strong>, <strong>never</strong> stau de obicei între auxiliar și verbul principal.</li>
            <li><strong>yet</strong> și <strong>so far</strong> apar de obicei la final.</li>
            <li><strong>ever</strong> apare de obicei în întrebări.</li>
            <li><strong>still</strong> apare în propoziții negative înaintea auxiliarului.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Mergi spre camerele de time expressions pentru a fixa semnalele specifice lui Present Perfect."
      nextStepActions={[
        { to: presentPerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
