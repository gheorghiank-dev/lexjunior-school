import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import {
  pastPerfectMapPath,
  pastPerfectOverviewPath,
  pastPerfectRoomPath,
} from "../past-perfect-paths.js";

const SECTION_ID = "time-expressions";

export default function PastPerfectTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastPerfectMapPath()}
      backLabel="← Înapoi la harta Past Perfect"
      title="Past Perfect – Expresii de timp"
      lead="Expresiile de timp ale lui Past Perfect arată că o acțiune s-a petrecut înaintea altui moment din trecut."
      card1Title="Indiciile de timp"
      card1Intro={<>Mai întâi, uită-te la ideea generală: există un reper trecut și ceva s-a întâmplat înaintea lui.</>}
      card1Content={
        <div className="rule-box">
          <h3>Indiciile de timp</h3>
          <p className="ps-text">
            Past Perfect apare des cu expresii care arată <strong>ordine</strong>, <strong>anterioritate</strong> sau un <strong>punct-limită în trecut</strong>.
          </p>
        </div>
      }
      card2Title="Expresii frecvente"
      card2Intro={<>Grupează-le pe familii ca să le recunoști mai repede în exerciții.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Ordine / anterioritate</h3>
            <ul className="ps-mini-list">
              <li>before</li>
              <li>after</li>
              <li>when</li>
              <li>by the time</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alți marcatori tipici</h3>
            <ul className="ps-mini-list">
              <li>already</li>
              <li>just</li>
              <li>never</li>
              <li>for / since</li>
              <li>till / until</li>
              <li>by</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Poziție și observații"
      card3Intro={<>La multe dintre ele contează și relația dintre cele două momente trecute.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observații importante</h3>
          <ul className="ps-mini-list">
            <li><strong>before</strong> și <strong>after</strong> arată clar ordinea acțiunilor.</li>
            <li><strong>by</strong> și <strong>by the time</strong> indică un punct până la care acțiunea era deja terminată.</li>
            <li><strong>already</strong> și <strong>just</strong> pot apărea cu Past Perfect pentru a arăta că acțiunea se încheiase deja.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Mergi spre camerele de time expressions pentru a fixa semnalele specifice lui Past Perfect."
      nextStepActions={[
        { to: pastPerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
