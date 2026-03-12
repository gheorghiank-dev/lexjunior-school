import { useEffect, useMemo, useRef, useState } from "react";
// ✅ INSEREAZĂ AICI (sus, lângă celelalte importuri):
import { getAcceptedAnswerVariants } from "../validation/getAcceptedAnswerVariants.js";
/**
 * Factory for a tense-agnostic room engine hook.
 *
 * We keep the hook API identical across tenses:
 *   useRoomEngine({ sectionId, roomNumber, exercises })
 *
 * The caller injects:
 * - normalizeAnswer: function
 * - progressManager: object (getRoomState, setFirstAttempt, recordAttempt, grantKey, resetRoom)
 * - HUD: class
 *
 * This lets us share the engine without coupling it to Present Simple.
 */
export function createUseRoomEngine({
  normalizeAnswer,
  progressManager,
  HUD,
  onRoomStatePersist,
}) {
  return function useRoomEngine({
    sectionId,
    roomNumber,
    exercises,
    validationPolicy,
    validationFamily,
  }) {
    // răspunsurile elevului, indexate după id-ul exercițiului
    const [answers, setAnswers] = useState(() => {
      const initial = {};
      for (const ex of exercises) {
        initial[ex.id] = "";
      }
      return initial;
    });

    const [feedback, setFeedback] = useState({});
    const [lastResult, setLastResult] = useState(null);

    // stare globală a camerei (din progressManager)
    const [roomState, setRoomState] = useState({
      firstAttemptScore: null,
      passed: false,
      hasKey: false,
    });

    // runda de "Reîncearcă pentru cheie"
    const [isKeyRun, setIsKeyRun] = useState(false);
    const [keyRunFirstAttempt, setKeyRunFirstAttempt] = useState(null);

    // resetăm starea locală când se schimbă camera (ex: Camera 1 → Camera 2)
    // astfel încât HUD-ul și foaia de lucru să nu "care" progresul din camera anterioară.
    useEffect(() => {
      const resetAnswers = {};
      for (const ex of exercises) {
        resetAnswers[ex.id] = "";
      }

      setAnswers(resetAnswers);
      setFeedback({});
      setLastResult(null);
      setIsKeyRun(false);
      setKeyRunFirstAttempt(null);
      setAutoFillLocked(false);
    }, [sectionId, roomNumber, exercises]);

    // flag de sesiune: dacă elevul a apăsat "Resetează pentru exersare",
    // nu mai auto-umplem camera cu răspunsurile corecte în aceeași sesiune.
    const [autoFillLocked, setAutoFillLocked] = useState(false);

    const hudRootRef = useRef(null);
    const hudInstanceRef = useRef(null);

    const normalize = (value) => normalizeAnswer(value ?? "");

    // inițializare progress + HUD
    useEffect(() => {
      try {
        const state = progressManager.getRoomState(sectionId, roomNumber);
        setRoomState(state);
      } catch (err) {
        console.warn("Progress manager init failed", err);
      }

      if (hudRootRef.current) {
        hudInstanceRef.current = new HUD(hudRootRef.current);
      }
    }, [sectionId, roomNumber]);

    // sincronizăm HUD-ul cu roomState + lastResult + runda de cheie
    useEffect(() => {
      const hud = hudInstanceRef.current;
      if (!hud) return;

      let basePercent = 0;

      if (isKeyRun) {
        // 🔑 Runda "Reîncearcă pentru cheie"
        if (keyRunFirstAttempt !== null) {
          // prima verificare din runda de cheie rămâne "amintirea" pentru piechart
          basePercent = keyRunFirstAttempt;
        } else {
          // înainte de prima verificare în runda de cheie – cerc gol
          basePercent = 0;
        }
      } else {
        // 🌱 Runda normală (învățare)
        if (typeof roomState.firstAttemptScore === "number") {
          // dacă avem firstAttempt salvat, el dictează piechart-ul
          basePercent = roomState.firstAttemptScore;
        } else if (lastResult && typeof lastResult.percent === "number") {
          // prima verificare absolută – până sincronizăm firstAttempt din progressManager
          basePercent = lastResult.percent;
        }

        // hack-ul vizual: dacă cheia a fost obținută dintr-o runda de cheie cu 100%,
        // dar firstAttemptScore inițial a fost <100, vrem să afișăm 100% ca progres final.
        if (
          roomState.hasKey &&
          (typeof roomState.firstAttemptScore !== "number" ||
            roomState.firstAttemptScore < 100)
        ) {
          basePercent = 100;
        }
      }

      hud.setProgress(basePercent || 0);
      hud.setKeyState({
        hasKey: !!roomState.hasKey,
        passed: !!roomState.passed,
      });

      // mesaje simple, aliniate cu starea curentă
      if (lastResult) {
        if (lastResult.percent === 100) {
          hud.showMessage(
            "Bravo! Ai terminat corect această cameră.",
            "success",
          );
        } else {
          hud.showMessage(
            "Mai ai câteva răspunsuri de ajustat – verifică ce este marcat cu roșu.",
            "info",
          );
        }
      } else if (roomState.hasKey) {
        hud.showMessage(
          "Cheia pentru această cameră este deja obținută.",
          "success",
        );
      } else if (roomState.passed) {
        hud.showMessage(
          "Ai trecut deja de această cameră. Poți reîncerca pentru cheie când vrei.",
          "info",
        );
      } else {
        hud.showMessage("", "info");
      }
    }, [roomState, lastResult, keyRunFirstAttempt, isKeyRun]);

    /**
     * Auto-fill pentru camerele care AU cheia:
     *
     * Dacă:
     * - camera are cheia (roomState.hasKey === true)
     * - nu suntem într-o runda de cheie (isKeyRun === false)
     * - nu avem "foaie activă" (answers goale, feedback gol, lastResult null)
     * - NU am apăsat "Resetează pentru exersare" în această sesiune (autoFillLocked === false)
     *
     * Atunci:
     * - umplem answers cu ex.correct
     * - marcăm feedback[ex.id] = "correct"
     *
     * Nu setăm lastResult aici, HUD știe deja că există cheia.
     * La re-intrare în cameră (altă sesiune), autoFillLocked revine false,
     * deci camera cu cheie se deschide din nou în modul "rezolvată".
     */
    useEffect(() => {
      if (!roomState.hasKey) return;
      if (isKeyRun) return;
      if (autoFillLocked) return;

      // verificăm dacă avem deja o foaie activă
      let hasAnyAnswer = false;
      for (const ex of exercises) {
        const v = answers[ex.id];
        if (v != null && String(v).trim() !== "") {
          hasAnyAnswer = true;
          break;
        }
      }

      const hasAnyFeedback =
        feedback && Object.keys(feedback).some((k) => feedback[k] != null);

      if (hasAnyAnswer || hasAnyFeedback || lastResult !== null) {
        // deja există lucru pe foaie, nu facem auto-fill
        return;
      }

      const filledAnswers = {};
      const filledFeedback = {};
      for (const ex of exercises) {
        filledAnswers[ex.id] = Array.isArray(ex.correct)
          ? ex.correct[0]
          : ex.correct;
        filledFeedback[ex.id] = "correct";
      }

      setAnswers(filledAnswers);
      setFeedback(filledFeedback);
      // lastResult rămâne null – HUD se ocupă de mesaj
    }, [
      roomState.hasKey,
      isKeyRun,
      autoFillLocked,
      answers,
      feedback,
      lastResult,
      exercises,
    ]);

    function handleChange(id, value) {
      setAnswers((prev) => ({
        ...prev,
        [id]: value,
      }));
      setFeedback((prev) => ({
        ...prev,
        [id]: null,
      }));
    }

    /**
     * Pornește runda de "Reîncearcă pentru cheie".
     */
    function startKeyAttempt() {
      if (!roomState.passed || roomState.hasKey) return;

      setIsKeyRun(true);
      setKeyRunFirstAttempt(null);

      const reset = {};
      for (const ex of exercises) {
        reset[ex.id] = "";
      }
      setAnswers(reset);
      setFeedback({});
      setLastResult(null);
    }

    function handleVerify(customAnswers) {
      const sourceAnswers = customAnswers ?? answers;

      let correct = 0;
      const newFeedback = {};

      for (const ex of exercises) {
        const rawAnswer = sourceAnswers[ex.id] ?? "";
        const got = normalize(rawAnswer);

        // ✅ AICI SE SCHIMBĂ: calculăm lista de variante acceptate (deja normalizate)
        const accepted = getAcceptedAnswerVariants({
          correct: ex.correct,
          normalizeFn: normalize, // folosim normalize-ul EXISTENT, nu îl modificăm
          policy: validationPolicy,
          family: validationFamily,
        });

        const isCorrect =
          accepted.length > 0 && got.length > 0 && accepted.includes(got);

        if (isCorrect) {
          correct += 1;
        }
        newFeedback[ex.id] = isCorrect ? "correct" : "incorrect";
      }

      const total = exercises.length;
      const percent = total ? Math.round((correct / total) * 100) : 0;
      const hasErrors = correct !== total;

      const result = { correct, total, percent, hasErrors };
      setFeedback(newFeedback);
      setLastResult(result);

      let nextState = roomState;

      if (isKeyRun) {
        // 🔑 Suntem într-o runda specială, "Reîncearcă pentru cheie"
        if (keyRunFirstAttempt === null) {
          // prima apăsare de "Verifică" în runda de cheie
          setKeyRunFirstAttempt(percent);

          if (percent === 100) {
            // doar dacă first attempt din runda de cheie este 100% acordăm cheia
            try {
              nextState = progressManager.grantKey(sectionId, roomNumber);

              if (onRoomStatePersist) {
                Promise.resolve(
                  onRoomStatePersist({
                    sectionId,
                    roomNumber,
                    roomState: nextState,
                  }),
                ).catch((err) => {
                  console.warn("Room state persist (key-run) failed", err);
                });
              }
            } catch (err) {
              console.warn("Grant key (key-run) failed", err);
            }
          } else {
            // nu modificăm progresul camerei
            nextState = roomState;
          }
        } else {
          // verificări ulterioare în aceeași rundă de cheie nu afectează progresul
          nextState = roomState;
        }
      } else {
        // 🌱 Rundă normală (prima dată când elevul rezolvă camera)
        if (roomState.firstAttemptScore === null) {
          // prima verificare absolută – setăm firstAttempt
          try {
            nextState = progressManager.setFirstAttempt(
              sectionId,
              roomNumber,
              percent,
            );

            if (onRoomStatePersist) {
              Promise.resolve(
                onRoomStatePersist({
                  sectionId,
                  roomNumber,
                  roomState: nextState,
                }),
              ).catch((err) => {
                console.warn("Room state persist (first attempt) failed", err);
              });
            }
          } catch (err) {
            console.warn("Set first attempt failed", err);
          }

          // dacă first attempt-ul este deja 100% → acordăm cheia direct
          if (percent === 100 && !nextState.hasKey) {
            try {
              nextState = progressManager.grantKey(sectionId, roomNumber);

              if (onRoomStatePersist) {
                Promise.resolve(
                  onRoomStatePersist({
                    sectionId,
                    roomNumber,
                    roomState: nextState,
                  }),
                ).catch((err) => {
                  console.warn(
                    "Room state persist (grant key on first attempt) failed",
                    err,
                  );
                });
              }
            } catch (err) {
              console.warn("Grant key on first attempt failed", err);
            }
          }
        } else {
          // verificări ulterioare – doar marcăm camera ca "passed" când e cazul
          try {
            nextState = progressManager.recordAttempt(
              sectionId,
              roomNumber,
              percent,
            );

            if (onRoomStatePersist) {
              Promise.resolve(
                onRoomStatePersist({
                  sectionId,
                  roomNumber,
                  roomState: nextState,
                }),
              ).catch((err) => {
                console.warn("Room state persist (record attempt) failed", err);
              });
            }
          } catch (err) {
            console.warn("Record attempt failed", err);
          }
        }
      }

      setRoomState(nextState);
    }

    /**
     * Dev – Autofill:
     * - completează răspunsurile cu cele corecte
     * - NU modifică roomState / HUD / localStorage
     */
    function handleDevAutofill() {
      const filled = {};
      for (const ex of exercises) {
        filled[ex.id] = ex.correct;
      }

      setAnswers(filled);
      setFeedback({});
    }

    /**
     * Dev – Reset:
     * - resetează progresul camerei în progressManager
     */
    function handleDevReset() {
      try {
        const newState = progressManager.resetRoom(sectionId, roomNumber);
        setRoomState(newState);
      } catch (err) {
        console.warn("Progress reset failed", err);
      }

      const reset = {};
      for (const ex of exercises) {
        reset[ex.id] = "";
      }
      setAnswers(reset);
      setFeedback({});
      setLastResult(null);
      setIsKeyRun(false);
      setKeyRunFirstAttempt(null);
      setAutoFillLocked(false);
    }

    /**
     * Practice reset (Resetează pentru exersare):
     * - NU atinge progressManager / roomState
     */
    function handlePracticeReset() {
      const reset = {};
      for (const ex of exercises) {
        reset[ex.id] = "";
      }
      setAnswers(reset);
      setFeedback({});
      setLastResult(null);
      setIsKeyRun(false);
      setKeyRunFirstAttempt(null);
      setAutoFillLocked(true);
    }

    // Butonul "Reîncearcă pentru cheie" devine vizibil doar dacă:
    // - camera este passed
    // - cheia NU este obținută
    const keyButtonVisible = useMemo(
      () => roomState.passed && !roomState.hasKey,
      [roomState],
    );

    // Butonul "Resetează pentru exersare" devine vizibil doar dacă:
    // - camera are cheia (hasKey === true)
    const practiceResetVisible = roomState.hasKey;

    return {
      answers,
      feedback,
      lastResult,
      roomState,
      isKeyRun,
      keyButtonVisible,
      practiceResetVisible,
      hudRootRef,
      handleChange,
      handleVerify,
      startKeyAttempt,
      handleDevAutofill,
      handleDevReset,
      handlePracticeReset,
    };
  };
}
