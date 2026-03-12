import React, { useEffect, useRef, useState } from "react";
import { TenseRoomPageShell } from "./TenseRoomPageShell.jsx";
import { TenseRoomDevToolsAndStatus } from "./TenseRoomDevToolsAndStatus.jsx";
import TenseLexBubble from "./TenseLexBubble.jsx";
import { TenseMiniDictionaryCard } from "./TenseMiniDictionaryCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { normalizeAnswer } from "../../../core/room-engine/normalize-answer.js";
import { isSchoolMode } from "../../../modes/mode-registry.js";
import "../../../styles/badge.css";
import "../../../styles/exercises/base.css";
import "../../../styles/components/lex-voice-btn.css";
import "../../../styles/exercises/pairs.css";

/**
 * Global badge room for any tense.
 *
 * Props:
 * - tenseName: string (e.g. "Present Simple")
 * - sectionId: string (usually "badge")
 * - roomNumber: number (usually 1)
 * - theoryRoute: string (route to theory page)
 * - mapRoute: string (route to map page)
 * - progressManager: object with optional markBadgeChecked({ sectionId, roomNumber, scorePercent, passed })
 * - storage: object with getItem/setItem/removeItem OR get/set/remove
 * - masterStorageKey: string
 * - draftStorageKey: string
 * - lexHints: array
 * - avatarSrc: string (Lex head svg for this tense)
 *
 * Badge content:
 * - storyVerbPool: string[]
 * - storySlotAnswers: string[]   // correct form for each slot
 * - renderStory: ({ renderSlot }) => JSX   // function that renders the story and calls renderSlot(index) where needed
 * - ex2Questions: array of { id, question, correctShort, sentence?, acceptSentences?, fullAnswer? }
 * - ex3Prompts: string[]
 * - dictionaryItems: array for TenseMiniDictionaryCard
 * - badgeStoryTtsText: string (for listening model story / prompts)
 */
