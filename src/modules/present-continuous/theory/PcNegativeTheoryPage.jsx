import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import { PcNegativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "negative";

export default function PcNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Present Continuous la negativ."
      section1Intro={<>În Present Continuous, la negativ folosim <strong>am / is / are + not + verb-ing</strong>.</>}
      section1Content={<><PcNegativeStructureBlock /><div className="example-box"><h3>Exemple</h3><ul className="ps-list"><li>I am not sleeping now.</li><li>She isn&apos;t watching TV.</li><li>They aren&apos;t doing homework.</li></ul></div></>}
      section2Intro={<>În acest card păstrăm diferența dintre formele lungi și formele scurte.</>}
      section2Content={<div className="columns-2"><div className="rule-box"><h3>Forme lungi</h3><ul className="ps-mini-list"><li>I am not</li><li>He / She / It is not</li><li>We / You / They are not</li></ul></div><div className="rule-box"><h3>Forme scurte</h3><ul className="ps-mini-list"><li>I&apos;m not</li><li>He isn&apos;t / She isn&apos;t / It isn&apos;t</li><li>We aren&apos;t / You aren&apos;t / They aren&apos;t</li></ul></div></div>}
      mistakesIntro={<>Ai grijă să păstrezi verbul principal cu <strong>-ing</strong> și să nu uiți de <strong>to be</strong>.</>}
      mistakes={[
        { wrong: "She not watching TV.", correct: "She is not watching TV." },
        { wrong: "They aren&apos;t play football.", correct: "They aren&apos;t playing football." },
        { wrong: "I amn&apos;t reading.", correct: "I&apos;m not reading." },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
