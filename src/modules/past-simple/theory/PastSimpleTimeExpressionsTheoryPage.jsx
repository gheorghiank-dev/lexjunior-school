import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath, pastSimpleOverviewPath, pastSimpleRoomPath } from "../past-paths.js";

const SECTION_ID = "time-expressions";

export default function PastSimpleTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);
  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastSimpleMapPath()}
      backLabel="← Înapoi la harta Past Simple"
      title="Past Simple – Time Expressions"
      lead="Expresiile de timp ale lui Past Simple te trimit spre un moment clar în trecut și spre ideea de acțiune încheiată."
      card1Intro={<>Când contextul arată clar că evenimentul este terminat și legat de trecut, Past Simple este foarte probabil.</>}
      card1Content={<ScaffoldTimeCardOne summary="Caută expresii ca yesterday, last week, ago sau in 2019. Ele fixează acțiunea într-un punct trecut și închis." />}
      card2Intro={<>Grupează expresiile după tipul de reper temporal.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{title:'Momente clare în trecut', items:['yesterday','last night','in 2020']},{title:'Distanță față de prezent', items:['two days ago','a week ago','long ago']}]} />}
      card3Intro={<>Și aici există expresii care trebuie citite în context, nu doar memorate mecanic.</>}
      card3Content={<ScaffoldTimeCardThree notes={["while și when nu cer automat Past Simple; contează dacă acțiunea e proces sau eveniment.","ago merge foarte natural cu Past Simple.","just / already / yet apar mai des cu Present Perfect, nu cu Past Simple, în engleza standard britanică."]} />}
      nextStepsDescription="Mergi spre camerele de time expressions pentru a fixa semnalele de trecut."
      nextStepActions={[{ to: pastSimpleRoomPath('time-expressions', 1), label: 'Camera 1 – Expresii de timp' },{ to: pastSimpleMapPath(), label: 'Harta modulului' },{ to: pastSimpleOverviewPath(), label: 'Recapitulare / overview' }]}
    />
  );
}
