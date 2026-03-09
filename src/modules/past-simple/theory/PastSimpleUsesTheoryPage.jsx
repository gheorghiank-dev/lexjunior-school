import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { pastSimpleMapPath, pastSimpleOverviewPath, pastSimpleRoomPath } from "../past-paths.js";

const SECTION_ID = "uses";

export default function PastSimpleUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastSimpleMapPath()}
      backLabel="← Înapoi la harta Past Simple"
      title="Past Simple – Întrebuințări"
      lead="Past Simple se folosește când vorbim despre acțiuni, stări și situații încheiate în trecut."
      card1Title="Acțiuni și situații încheiate în trecut"
      card1Intro={<>Past Simple răspunde foarte des la întrebarea <strong>When?</strong>, pentru că momentul acțiunii este menționat, cunoscut sau subînțeles din context.</>}
      card1Content={<div className="lj-structure-box ps-structure-box"><p className="ps-text">Ex.: They <strong>went</strong> to the swimming pool <strong>last week</strong>.</p></div>}
      card2Title="Întrebuințări principale"
      card2Intro={<>Acestea sunt cele mai importante situații în care folosim Past Simple.</>}
      card2Content={
        <div className="rule-box">
          <ol className="ps-mini-list">
            <li>o acțiune care a avut loc într-un moment specificat din trecut</li>
            <li>două sau mai multe acțiuni care au avut loc una după alta în trecut</li>
            <li>obiceiuri și stări din trecut care nu mai au loc în prezent</li>
            <li>pentru a vorbi despre viețile oamenilor care nu mai sunt în viață</li>
          </ol>

          <ul className="ps-mini-list" style={{ marginTop: "0.75rem" }}>
            <li>She <strong>opened</strong> the door and <strong>walked</strong> into the room.</li>
            <li>I <strong>took</strong> ballet classes when I was 7 years old.</li>
            <li>My grandfather <strong>was</strong> a gifted priest.</li>
          </ul>
        </div>
      }
      card3Title="Comparații importante"
      card3Intro={<>Past Simple este adesea folosit după ce anunțăm o informație sau după ce cerem o informație în Present Perfect.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li><strong>Present Perfect</strong> anunță o știre; <strong>Past Simple / Past Continuous</strong> dau detalii.</li>
            <li>I have seen John. He <strong>was talking</strong> to Jane.</li>
            <li><strong>Present Perfect</strong> cere informația; <strong>Past Simple / Past Continuous</strong> cer detaliile.</li>
            <li>Have you visited John? — Yes, I have. — <strong>When did</strong> you visit him?</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de întrebuințări ale modulului Past Simple."
      nextStepActions={[
        { to: pastSimpleRoomPath('uses', 1), label: 'Camera 1 – Întrebuințări' },
        { to: pastSimpleMapPath(), label: 'Harta modulului' },
        { to: pastSimpleOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
