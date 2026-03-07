import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import { PAST_CONTINUOUS_BASE_PATH, pastContinuousMapPath, pastContinuousRoomPath, pastContinuousOverviewPath } from "../past-continuous-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import { PastContinuousNegativeStructureBlock } from "../components/PastContinuousStructureBlocks.jsx";

const SECTION_ID = "negative";

export default function PastContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PAST_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Continuous"
      title="Past Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Past Continuous la negativ."
      section1Intro={<>În Past Continuous, la negativ folosim <strong>was / were + not + verb-ing</strong>.</>}
      section1Content={<><PastContinuousNegativeStructureBlock /><div className="example-box"><h3>Exemple</h3><ul className="ps-list"><li>I was not sleeping.</li><li>He wasn&apos;t reading.</li><li>They weren&apos;t studying.</li></ul></div></>}
      section2Intro={<>În al doilea card păstrăm formele lungi și formele scurte.</>}
      section2Content={<div className="columns-2"><div className="rule-box"><h3>Forme lungi</h3><ul className="ps-mini-list"><li>I / He / She / It was not</li><li>We / You / They were not</li></ul></div><div className="rule-box"><h3>Forme scurte</h3><ul className="ps-mini-list"><li>wasn&apos;t</li><li>weren&apos;t</li><li>verbul principal rămâne cu -ing</li></ul></div></div>}
      mistakesIntro={<>Atenție la alegerea corectă între <strong>was</strong> și <strong>were</strong>.</>}
      mistakes={[{ wrong: "She weren&apos;t studying.", correct: "She wasn&apos;t studying." },{ wrong: "They wasn&apos;t playing.", correct: "They weren&apos;t playing." },{ wrong: "He was not read.", correct: "He was not reading." }]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pastContinuousMapPath(), label: "Harta modulului" },
        { to: pastContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