export default function TenseBadgeRoom({
  tenseName,
  sectionId = "badge",
  roomNumber = 1,
  theoryRoute,
  mapRoute,
  progressManager,
  storage,
  masterStorageKey,
  draftStorageKey,
  lexHints,
  avatarSrc,
  storyVerbPool,
  storySlotAnswers,
  renderStory,
  ex2Questions,
  ex3Prompts,
  dictionaryItems,
  badgeStoryTtsText,
  certificateDownloadUrl,
  onBadgePersist,
}) {
  const hudRootRef = useRef(null);

  const [roomState, setRoomState] = useState({
    firstAttemptScore: null,
    passed: false,
    hasKey: false,
  });

  const [badgePercent, setBadgePercent] = useState(0);
  const [badgeResult, setBadgeResult] = useState("");
  const [badgeMessage, setBadgeMessage] = useState("");
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  const [didInit, setDidInit] = useState(false);

  // ---- storage helpers (support getItem/get + setItem/set + removeItem/remove) ----
  const storageGet = (key) => {
    if (!storage) return null;
    try {
      if (typeof storage.getItem === "function") return storage.getItem(key);
      if (typeof storage.get === "function") return storage.get(key);
      return null;
    } catch {
      return null;
    }
  };

  const storageSet = (key, value) => {
    if (!storage) return;
    try {
      if (typeof storage.setItem === "function") storage.setItem(key, value);
      else if (typeof storage.set === "function") storage.set(key, value);
    } catch {
      // ignore
    }
  };

  const storageRemove = (key) => {
    if (!storage) return;
    try {
      if (typeof storage.removeItem === "function") storage.removeItem(key);
      else if (typeof storage.remove === "function") storage.remove(key);
    } catch {
      // ignore
    }
  };

  // ---- HUD sync ----
  useEffect(() => {
    const api = hudRootRef.current?.__hudApi;
    if (!api) return;

    api.setProgress(badgePercent ?? 0);

    api.setKeyState({
      icon: "🏅",
      label: "Nu există cheie aici, doar badge.",
    });

    api.showMessage(
      `Rezolvă exercițiile și apasă pe „Verifică badge-ul” ca să vezi progresul la ${tenseName}.`,
      "info",
    );
  }, [badgePercent, tenseName]);

  // ============================================================================
  // Exercițiul 1 – povestea cu verbe
  // ============================================================================

  const slotCount = Array.isArray(storySlotAnswers)
    ? storySlotAnswers.length
    : 0;

  const [ex1Slots, setEx1Slots] = useState(Array(slotCount).fill(""));
  const [ex1SlotStatus, setEx1SlotStatus] = useState(
    Array(slotCount).fill(null),
  );
  const [verbPool, setVerbPool] = useState(() => shuffleList(storyVerbPool));
  const [activeVerb, setActiveVerb] = useState(null);
  const [ex1Score, setEx1Score] = useState(0);
  const [ex1Feedback, setEx1Feedback] = useState("");

  function shuffleList(items) {
    const list = Array.isArray(items) ? [...items] : [];
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  const resetEx1Statuses = () => {
    setEx1SlotStatus(Array(slotCount).fill(null));
  };

  const handleVerbClick = (verb) => {
    resetEx1Statuses();
    setActiveVerb((prev) => (prev === verb ? null : verb));
  };

  const handleSlotClick = (index) => {
    resetEx1Statuses();

    // dacă slotul e plin și nu avem niciun verb selectat -> scoatem verbul înapoi în pool
    if (!activeVerb && ex1Slots[index]) {
      const verb = ex1Slots[index];
      setEx1Slots((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      setVerbPool((prev) => shuffleList([...prev, verb]));
      return;
    }

    // dacă avem un verb selectat din pool -> îl punem în slot
    if (activeVerb) {
      const verb = activeVerb;
      setEx1Slots((prev) => {
        const next = [...prev];
        const previous = next[index];

        next[index] = verb;

        // verbul respectiv dispare din pool
        setVerbPool((poolPrev) =>
          shuffleList(
            poolPrev.filter(
              (v) =>
                (v || "").trim().toLowerCase() !==
                (verb || "").trim().toLowerCase(),
            ),
          ),
        );

        // dacă era deja ceva în slot, îl întoarcem în pool
        if (previous) {
          setVerbPool((poolPrev) => shuffleList([...poolPrev, previous]));
        }

        return next;
      });

      setActiveVerb(null);
    }
  };

  const handleResetEx1 = () => {
    setEx1Slots(Array(slotCount).fill(""));
    setEx1SlotStatus(Array(slotCount).fill(null));
    setVerbPool(shuffleList(storyVerbPool));
    setActiveVerb(null);
    setEx1Score(0);
    setEx1Feedback("");
  };

  const handleCheckEx1 = () => {
    const expected = storySlotAnswers || [];
    const given = ex1Slots || [];

    let correct = 0;
    const status = expected.map((exp, i) => {
      const got = (given[i] || "").trim().toLowerCase();
      const should = (exp || "").trim().toLowerCase();
      if (!got) return null;
      const ok = got === should;
      if (ok) correct += 1;
      return ok;
    });

    const total = expected.length || 1;
    const percent = Math.round((correct / total) * 100);

    setEx1SlotStatus(status);
    setEx1Score(percent);

    if (percent === 100) {
      setEx1Feedback("Super! Ai completat toate verbele corect în poveste. 🎉");
    } else if (percent >= 60) {
      setEx1Feedback(
        `Ești pe aproape: ${correct} din ${total} verbe sunt corecte. Mai verifică o dată sloturile roșii.`,
      );
    } else {
      setEx1Feedback(
        `Ai doar ${correct} din ${total} verbe corecte. Reia povestea și încearcă să potrivești mai bine rutina.`,
      );
    }
  };

  const renderSlot = (index) => {
    const value = ex1Slots[index] || "";
    const status = ex1SlotStatus[index];

    let className = "badge-slot";
    if (status === true) className += " slot-correct";
    if (status === false) className += " slot-incorrect";

    return (
      <button
        type="button"
        className={className}
        onClick={() => handleSlotClick(index)}
      >
        {value || "_____"}
      </button>
    );
  };

  // ============================================================================
  // Exercițiul 2 – Yes/No + propoziții
  // ============================================================================

  const [ex2ShortAnswers, setEx2ShortAnswers] = useState({});
  const [ex2Sentences, setEx2Sentences] = useState({});
  const [ex2PerQuestionFeedback, setEx2PerQuestionFeedback] = useState({});
  const [ex2Score, setEx2Score] = useState(0);
  const [ex2Summary, setEx2Summary] = useState("");

  // map { id: true } pentru întrebările unde elevul are și Yes/No corect și propoziție corectă
  const [ex2CorrectQuestions, setEx2CorrectQuestions] = useState({});
  // flag: am apăsat cel puțin o dată pe "Verifică exercițiul 2"
  const [ex2HasChecked, setEx2HasChecked] = useState(false);

  const handleEx2ShortChange = (id, value) => {
    setEx2ShortAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleEx2SentenceChange = (id, value) => {
    setEx2Sentences((prev) => ({ ...prev, [id]: value }));
  };

  const handleResetEx2 = () => {
    setEx2ShortAnswers({});
    setEx2Sentences({});
    setEx2PerQuestionFeedback({});
    setEx2Score(0);
    setEx2Summary("");
    setEx2CorrectQuestions({});
    setEx2HasChecked(false);
  };

  const handleCheckEx2 = () => {
    let correct = 0;
    const total = ex2Questions.length || 1;
    const perFeedback = {};
    const correctMap = {};

    ex2Questions.forEach((q) => {
      const shortRaw = ex2ShortAnswers[q.id] || "";
      const sentenceRaw = ex2Sentences[q.id] || "";

      const short = shortRaw.trim().toLowerCase();
      const normalizedSentence = normalizeAnswer(sentenceRaw);

      const expectedShort = (q.correctShort || "").trim().toLowerCase();

      const expectedList = [];
      if (q.sentence) expectedList.push(q.sentence);
      if (Array.isArray(q.acceptSentences)) {
        expectedList.push(...q.acceptSentences);
      }
      const normalizedExpected = expectedList.map((s) => normalizeAnswer(s));

      const shortOk = short && short === expectedShort;
      const sentenceOk =
        !!normalizedSentence && normalizedExpected.includes(normalizedSentence);

      const isCorrect = shortOk && sentenceOk;
      if (isCorrect) {
        correct += 1;
      }

      let msg = "";
      if (!short && !sentenceRaw) {
        msg = "Completează atât răspunsul scurt, cât și propoziția.";
      } else if (!short) {
        msg = "Ți-ai scris propoziția, dar ai uitat Yes/No.";
      } else if (!sentenceRaw) {
        msg = "Ai ales Yes/No, dar lipsește propoziția.";
      } else if (isCorrect) {
        msg = "Perfect! Răspunsul se potrivește cu povestea.";
      } else if (!shortOk && sentenceOk) {
        msg =
          "Propoziția e bună, dar răspunsul Yes/No nu se potrivește cu povestea.";
      } else if (shortOk && !sentenceOk) {
        msg =
          "Yes/No este corect, dar propoziția nu se potrivește cu povestea.";
      } else {
        msg =
          "Nici Yes/No, nici propoziția nu se potrivesc cu povestea. Mai citește o dată textul din exercițiul 1.";
      }

      perFeedback[q.id] = msg;
      correctMap[q.id] = isCorrect;
    });

    const percent = Math.round((correct / total) * 100);
    setEx2PerQuestionFeedback(perFeedback);
    setEx2Score(percent);
    setEx2CorrectQuestions(correctMap);
    setEx2HasChecked(true);

    if (percent === 100) {
      setEx2Summary(
        "Excelent! Toate răspunsurile tale sunt în acord cu povestea. 🎉",
      );
    } else if (percent >= 60) {
      setEx2Summary(
        `Ești pe drumul cel bun: ${correct} din ${total} răspunsuri corecte. Mai ajustează câteva detalii.`,
      );
    } else {
      setEx2Summary(
        `Ai doar ${correct} din ${total} răspunsuri corecte. Reia povestea și încearcă să-ți imaginezi mai clar rutina.`,
      );
    }
  };

  // ============================================================================
  // Exercițiul 3 – scriere liberă
  // ============================================================================

  const [ex3Answers, setEx3Answers] = useState(ex3Prompts.map(() => ""));
  const [ex3Status, setEx3Status] = useState(ex3Prompts.map(() => "pending"));
  const [ex3Summary, setEx3Summary] = useState("");

  const handleEx3Change = (index, value) => {
    setEx3Answers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleResetEx3 = () => {
    setEx3Answers(ex3Prompts.map(() => ""));
    setEx3Status(ex3Prompts.map(() => "pending"));
    setEx3Summary("");
  };

  const handleCheckEx3 = () => {
    const trimmed = ex3Answers.map((v) => (v || "").trim());
    const total = trimmed.length || 1;

    let filled = 0;
    const statuses = trimmed.map((v) => {
      if (!v) return "empty";
      filled += 1;
      const wordCount = v.split(/\s+/).filter(Boolean).length;
      if (wordCount < 5) return "too-short";
      return "ok";
    });

    setEx3Status(statuses);

    const percent = Math.round((filled / total) * 100);
    if (percent === 100) {
      setEx3Summary(
        "Bravo! Ai scris câte o propoziție pentru fiecare situație. 😊",
      );
    } else if (percent >= 60) {
      setEx3Summary(
        "Ai acoperit o parte bună dintre situații, dar mai poți adăuga câteva propoziții.",
      );
    } else {
      setEx3Summary(
        "Ai scris foarte puțin. Încearcă să gândești fiecare propoziție ca o mică parte din povestea ta zilnică.",
      );
    }
  };

  // ============================================================================
  // Badge score + storage master/draft
  // ============================================================================

  const computeBadgeScore = () => {
    const ex1Weight = 40;
    const ex2Weight = 40;
    const ex3Weight = 20;

    const ex1Percent = ex1Score || 0;
    const ex2Percent = ex2Score || 0;

    const okEx3 = ex3Status.filter((s) => s === "ok").length;
    const ex3Percent = Math.round((okEx3 / (ex3Status.length || 1)) * 100);

    const weighted =
      (ex1Percent / 100) * ex1Weight +
      (ex2Percent / 100) * ex2Weight +
      (ex3Percent / 100) * ex3Weight;

    return Math.round(weighted);
  };

  const handleCheckBadge = () => {
    const score = computeBadgeScore();
    setBadgePercent(score);

    let passed = false;
    let message = "";

    if (score === 100) {
      passed = true;
      message = `Ai obținut 100%! Badge-ul ${tenseName} este al tău. 🎉 Poți fi mândru de tine!`;
    } else if (score >= 80) {
      passed = true;
      message =
        "Foarte bine! Ai peste 80%, ceea ce e suficient pentru badge. Dacă vrei, poți încerca să ajungi la 100%.";
    } else if (score >= 60) {
      message =
        "E un început bun, dar încă nu este suficient pentru badge. Mai lucrează puțin la exerciții.";
    } else {
      message =
        "Scorul este destul de mic. Nu te descuraja! Reia pe rând exercițiile și vezi unde poți îmbunătăți răspunsurile.";
    }

    setBadgeResult(`Scor badge: ${score}%`);
    setBadgeMessage(message);
    setBadgeUnlocked(passed);

    const master = {
      ex1Slots,
      ex2ShortAnswers,
      ex2Sentences,
      ex3Answers,
      score,
      passed,
    };
    storageSet(masterStorageKey, JSON.stringify(master));

    setRoomState((prev) => ({
      ...prev,
      firstAttemptScore:
        prev.firstAttemptScore == null ? score : prev.firstAttemptScore,
      passed: prev.passed || passed,
      hasKey: prev.hasKey,
    }));

    if (
      progressManager &&
      typeof progressManager.markBadgeChecked === "function"
    ) {
      progressManager.markBadgeChecked({
        sectionId,
        roomNumber,
        scorePercent: score,
        passed,
      });
    }

    if (typeof onBadgePersist === "function") {
      Promise.resolve(
        onBadgePersist({
          scorePercent: score,
          passed,
        }),
      ).catch((error) => {
        console.warn("Badge persist failed", error);
      });
    }
  };

  const handlePracticeReset = () => {
    handleResetEx1();
    handleResetEx2();
    handleResetEx3();
    setBadgePercent(0);
    setBadgeResult("");
    setBadgeMessage("");
    setBadgeUnlocked(false);
    // nu ștergem master-ul; doar curățăm UI-ul curent (pentru exersare)
    storageRemove(draftStorageKey);
  };

  const handleRetryForKey = () => {
    // Badge nu are cheie, dar păstrăm handlerul pentru compatibilitate.
  };

  const practiceResetVisible = badgeUnlocked || roomState.passed;

  // --- master/draft rehydrate ---
  useEffect(() => {
    if (didInit) return;

    const rawMaster = masterStorageKey ? storageGet(masterStorageKey) : null;
    if (rawMaster) {
      try {
        const data = JSON.parse(rawMaster);

        if (Array.isArray(data.ex1Slots)) {
          const slots = data.ex1Slots.map((v) => v || "");
          setEx1Slots(slots);
        }

        if (data.ex2ShortAnswers) {
          setEx2ShortAnswers(data.ex2ShortAnswers);
        }
        if (data.ex2Sentences) {
          setEx2Sentences(data.ex2Sentences);
        }

        if (Array.isArray(data.ex3Answers)) {
          setEx3Answers(data.ex3Answers.map((v) => v || ""));
        }

        if (typeof data.score === "number") {
          setBadgePercent(data.score);
          setBadgeResult(`Scor badge: ${data.score}%`);
        }

        setBadgeUnlocked(!!data.passed);
        setRoomState((prev) => ({
          ...prev,
          firstAttemptScore:
            prev.firstAttemptScore == null
              ? (data.score ?? prev.firstAttemptScore)
              : prev.firstAttemptScore,
          passed: prev.passed || !!data.passed,
        }));

        setDidInit(true);
        return;
      } catch {
        // dacă master-ul e corupt, trecem la draft
      }
    }

    const rawDraft = draftStorageKey ? storageGet(draftStorageKey) : null;
    if (rawDraft) {
      try {
        const data = JSON.parse(rawDraft);
        if (Array.isArray(data.ex1Slots)) {
          setEx1Slots(data.ex1Slots.map((v) => v || ""));
        }
        if (data.ex2ShortAnswers) {
          setEx2ShortAnswers(data.ex2ShortAnswers);
        }
        if (data.ex2Sentences) {
          setEx2Sentences(data.ex2Sentences);
        }
        if (Array.isArray(data.ex3Answers)) {
          setEx3Answers(data.ex3Answers.map((v) => v || ""));
        }
      } catch {
        // ignore
      }
    }

    setDidInit(true);
  }, [didInit, masterStorageKey, draftStorageKey]);

  useEffect(() => {
    if (!didInit || !draftStorageKey) return;
    const draft = {
      ex1Slots,
      ex2ShortAnswers,
      ex2Sentences,
      ex3Answers,
    };
    storageSet(draftStorageKey, JSON.stringify(draft));
  }, [
    didInit,
    draftStorageKey,
    ex1Slots,
    ex2ShortAnswers,
    ex2Sentences,
    ex3Answers,
  ]);

  // --- dev tools (autofill/reset) ---
  const handleDevAutofill = () => {
    // Ex1 – completează cu răspunsurile corecte
    setEx1Slots(storySlotAnswers.map((v) => v || ""));
    setVerbPool([]);
    setEx1SlotStatus(storySlotAnswers.map(() => true));
    setEx1Score(100);
    setEx1Feedback("Dev: toate sloturile au fost completate corect.");

    // Ex2 – scriem răspunsurile corecte dacă există în config
    const nextShort = {};
    const nextSentences = {};
    ex2Questions.forEach((q) => {
      if (q.correctShort) {
        nextShort[q.id] = q.correctShort;
      }
      if (q.sentence) {
        nextSentences[q.id] = q.sentence;
      }
    });
    setEx2ShortAnswers(nextShort);
    setEx2Sentences(nextSentences);
    setEx2PerQuestionFeedback({});
    setEx2Score(100);
    setEx2Summary("Dev: exercițiul 2 completat automat (100%).");

    // Ex3 – text generic pe fiecare prompt
    const text = `I usually wake up at 7 a.m., go to school, study and spend time with my family.`;
    setEx3Answers(ex3Prompts.map(() => text));
    setEx3Status(ex3Prompts.map(() => "ok"));
    setEx3Summary("Dev: exercițiul 3 completat automat.");
  };

  const handleDevReset = () => {
    handleResetEx1();
    handleResetEx2();
    handleResetEx3();
    setBadgePercent(0);
    setBadgeResult("");
    setBadgeMessage("");
    setBadgeUnlocked(false);
    storageRemove(masterStorageKey);
    storageRemove(draftStorageKey);
  };

  const devTools = (
    <TenseRoomDevToolsAndStatus
      roomState={roomState}
      onDevAutofill={handleDevAutofill}
      onDevReset={handleDevReset}
    />
  );

  const lex = <TenseLexBubble hints={lexHints || []} avatarSrc={avatarSrc} />;

  const pageTitle = `${tenseName} – Badge`;
  const roomLabel = "Badge – Camera 1";

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      sectionLabel="Badge"
      theoryRoute={theoryRoute}
      mapRoute={mapRoute}
      hudRootRef={hudRootRef}
      onRetryForKey={handleRetryForKey}
      keyButtonVisible={false}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId={`${sectionId}-room${roomNumber}-retry-for-key`}
      devTools={devTools}
      lex={lex}
    >
      <>
        {/* Intro */}
        <section className="card">
          <h2 className="card-title">Provocarea finală – Badge {tenseName}</h2>
          <p className="card-description">
            Aceasta este camera specială a badge-ului. Rezolvă corect toate
            exercițiile. Dacă obții un scor suficient de bun, primești badge-ul{" "}
            {tenseName}!
          </p>
        </section>

        {/* Exercițiul 1 */}
        <section className="card">
          <h2 className="card-title">Exercițiul 1 – Completează povestea</h2>
          <p className="card-description">
            Citește povestea și completează verbele lipsă în {tenseName}.
            Folosește verbele din panoul din dreapta.
          </p>

          {dictionaryItems && dictionaryItems.length > 0 && (
            <TenseMiniDictionaryCard
              description="Citește cuvintele și expresiile de mai jos, ascultă pronunția cu 🔊 și folosește-le ca ajutor pentru poveste."
              items={dictionaryItems}
            />
          )}

          <div className="matching-layout badge-layout">
            <div className="matching-left">
              <div className="badge-story">
                {typeof renderStory === "function"
                  ? renderStory({ renderSlot })
                  : null}
              </div>
            </div>
            <div className="matching-right">
              <div className="matching-options">
                {verbPool.map((verb) => {
                  const isActive = activeVerb === verb;
                  return (
                    <button
                      key={verb}
                      type="button"
                      className={
                        "badge-verb" + (isActive ? " badge-verb--active" : "")
                      }
                      onClick={() => handleVerbClick(verb)}
                    >
                      {verb}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {badgeStoryTtsText && ex1Score === 100 && (
            <div className="badge-story-tts">
              <LexTtsButton
                text={badgeStoryTtsText}
                ariaLabel={`Ascultă varianta audio a poveștii-model pentru badge ${tenseName}.`}
              />
            </div>
          )}

          <div className="exercise-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCheckEx1}
            >
              Verifică exercițiul 1
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleResetEx1}
            >
              Repornește exercițiul 1
            </button>
          </div>
          {ex1Feedback && <div className="exercise-score">{ex1Feedback}</div>}
        </section>

        {/* Exercițiul 2 */}
        <section className="card">
          <h2 className="card-title">
            Exercițiul 2 – Yes/No &amp; propoziții complete
          </h2>
          <p className="card-description">
            Pentru fiecare întrebare, răspunde cu Yes/No și scrie o propoziție
            completă care se potrivește cu povestea din exercițiul 1.
          </p>

          <div className="ex2-list" id="exercise-2">
            {ex2Questions.map((q) => {
              const short = ex2ShortAnswers[q.id] || "";
              const sentence = ex2Sentences[q.id] || "";
              const feedback = ex2PerQuestionFeedback[q.id] || "";

              const showSentence =
                short.trim().toLowerCase() === "yes" ||
                short.trim().toLowerCase() === "no";

              // TTS pentru răspuns: Yes/No + propoziția completă
              let answerTts = "";

              if (q.fullAnswer) {
                answerTts = q.fullAnswer;
              } else {
                const parts = [];
                if (q.correctShort) parts.push(q.correctShort);
                if (q.sentence) parts.push(q.sentence);
                answerTts = parts.join(". ");
              }

              const canListenAnswer = Boolean(answerTts);

              // 🔴🟢 Status vizual întrebări
              const isChecked = ex2HasChecked;
              const isCorrect = isChecked && ex2CorrectQuestions[q.id] === true;
              const isIncorrect =
                isChecked && ex2CorrectQuestions[q.id] === false;

              let itemClassName = "ex2-item";
              if (isCorrect) itemClassName += " ex2-item--correct";
              if (isIncorrect) itemClassName += " ex2-item--incorrect";

              const shortInputClassName =
                "ex2-input ex2-input--short" +
                (isCorrect
                  ? " ex2-input--correct"
                  : isIncorrect
                    ? " ex2-input--incorrect"
                    : "");

              const sentenceInputClassName =
                "ex2-input" +
                (isCorrect
                  ? " ex2-input--correct"
                  : isIncorrect
                    ? " ex2-input--incorrect"
                    : "");

              return (
                <article key={q.id} className={itemClassName}>
                  <p className="ex2-question">
                    <strong>Întrebarea {q.id}:</strong> {q.question}
                  </p>

                  {/* TTS pe întrebare – disponibil de la început */}
                  <div className="ex2-question-tts">
                    <LexTtsButton
                      text={q.questionTtsText || q.question}
                      ariaLabel={`Ascultă întrebarea ${q.id}`}
                    />
                  </div>

                  <div className="ex2-input-row">
                    <label>
                      Răspuns scurt (Yes/No):
                      <input
                        type="text"
                        className={shortInputClassName}
                        value={short}
                        onChange={(e) =>
                          handleEx2ShortChange(q.id, e.target.value)
                        }
                      />
                    </label>
                  </div>

                  {showSentence && (
                    <div className="ex2-input-row">
                      <label>
                        Scrie propoziția ta:
                        <input
                          type="text"
                          className={sentenceInputClassName}
                          value={sentence}
                          onChange={(e) =>
                            handleEx2SentenceChange(q.id, e.target.value)
                          }
                        />
                      </label>
                    </div>
                  )}

                  {feedback && (
                    <div className="ex2-feedback">
                      <span className="ex2-message">{feedback}</span>
                    </div>
                  )}

                  {/* TTS pe răspuns – doar după verificare și doar dacă e corect */}
                  {canListenAnswer && isChecked && isCorrect && (
                    <div className="ex2-listen-answer">
                      <LexTtsButton
                        text={answerTts}
                        ariaLabel={`Ascultă răspunsul complet corect pentru întrebarea ${q.id}`}
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="exercise-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCheckEx2}
            >
              Verifică exercițiul 2
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleResetEx2}
            >
              Repornește exercițiul 2
            </button>
          </div>
          {ex2Summary && <div className="exercise-score">{ex2Summary}</div>}
        </section>

        {/* Exercițiul 3 */}
        <section className="card">
          <h2 className="card-title">
            Exercițiul 3 – Povestea ta în {tenseName}
          </h2>
          <p className="card-description">
            Scrie câte o propoziție despre rutina ta, folosind {tenseName}. Nu
            există răspunsuri unice corecte, dar propozițiile trebuie să fie
            clare și suficient de detaliate.
          </p>

          <div className="ex3-list" id="exercise-3">
            {ex3Prompts.map((prompt, idx) => {
              const value = ex3Answers[idx] || "";
              const status = ex3Status[idx] || "pending";

              let msg = "";
              if (status === "empty") msg = "Scrie cel puțin o propoziție.";
              else if (status === "too-short")
                msg = "Încearcă să scrii o propoziție mai detaliată.";
              else if (status === "ok") msg = "Bine! Propoziția ta pare clară.";

              // clase roșu/verde pentru Ex.3
              let ex3ItemClassName = "ex3-item";
              let ex3TextareaClassName = "ex3-textarea";

              if (status === "ok") {
                ex3ItemClassName += " ex3-item--correct";
                ex3TextareaClassName += " ex3-textarea--correct";
              } else if (status === "too-short" || status === "empty") {
                ex3ItemClassName += " ex3-item--incorrect";
                ex3TextareaClassName += " ex3-textarea--incorrect";
              }

              return (
                <div key={idx} className={ex3ItemClassName}>
                  <label>
                    <span className="ex3-prompt">{prompt}</span>
                    <textarea
                      className={ex3TextareaClassName}
                      value={value}
                      onChange={(e) => handleEx3Change(idx, e.target.value)}
                    />
                    {value && (
                      <LexTtsButton
                        text={value}
                        ariaLabel={`Ascultă propoziția ${idx + 1}`}
                      />
                    )}
                  </label>
                  <div className="ex3-feedback">
                    <span className="ex3-message">{msg}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="exercise-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCheckEx3}
            >
              Verifică exercițiul 3
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleResetEx3}
            >
              Repornește exercițiul 3
            </button>
          </div>
          {ex3Summary && <div className="exercise-score">{ex3Summary}</div>}
        </section>

        {/* Verificare finală badge */}
        <section className="card">
          <h2 className="card-title">Badge-ul tău {tenseName}</h2>
          <p className="card-description">
            Când ești gata, apasă pe butonul de mai jos ca să verifici progresul
            general pentru badge.
          </p>

          <div className="exercise-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCheckBadge}
            >
              Verifică badge-ul {tenseName}
            </button>
          </div>

          {badgeResult && (
            <div className="exercise-score" id="badge-result">
              {badgeResult}
            </div>
          )}
          {badgeMessage && (
            <div className="exercise-feedback" id="badge-message">
              {badgeMessage}
            </div>
          )}

          {badgeUnlocked && (
            <div className="badge-reward" id="badge-reward">
              <p className="badge-reward__text">
                Felicitări! Ai obținut badge-ul <strong>{tenseName}</strong>! 🎉
              </p>
            </div>
          )}

          {badgeUnlocked && !isSchoolMode() && certificateDownloadUrl && (
            <div className="badge-certificate">
              <p className="badge-certificate__text">
                Poți descărca diploma pentru acest modul. În varianta cu
                conturi, numele tău va fi completat automat pe certificat.
              </p>
              <a
                href={certificateDownloadUrl}
                download
                className="btn btn-primary"
                data-testid={`${sectionId}-certificate-download`}
              >
                Descarcă diploma
              </a>
            </div>
          )}

          {!badgeUnlocked && (
            <div className="badge-reward" id="badge-reward" hidden>
              {/* hidden placeholder */}
            </div>
          )}
        </section>
      </>
    </TenseRoomPageShell>
  );
}
