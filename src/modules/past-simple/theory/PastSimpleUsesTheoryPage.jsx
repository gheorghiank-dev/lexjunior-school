import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath, pastSimpleOverviewPath, pastSimpleRoomPath } from "../past-paths.js";

const SECTION_ID = "uses";

export default function PastSimpleUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);
  return (
    <TenseUsesTheoryTemplate
      backTo={pastSimpleMapPath()}
      backLabel="← Înapoi la harta Past Simple"
      title="Past Simple – Uses"
      lead="Aici vezi structura standard pentru uses: când folosim Past Simple, care sunt situațiile tipice și cum îl comparăm cu alte timpuri."
      card1Intro={<>Past Simple exprimă, în mod normal, acțiuni și stări <strong>încheiate în trecut</strong>.</>}
      card1Content={<ScaffoldUsesCardOne summary="Folosești Past Simple pentru evenimente terminate, succesiuni de acțiuni trecute și fapte care au fost adevărate într-o perioadă trecută." />}
      card2Intro={<>Acestea sunt cele mai importante familii de uses pentru acest modul.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["acțiuni terminate într-un moment clar din trecut","succesiuni de evenimente trecute","obiceiuri din trecut","stări / situații valabile doar în trecut"]} />}
      card3Intro={<>Cardul 3 rămâne locul pentru contraste și capcane frecvente.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Nu confunda Past Simple cu Past Continuous: unul spune evenimentul, celălalt procesul în desfășurare.","Dacă momentul este clar în trecut, Past Simple este de obicei alegerea de bază.","Verbele regulate și neregulate vor crea multe capcane în exerciții."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses ale modulului Past Simple."
      nextStepActions={[{ to: pastSimpleRoomPath('uses', 1), label: 'Camera 1 – Întrebuințări' },{ to: pastSimpleMapPath(), label: 'Harta modulului' },{ to: pastSimpleOverviewPath(), label: 'Recapitulare / overview' }]}
    />
  );
}
