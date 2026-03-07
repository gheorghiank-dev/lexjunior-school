import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import { PcInterrogativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "interrogative";

export default function PcInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Present Continuous la interogativ."
      section1Intro={<>În Present Continuous, la întrebări aducem <strong>am / is / are</strong> la începutul propoziției.</>}
      section1Content={<><PcInterrogativeStructureBlock /><div className="example-box"><h3>Exemple</h3><ul className="ps-list"><li>Are you listening to me?</li><li>Is she reading now?</li><li>Are they playing outside?</li></ul></div></>}
      section2Intro={<>Al doilea card păstrează zona pentru răspunsuri scurte și modele utile.</>}
      section2Content={<div className="columns-2"><div className="rule-box"><h3>Întrebări-model</h3><ul className="ps-mini-list"><li>Am I speaking too fast?</li><li>Is he doing his homework?</li><li>Are they waiting for us?</li></ul></div><div className="rule-box"><h3>Răspunsuri scurte</h3><ul className="ps-mini-list"><li>Yes, I am. / No, I&apos;m not.</li><li>Yes, he is. / No, he isn&apos;t.</li><li>Yes, they are. / No, they aren&apos;t.</li></ul></div></div>}
      mistakesIntro={<>Greșelile apar când uităm auxiliarul sau ordinea corectă a cuvintelor.</>}
      mistakes={[
        { wrong: "You are listening?", correct: "Are you listening?" },
        { wrong: "Is reading she now?", correct: "Is she reading now?" },
        { wrong: "Are they play outside?", correct: "Are they playing outside?" },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
