import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcOverviewPath, pcRoomPath } from "../pc-paths.js";

const SECTION_ID = "time-expressions";

export default function PcTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pcMapPath()}
      backLabel="← Înapoi la harta Present Continuous"
      title="Present Continuous – Expresii de timp"
      lead="Expresiile de timp din jurul lui Present Continuous te ajută să vezi dacă acțiunea se petrece chiar acum, în perioada asta sau ca aranjament apropiat."
      card1Intro={<>Aceste expresii semnalează, de obicei, ideea de <strong>acum</strong>, <strong>temporar</strong> sau <strong>plan apropiat</strong>.</>}
      card1Content={<div className="lj-structure-box ps-structure-box"><p className="ps-text">Cuvinte-cheie frecvente: <strong>now, right now, at the moment, these days, this week, tonight, tomorrow</strong>.</p></div>}
      card2Intro={<>Grupează expresiile în funcție de mesajul lor principal.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Acum / în desfășurare</h3>
            <ul className="ps-mini-list">
              <li>now, right now</li>
              <li>at the moment</li>
              <li>Listen! Look!</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Temporar / viitor apropiat</h3>
            <ul className="ps-mini-list">
              <li>these days, this week</li>
              <li>tonight, tomorrow</li>
              <li>this month, for now</li>
            </ul>
          </div>
        </div>
      }
      card3Intro={<>Unele expresii pot apărea și cu alte timpuri, dar contextul decide sensul.</>}
      card3Content={<div className="rule-box"><h3>Pattern notes</h3><ul className="ps-mini-list"><li><strong>Now / right now</strong> merg foarte bine cu acțiuni în desfășurare.</li><li><strong>Tomorrow / tonight</strong> pot apărea în Present Continuous când vorbești despre un plan deja aranjat.</li><li>Adverbele de frecvență precum <strong>usually</strong> te trimit mai degrabă spre Present Simple.</li></ul></div>}
      nextStepsDescription="Dacă ai prins expresiile de timp, treci la camerele de time expressions."
      nextStepActions={[
        { to: pcRoomPath('time-expressions', 1), label: 'Camera 1 – Expresii de timp' },
        { to: pcMapPath(), label: 'Harta modulului' },
        { to: pcOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
