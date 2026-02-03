import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcTimeExpressionsRoom3Page() {
  const pageTitle = "Present Continuous – Camera 3";
  const exercises = useMemo(
    () => [
      {
        id: "pc-time-expressions-room3-ex1",
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
  } = useRoomEngine({ sectionId: "time-expressions", roomNumber: 3, exercises });

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 3"
      sectionLabel="Time Expressions"
      theoryRoute={pcTheoryPath("time-expressions")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-time-expressions-room3-retry-for-key"
    >
      <section className="card">
        <h2 className="card-title">Time expressions – camera 3</h2>
        <p className="card-text">Conținutul final al camerei îl completăm după ce stabilim structura.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-time-expressions-room3"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-time-expressions-room3-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
