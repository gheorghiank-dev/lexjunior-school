import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  PS_BASE_PATH,
  psMapPath,
  psOverviewPath,
  psRoomPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import {
  PRESENT_SIMPLE_USES_TITLES,
  PsUsesStructureBlock,
} from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PsUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID).catch((err) => {
      console.error("Failed to mark uses theory as completed:", err);
    });
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={psMapPath()}
      backLabel="← Înapoi la harta Present Simple"
      title="Present Simple – Întrebuințări"
      lead="Aici vezi clar când folosim Present Simple și cum recunoști situațiile în care el exprimă rutină, adevăr general, program fix sau stare stabilă."
      card1Intro={
        <>
          Present Simple exprimă lucruri care sunt{" "}
          <strong>adevărate în general</strong> sau se repetă în mod obișnuit.
        </>
      }
      card1Content={<PsUsesStructureBlock />}
      card2Intro={
        <>
          Mai jos ai cele mai importante întrebuințări ale timpului, în exact
          aceeași ordine pe care o vei regăsi și în exerciții.
        </>
      }
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Primele două uses</h3>
            <ul className="ps-mini-list">
              <li>
                <strong>1.</strong> {PRESENT_SIMPLE_USES_TITLES[0]} – routine,
                habits, repeated actions.
              </li>
              <li>
                <strong>2.</strong> {PRESENT_SIMPLE_USES_TITLES[1]} – facts,
                laws of nature, things generally true.
              </li>
              <li>I usually get up at 7. / Water boils at 100°C.</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Următoarele două uses</h3>
            <ul className="ps-mini-list">
              <li>
                <strong>3.</strong> {PRESENT_SIMPLE_USES_TITLES[2]} – timetables
                and fixed schedules.
              </li>
              <li>
                <strong>4.</strong> {PRESENT_SIMPLE_USES_TITLES[3]} – permanent
                situations and stable states.
              </li>
              <li>The train leaves at 6:30. / She lives in Brașov.</li>
            </ul>
          </div>
        </div>
      }
      card3Intro={
        <>
          Aici este locul unde elevii confundă cel mai des Present Simple cu
          Present Continuous.
        </>
      }
      card3Content={
        <div className="rule-box">
          <h3>Compare carefully</h3>
          <ul className="ps-mini-list">
            <li>
              Folosește <strong>Present Simple</strong> pentru obiceiuri și
              fapte generale, nu pentru acțiuni care se întâmplă chiar acum.
            </li>
            <li>
              <strong>I play tennis on Saturdays</strong> exprimă o rutină, dar{" "}
              <strong>I am playing tennis now</strong> exprimă o acțiune în
              desfășurare.
            </li>
            <li>
              Programele fixe și orarele merg tot cu Present Simple:{" "}
              <strong>The lesson starts at 8.</strong>
            </li>
          </ul>
        </div>
      }
      nextStepsDescription="Ai înțeles când folosim Present Simple. Acum poți merge spre camerele de uses sau poți recapitula structura generală a modulului."
      nextStepActions={[
        { to: psRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: psMapPath(), label: "Harta modulului" },
        { to: psOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
