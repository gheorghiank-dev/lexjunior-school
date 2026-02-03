import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcInterrogativeRoom2Page() {
  const exercises = useMemo(
    () => [
      {
        id: "pc-interrogative-r2-ex1",
        prompt: "Scrie forma interogativă corectă a propoziției date.",
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
  } = useRoomEngine({ sectionId: "interrogative", roomNumber: 2, exercises });

  const pageTitle = "Camera 2 – Present Continuous Interrogative";

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 2"
      sectionLabel="Interrogative"
      theoryRoute={pcTheoryPath("interrogative")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-retry-for-key-interrogative-2"
    >
      <section className="card">
        <h2 className="card-title">Scrie forma interogativă corectă</h2>
        <p className="card-text">Exercițiu placeholder – vom adăuga întrebări reale în Present Continuous.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-interrogative-room2"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-interrogative-room2-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
