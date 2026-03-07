import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { PRESENT_PERFECT_CONTINUOUS_BASE_PATH, presentPerfectContinuousMapPath, presentPerfectContinuousRoomPath, presentPerfectContinuousOverviewPath } from "../present-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import { ScaffoldNegativeSectionOne, ScaffoldNegativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "negative";

export default function PresentPerfectContinuousNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect Continuous"
      title="Present Perfect Continuous – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect Continuous la negativ."
      section1Intro={<>La negativ, păstrăm aceeași schemă de 4 carduri ca la Present Simple.</>}
      section1Content={
        <ScaffoldNegativeSectionOne
          formula="Subiect + have / has not been + verb-ing"
          examples={[
            "Example 1 – negative placeholder.",
            "Example 2 – negative placeholder.",
            "Example 3 – negative placeholder.",
          ]}
        />
      }
      section2Intro={<>Al doilea card explică formele lungi, formele scurte și observațiile utile pentru exerciții.</>}
      section2Content={
        <ScaffoldNegativeSectionTwo
          longForm={["long form 1", "long form 2"]}
          shortForm={["short form 1", "short form 2"]}
          notes={["verbul principal păstrează forma corectă", "auxiliarul se schimbă după regulile timpului"]}
        />
      }
      mistakesIntro={<>Aici păstrăm aceeași zonă vizuală pentru greșeli frecvente.</>}
      mistakes={[
        { wrong: "Wrong negative example 1.", correct: "Correct negative example 1." },
        { wrong: "Wrong negative example 2.", correct: "Correct negative example 2." },
        { wrong: "Wrong negative example 3.", correct: "Correct negative example 3." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
