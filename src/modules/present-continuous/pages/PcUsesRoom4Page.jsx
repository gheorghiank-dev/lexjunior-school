import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcUsesRoom4Page() {
  const pageTitle = "Present Continuous – Camera 4";
  const exercises = useMemo(
    () => [
      {
        id: "pc-uses-room4-ex1",
        prompt: "Placeholder – vom adăuga exercițiile reale aici.",
        correct: "todo",
      },
    ],
    []
  );

  const {
    roomState,
    answers,
    feedback,
    hudRootRef,
    handleChange,
    handleVerify,
    keyButtonVisible,
    practiceResetVisible,
    startKeyAttempt,
    handlePracticeReset,
  } = useRoomEngine({ sectionId: "uses", roomNumber: 4, exercises });

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 4"
      sectionLabel="Uses"
      theoryRoute={pcTheoryPath("uses")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-uses-room4-retry-for-key"
    >
      <section className="card">
        <h2 className="card-title">Uses – camera 4</h2>
        <p className="card-text">Conținutul final al camerei îl completăm după ce stabilim structura.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-uses-room4"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-uses-room4-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
