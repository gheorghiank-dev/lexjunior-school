import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import { ScaffoldNegativeSectionOne, ScaffoldNegativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "negative";

export default function FuturePerfectNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la negativ."
      section1Intro={<>La negativ, păstrăm aceeași schemă de 4 carduri ca la Present Simple.</>}
      section1Content={
        <ScaffoldNegativeSectionOne
          formula="Subiect + will not have + participiul trecut"
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
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
