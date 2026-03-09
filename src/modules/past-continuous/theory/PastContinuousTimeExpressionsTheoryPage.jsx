import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import {
  pastContinuousMapPath,
  pastContinuousOverviewPath,
  pastContinuousRoomPath,
} from "../past-continuous-paths.js";

const SECTION_ID = "time-expressions";

export default function PastContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastContinuousMapPath()}
      backLabel="← Înapoi la harta Past Continuous"
      title="Past Continuous – Expresii de timp"
      lead="Expresiile de timp ale lui Past Continuous trimit spre un moment din trecut, o durată în desfășurare sau un contrast cu o acțiune scurtă din Past Simple."
      card1Intro={<>Când vezi un reper clar în trecut și ideea de desfășurare, Past Continuous devine foarte probabil.</>}
      card1Content={<div className="lj-structure-box ps-structure-box"><p className="ps-text">Semnale frecvente: <strong>at 5 o'clock yesterday, last night, all day yesterday, while, when, as</strong>.</p></div>}
      card2Intro={<>Organizează expresiile în funcție de rolul lor în propoziție.</>}
      card2Content={<div className="columns-2"><div className="example-box"><h3>Momente / durate</h3><ul className="ps-mini-list"><li>at 7 p.m. yesterday</li><li>all morning, all evening</li><li>this time yesterday</li></ul></div><div className="example-box"><h3>Legături între acțiuni</h3><ul className="ps-mini-list"><li>while / as + Past Continuous</li><li>when + Past Simple</li><li>Ex.: While I was studying, my brother was watching TV.</li></ul></div></div>}
      card3Intro={<>Cuvintele <strong>while</strong> și <strong>when</strong> sunt cele mai importante aici.</>}
      card3Content={<div className="rule-box"><h3>Observații utile</h3><ul className="ps-mini-list"><li><strong>while / as</strong> introduc frecvent acțiunea mai lungă, în desfășurare.</li><li><strong>when</strong> introduce des acțiunea scurtă care întrerupe.</li><li><strong>This time yesterday</strong> este un semnal clasic pentru Past Continuous.</li></ul></div>}
      nextStepsDescription="Acum poți exersa expresiile de timp din Past Continuous în camerele modulului."
      nextStepActions={[
        { to: pastContinuousRoomPath('time-expressions', 1), label: 'Camera 1 – Expresii de timp' },
        { to: pastContinuousMapPath(), label: 'Harta modulului' },
        { to: pastContinuousOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
