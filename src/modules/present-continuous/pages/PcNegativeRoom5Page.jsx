import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcNegativeRoom5Page() {
  const exercises = useMemo(
    () => [
      {
        id: "pc-negative-r5-ex1",
        prompt: "Scrie forma negativă corectă a propoziției date.",
        correct: "todo",
      },
    ],
    []
  );

  const {
    answers,
    feedback,
    roomState,
    hudRootRef,
    handleChange,
    handlePracticeReset,
    handleVerify,
    startKeyAttempt,
    keyButtonVisible,
    practiceResetVisible,
  } = useRoomEngine({ sectionId: "negative", roomNumber: 5, exercises });

  const pageTitle = "Camera 5 – Present Continuous Negative";

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 5"
      sectionLabel="Negative"
      theoryRoute={pcTheoryPath("negative")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-retry-for-key-negative-5"
    >
      <section className="card">
        <h2 className="card-title">Scrie forma negativă corectă</h2>
        <p className="card-text">Exercițiu placeholder – vom adăuga propoziții reale pentru forma negativă.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-negative-room5"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-negative-room5-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
