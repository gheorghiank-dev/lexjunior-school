import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import { PAST_CONTINUOUS_BASE_PATH, pastContinuousMapPath, pastContinuousRoomPath, pastContinuousOverviewPath } from "../past-continuous-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import { PastContinuousInterrogativeStructureBlock } from "../components/PastContinuousStructureBlocks.jsx";

const SECTION_ID = "interrogative";

export default function PastContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PAST_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Continuous"
      title="Past Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Past Continuous la interogativ."
      section1Intro={<>În Past Continuous, la întrebări aducem <strong>was / were</strong> la începutul propoziției.</>}
      section1Content={<><PastContinuousInterrogativeStructureBlock /><div className="example-box"><h3>Exemple</h3><ul className="ps-list"><li>Was she sleeping?</li><li>Were they running outside?</li><li>Was I talking too loudly?</li></ul></div></>}
      section2Intro={<>Al doilea card păstrează răspunsurile scurte și modelele utile.</>}
      section2Content={<div className="columns-2"><div className="rule-box"><h3>Întrebări-model</h3><ul className="ps-mini-list"><li>Was he doing homework?</li><li>Were you waiting for me?</li><li>Were they working late?</li></ul></div><div className="rule-box"><h3>Răspunsuri scurte</h3><ul className="ps-mini-list"><li>Yes, he was. / No, he wasn&apos;t.</li><li>Yes, I was. / No, I wasn&apos;t.</li><li>Yes, they were. / No, they weren&apos;t.</li></ul></div></div>}
      mistakesIntro={<>Ai grijă la ordinea corectă a cuvintelor și la alegerea lui <strong>was / were</strong>.</>}
      mistakes={[{ wrong: "She was sleeping?", correct: "Was she sleeping?" },{ wrong: "Were he reading?", correct: "Was he reading?" },{ wrong: "Was they playing?", correct: "Were they playing?" }]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pastContinuousMapPath(), label: "Harta modulului" },
        { to: pastContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
