import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import {
  pastContinuousMapPath,
  pastContinuousOverviewPath,
  pastContinuousRoomPath,
} from "../past-continuous-paths.js";

const SECTION_ID = "uses";

export default function PastContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastContinuousMapPath()}
      backLabel="← Înapoi la harta Past Continuous"
      title="Past Continuous – Întrebuințări"
      lead="Past Continuous descrie acțiuni aflate în desfășurare într-un moment din trecut, fundalul unei scene sau două acțiuni paralele."
      card1Intro={<>Îl folosim când vrem să intrăm în <strong>mijlocul unei acțiuni trecute</strong>, nu doar să spunem că ea s-a întâmplat.</>}
      card1Content={<div className="lj-structure-box ps-structure-box"><p className="ps-text">Gândește-te la Past Continuous ca la un „cadru în mișcare” din trecut: <strong>was / were + verb-ing</strong>.</p></div>}
      card2Intro={<>Cele mai importante uses din documentul tău intră în aceste familii.</>}
      card2Content={<div className="columns-2"><div className="example-box"><h3>Întrebuințări principale</h3><ul className="ps-mini-list"><li>acțiune în desfășurare într-un moment precis din trecut</li><li>fundal pentru o altă acțiune: <strong>While I was reading, the phone rang.</strong></li></ul></div><div className="example-box"><h3>Alte întrebuințări</h3><ul className="ps-mini-list"><li>două acțiuni paralele: <strong>She was cooking while I was setting the table.</strong></li><li>descrierea atmosferei / scenei: <strong>The birds were singing and the sun was shining.</strong></li></ul></div></div>}
      card3Intro={<>Compară-l mereu cu Past Simple: unul descrie procesul, celălalt evenimentul principal.</>}
      card3Content={<div className="rule-box"><h3>Compară cu atenție</h3><ul className="ps-mini-list"><li><strong>Past Continuous</strong> = acțiune în curs, fundal, durată.</li><li><strong>Past Simple</strong> = acțiune completă, eveniment principal.</li><li>În propoziții mixte, trecutul simplu întrerupe adesea acțiunea în desfășurare: <strong>I was sleeping when the alarm rang.</strong></li></ul></div>}
      nextStepsDescription="Poți merge acum spre camerele de uses sau poți revedea recapitularea modulului."
      nextStepActions={[
        { to: pastContinuousRoomPath('uses', 1), label: 'Camera 1 – Întrebuințări' },
        { to: pastContinuousMapPath(), label: 'Harta modulului' },
        { to: pastContinuousOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
