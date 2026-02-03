import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcAffirmativeRoom6Page() {
  const pageTitle = "Present Continuous – Camera 6";
  const exercises = useMemo(
    () => [
      {
        id: "pc-affirmative-room6-ex1",
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
  } = useRoomEngine({ sectionId: "affirmative", roomNumber: 6, exercises });

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 6"
      sectionLabel="Affirmative"
      theoryRoute={pcTheoryPath("affirmative")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-affirmative-room6-retry-for-key"
    >
      <section className="card">
        <h2 className="card-title">Camera 6 – schelet</h2>
        <p className="card-text">Conținutul final al camerei îl completăm după ce stabilim structura.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-affirmative-room6"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-affirmative-room6-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
