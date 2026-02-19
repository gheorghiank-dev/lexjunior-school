import React, { useEffect, useRef, useState } from "react";
import { psTheoryPath, psMapPath } from "./ps-paths.js";
import { normalizeAnswer } from "./ps-core/normalize-answer.js";
import { DEV_MODE } from "./ps-core/config.js";
import { progressManager } from "./ps-core/progress-manager.js";
import { storage } from "./ps-core/storage.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { TenseRoomPageShell } from "../tenses/ui/TenseRoomPageShell.jsx";
import { TenseRoomDevToolsAndStatus } from "../tenses/ui/TenseRoomDevToolsAndStatus.jsx";
import TenseLexBubble from "../tenses/ui/TenseLexBubble.jsx";
import { TenseMiniDictionaryCard } from "../tenses/ui/TenseMiniDictionaryCard.jsx";
import LexTtsButton from "../../shared/exercises/LexTtsButton.jsx";
import "../../styles/badge.css";
import "../../styles/exercises/base.css";
import "../../styles/components/lex-voice-btn.css";
import "../../styles/exercises/pairs.css";

import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "./ps-badge-exercises.js";
import { presentSimpleBadgeLexHints } from "../lex-hints/present-simple/index.js";

/**
 * React-native variant of the Present Simple Badge page.
 * Re-implements the three badge exercises from the legacy HTML:
 *  - Ex1: story with verb slots
 *  - Ex2: Yes/No + full sentence based on the story
 *  - Ex3: free writing about your routine in Present Simple
 *
 * Scoring and thresholds mirror public/present-simple/js/special/badge.js.
 */
export default function PsBadgePage() {
  const SECTION_ID = "badge";
  const ROOM_NUMBER = 1;
  const MASTER_ANSWERS_KEY = "badge_room1_master_v1";
  const DRAFT_ANSWERS_KEY = "badge_room1_draft_v1";

  // ===== HUD / progres general badge =====
  const hudRootRef = useRef(null);

  const [roomState, setRoomState] = useState({
    firstAttemptScore: null,
    passed: false,
    hasKey: false,
  });

  const [didInit, setDidInit] = useState(false);
  const [masterAnswers, setMasterAnswers] = useState(null);

  const [badgePercent, setBadgePercent] = useState(0);
  const [badgeResult, setBadgeResult] = useState("");
  const [badgeMessage, setBadgeMessage] = useState("");
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

    useEffect(() => {
    const api = hudRootRef.current?.__hudApi;
    if (!api) return;

    // HUD-ul vrea un număr simplu (0–100), nu un obiect
    api.setProgress(badgePercent ?? 0);

    // Pentru badge nu avem cheie, doar icon + text personalizat
    api.setKeyState({
      icon: "🏅",
      label: "Nu există cheie aici, doar badge.",
    });

    api.showMessage(
      "Rezolvă exercițiile și apasă pe „Verifică badge-ul” ca să vezi progresul.",
      "info",
    );
  }, [badgePercent]);


  // ===== helperi storage =====
  const loadStoredMasterAnswers = () => {
    try {
      const raw = storage.get(MASTER_ANSWERS_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  };

  const saveMasterAnswers = (value) => {
    try {
      storage.set(MASTER_ANSWERS_KEY, JSON.stringify(value));
    } catch {
      // ignore
    }
  };

  const loadDraftAnswers = () => {
    try {
      const raw = storage.get(DRAFT_ANSWERS_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  };

  const saveDraftAnswers = (value) => {
    try {
      storage.set(DRAFT_ANSWERS_KEY, JSON.stringify(value));
    } catch {
      // ignore
    }
  };

  // ===== Exercițiul 1 – povestea cu verbe (logică legacy: token pool) =====
  const shuffleList = (items) => {
    const list = Array.isArray(items) ? [...items] : [];
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  const computePoolFromSlots = (slots) => {
    const used = new Set(
      (Array.isArray(slots) ? slots : [])
        .map((v) => (v || "").trim())
        .filter(Boolean),
    );

    return badgeStoryConfig.verbs.filter((verb) => !used.has((verb || "").trim()));
  };

  // starea sloturilor: ce verb este în fiecare loc
  const makeEmptyEx1Status = () => badgeStoryConfig.slotAnswers.map(() => null);

  const [ex1Slots, setEx1Slots] = useState(
    badgeStoryConfig.slotAnswers.map(() => ""),
  );
  const [ex1SlotStatus, setEx1SlotStatus] = useState(makeEmptyEx1Status());
  const [ex1Score, setEx1Score] = useState(0);
  const [ex1Feedback, setEx1Feedback] = useState("");

  // „Pool-ul” de verbe disponibile (în dreapta)
  const [verbPool, setVerbPool] = useState(() =>
    shuffleList(badgeStoryConfig.verbs),
  );

  // "În mână": fie un verb din pool, fie un verb ridicat dintr-un slot.
  // source: 'pool' | 'slot'
  const [activePick, setActivePick] = useState(null);

  const resetEx1Statuses = () => {
    setEx1SlotStatus(makeEmptyEx1Status());
  };

  const handlePickVerb = (verb) => {
    // orice interacțiune după "Verifică" resetează culorile
    resetEx1Statuses();
    setActivePick((prev) => {
      // Dacă aveam un verb ridicat dintr-un slot și fac click pe același verb în pool,
      // îl "punem la loc" și renunțăm la pick.
      if (prev && prev.source === "slot" && prev.value === verb) {
        return null;
      }

      return { source: "pool", value: verb };
    });
  };

  const handleSlotClick = (index) => {
    resetEx1Statuses();

    const currentVerb = (ex1Slots[index] || "").trim();

    // Dacă nu avem nimic în mână și slotul e plin -> ridicăm verbul din slot
    if (!activePick && currentVerb) {
      setActivePick({ source: "slot", value: currentVerb, fromIndex: index });

      setEx1Slots((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });

      // Verbul se întoarce în pool
      setVerbPool((prev) => shuffleList([...prev, currentVerb]));
      return;
    }

    // Dacă avem un verb în mână din pool: punem verbul în slot (înlocuind ce era)
    if (activePick && activePick.source === "pool") {
      const verb = activePick.value;
      setEx1Slots((prev) => {
        const next = [...prev];
        const previous = next[index] || "";

        next[index] = verb;

        if (previous) {
          // dacă era deja ceva în slot, se întoarce în pool
          setVerbPool((poolPrev) => {
            const withoutVerb = poolPrev.filter(
              (v) => (v || "").trim() !== (verb || "").trim(),
            );
            return shuffleList([...withoutVerb, previous]);
          });
        } else {
          setVerbPool((poolPrev) =>
            shuffleList(
              poolPrev.filter((v) => (v || "").trim() !== (verb || "").trim()),
            ),
          );
        }

        return next;
      });
      setActivePick(null);
      return;
    }

    // Dacă avem un verb ridicat dintr-un slot: mutare / swap între sloturi.
    if (activePick && activePick.source === "slot") {
      const verb = activePick.value;
      const origin = activePick.fromIndex;

      setEx1Slots((prev) => {
        const next = [...prev];
        const targetVerb = next[index];

        next[index] = verb;
        next[origin] = targetVerb || "";

        return next;
      });

      setActivePick(null);
    }
  };

  const handleRetryEx1 = () => {
    setEx1Slots(badgeStoryConfig.slotAnswers.map(() => ""));
    setEx1SlotStatus(makeEmptyEx1Status());
    setEx1Score(0);
    setEx1Feedback("");
    setActivePick(null);
    setVerbPool(shuffleList(badgeStoryConfig.verbs));
  };

  const handleCheckEx1 = () => {
    const expected = badgeStoryConfig.slotAnswers || [];
    const given = ex1Slots || [];

    let correct = 0;
    const statuses = expected.map((expectedVerb, index) => {
      const givenVerb = (given[index] || "").trim().toLowerCase();
      const normalizedExpected = (expectedVerb || "").trim().toLowerCase();

      if (!givenVerb) return null;

      const isOk = givenVerb === normalizedExpected;
      if (isOk) correct += 1;
      return isOk;
    });

    const total = expected.length || 1;
    const percent = Math.round((correct / total) * 100);

    setEx1SlotStatus(statuses);
    setEx1Score(percent);

    if (percent === 100) {
      setEx1Feedback("Super! Ai completat toate verbele corect în poveste. 🎉");
    } else if (percent >= 60) {
      setEx1Feedback(
        `Ești pe aproape! Ai ${correct} din ${total} verbe corecte. Mai verifică încă o dată.`,
      );
    } else {
      setEx1Feedback(
        `Ai doar ${correct} din ${total} verbe corecte. Reia povestea și încearcă să potrivești mai bine rutina.`,
      );
    }
  };

  const renderEx1Slot = (index) => {
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

  // ===== Exercițiul 2 – Yes/No + propoziții =====
  const [ex2ShortAnswers, setEx2ShortAnswers] = useState({});
  const [ex2Sentences, setEx2Sentences] = useState({});
  const [ex2PerQuestionFeedback, setEx2PerQuestionFeedback] = useState({});
  const [ex2Score, setEx2Score] = useState(0);
  const [ex2Summary, setEx2Summary] = useState("");

  const handleEx2ShortChange = (id, value) => {
    setEx2ShortAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleEx2SentenceChange = (id, value) => {
    setEx2Sentences((prev) => ({ ...prev, [id]: value }));
  };

  const handleRetryEx2 = () => {
    setEx2ShortAnswers({});
    setEx2Sentences({});
    setEx2PerQuestionFeedback({});
    setEx2Score(0);
    setEx2Summary("");
  };

  const handleCheckEx2 = () => {
    let correct = 0;
    const total = badgeEx2Questions.length || 1;
    const perFeedback = {};

    badgeEx2Questions.forEach((q) => {
      const shortRaw = ex2ShortAnswers[q.id] || "";
      const sentenceRaw = ex2Sentences[q.id] || "";

      const short = (shortRaw || "").trim().toLowerCase();
      const normalizedSentence = normalizeAnswer(sentenceRaw);

      const expectedShort = (q.correctShort || "").trim().toLowerCase();

      const expectedList = [];
      if (q.sentence) expectedList.push(q.sentence);
      if (Array.isArray(q.acceptSentences)) {
        expectedList.push(...q.acceptSentences);
      }

      const normalizedExpectedList = expectedList.map((s) =>
        normalizeAnswer(s),
      );

      const shortOk = short === expectedShort;
      const sentenceOk = normalizedExpectedList.includes(normalizedSentence);

      let msg = "";
      if (!short && !sentenceRaw) {
        msg = "Completează atât răspunsul scurt, cât și propoziția.";
      } else if (!short) {
        msg = "Ți-ai scris propoziția, dar ai uitat Yes/No.";
      } else if (!sentenceRaw) {
        msg = "Ai ales Yes/No, dar lipsește propoziția.";
      } else if (shortOk && sentenceOk) {
        msg = "Perfect! Răspunsul se potrivește cu povestea.";
        correct += 1;
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
    });

    const percent = Math.round((correct / total) * 100);
    setEx2PerQuestionFeedback(perFeedback);
    setEx2Score(percent);

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

  // ===== Exercițiul 3 – scriere liberă =====
  const [ex3Answers, setEx3Answers] = useState(
    badgeEx3Prompts.map(() => ""),
  );
  const [ex3Status, setEx3Status] = useState(
    badgeEx3Prompts.map(() => "pending"),
  );
  const [ex3Summary, setEx3Summary] = useState("");

  const handleEx3Change = (index, value) => {
    setEx3Answers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleRetryEx3 = () => {
    setEx3Answers(badgeEx3Prompts.map(() => ""));
    setEx3Status(badgeEx3Prompts.map(() => "pending"));
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

    // ===== Rehidratare din storage (master + draft) =====

  const rehydrateFromMasterAnswers = (data) => {
    if (!data || typeof data !== "object") return;

    // Exercițiul 1 – refacem sloturile, pool-ul și scorul
    if (Array.isArray(data.ex1Slots)) {
      const slots = data.ex1Slots.map((v) => v || "");
      setEx1Slots(slots);
      setVerbPool(computePoolFromSlots(slots));

      const expected = badgeStoryConfig.slotAnswers || [];
      let correct = 0;
      const statuses = expected.map((expectedVerb, index) => {
        const givenVerb = (slots[index] || "").trim().toLowerCase();
        const normalizedExpected = (expectedVerb || "").trim().toLowerCase();
        if (!givenVerb) return null;
        const isOk = givenVerb === normalizedExpected;
        if (isOk) correct += 1;
        return isOk;
      });

      const total = expected.length || 1;
      const percent = Math.round((correct / total) * 100);
      setEx1SlotStatus(statuses);
      setEx1Score(percent);

      if (percent === 100) {
        setEx1Feedback("Super! Ai completat toate verbele corect în poveste. 🎉");
      } else if (percent >= 60) {
        setEx1Feedback(
          `Ești pe aproape! Ai ${correct} din ${total} verbe corecte. Mai verifică încă o dată.`,
        );
      } else {
        setEx1Feedback(
          `Ai doar ${correct} din ${total} verbe corecte. Reia povestea și încearcă să potrivești mai bine rutina.`,
        );
      }
    }

    // Exercițiul 2 – rehidratăm răspunsurile și recalcăm scorul
    if (data.ex2ShortAnswers) {
      setEx2ShortAnswers(data.ex2ShortAnswers);
    }
    if (data.ex2Sentences) {
      setEx2Sentences(data.ex2Sentences);
    }

    if (data.ex2ShortAnswers || data.ex2Sentences) {
      let correct = 0;
      const total = badgeEx2Questions.length || 1;
      const perFeedback = {};

      badgeEx2Questions.forEach((q) => {
        const shortRaw = (data.ex2ShortAnswers?.[q.id] || "").trim().toLowerCase();
        const sentenceRaw = data.ex2Sentences?.[q.id] || "";
        const normalizedSentence = normalizeAnswer(sentenceRaw);

        const expectedShort = (q.correctShort || "").trim().toLowerCase();

        const expectedList = [];
        if (q.sentence) expectedList.push(q.sentence);
        if (Array.isArray(q.acceptSentences)) {
          expectedList.push(...q.acceptSentences);
        }
        const normalizedExpectedList = expectedList.map((s) =>
          normalizeAnswer(s),
        );

        const shortOk = shortRaw === expectedShort;
        const sentenceOk = normalizedExpectedList.includes(normalizedSentence);

        let msg = "";
        if (!shortRaw && !sentenceRaw) {
          msg = "Completează atât răspunsul scurt, cât și propoziția.";
        } else if (!shortRaw) {
          msg = "Ți-ai scris propoziția, dar ai uitat Yes/No.";
        } else if (!sentenceRaw) {
          msg = "Ai ales Yes/No, dar lipsește propoziția.";
        } else if (shortOk && sentenceOk) {
          msg = "Perfect! Răspunsul se potrivește cu povestea.";
          correct += 1;
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
      });

      const percent = Math.round((correct / total) * 100);
      setEx2PerQuestionFeedback(perFeedback);
      setEx2Score(percent);

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
    }

    // Exercițiul 3 – textul tău + statusuri
    if (Array.isArray(data.ex3Answers)) {
      setEx3Answers(data.ex3Answers.map((v) => v || ""));
    }
    if (Array.isArray(data.ex3Status)) {
      setEx3Status(data.ex3Status);
      const filled = data.ex3Status.filter((s) => s === "ok").length;
      const total = data.ex3Status.length || 1;
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
    }

    const score = typeof data.score === "number" ? data.score : 0;
    setBadgePercent(score);
    setBadgeUnlocked(!!data.passed);

    if (score) {
      setBadgeResult(`Scor badge: ${score}%`);
    }

    setRoomState((prev) => ({
      ...prev,
      firstAttemptScore:
        prev.firstAttemptScore == null ? score : prev.firstAttemptScore,
      passed: prev.passed || !!data.passed,
      hasKey: prev.hasKey,
    }));
  };

  const rehydrateFromDraftAnswers = (draft) => {
    if (!draft || typeof draft !== "object") return;

    if (Array.isArray(draft.ex1Slots)) {
      const slots = draft.ex1Slots.map((v) => v || "");
      setEx1Slots(slots);
      setVerbPool(computePoolFromSlots(slots));
      setEx1SlotStatus(makeEmptyEx1Status());
      setEx1Score(0);
      setEx1Feedback("");
    }

    if (draft.ex2ShortAnswers) {
      setEx2ShortAnswers(draft.ex2ShortAnswers);
    }
    if (draft.ex2Sentences) {
      setEx2Sentences(draft.ex2Sentences);
    }

    if (Array.isArray(draft.ex3Answers)) {
      setEx3Answers(draft.ex3Answers.map((v) => v || ""));
    }
    if (Array.isArray(draft.ex3Status)) {
      setEx3Status(draft.ex3Status);
    }
  };

  // La primul mount: încercăm master → apoi draft
  useEffect(() => {
    if (didInit) return;

    const storedMaster = loadStoredMasterAnswers?.();
    if (storedMaster) {
      setMasterAnswers(storedMaster);
      rehydrateFromMasterAnswers(storedMaster);
      setDidInit(true);
      return;
    }

    const draft = loadDraftAnswers?.();
    if (draft) {
      rehydrateFromDraftAnswers(draft);
    }

    setDidInit(true);
  }, [didInit]);

  // Autosave draft cât timp lucrează elevul
  useEffect(() => {
    if (!didInit) return;

    const draft = {
      ex1Slots,
      ex2ShortAnswers,
      ex2Sentences,
      ex3Answers,
      ex3Status,
    };
    saveDraftAnswers?.(draft);
  }, [didInit, ex1Slots, ex2ShortAnswers, ex2Sentences, ex3Answers, ex3Status]);


  // ===== Integrare scor + master answers =====
  const computeBadgeScore = () => {
    // Ex1: întrebările au 20 de sloturi => 20 puncte max
    // Ex2: câte întrebări avem => tot 20 puncte max (scalăm)
    // Ex3: completarea tuturor prompt-urilor => 60 puncte max
    // => total 100
    const ex1Weight = 20;
    const ex2Weight = 20;
    const ex3Weight = 60;

    const ex1Percent = ex1Score || 0;
    const ex2Percent = ex2Score || 0;

    const filledEx3 = ex3Status.filter((s) => s === "ok").length;
    const ex3Percent = Math.round(
      (filledEx3 / (badgeEx3Prompts.length || 1)) * 100,
    );

    const weighted =
      (ex1Percent / 100) * ex1Weight +
      (ex2Percent / 100) * ex2Weight +
      (ex3Percent / 100) * ex3Weight;

    return Math.round(weighted);
  };

  const [devMode] = useState(() => Boolean(DEV_MODE));

  const handleCheckBadge = () => {
    const score = computeBadgeScore();
    setBadgePercent(score);

    let passed = false;
    let message = "";

    if (score === 100) {
      passed = true;
      message =
        "Ai obținut 100%! Badge-ul Present Simple este al tău. 🎉 Poți fi mândru de tine!";
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

    const newMaster = {
      ex1Slots,
      ex2ShortAnswers,
      ex2Sentences,
      ex3Answers,
      ex3Status,
      score,
      passed,
    };
    setMasterAnswers(newMaster);
    saveMasterAnswers(newMaster);

    setRoomState((prev) => ({
      ...prev,
      firstAttemptScore:
        prev.firstAttemptScore == null
          ? score
          : prev.firstAttemptScore,
      passed: prev.passed || passed,
      hasKey: prev.hasKey,
    }));

    progressManager.markBadgeChecked({
      sectionId: SECTION_ID,
      roomNumber: ROOM_NUMBER,
      scorePercent: score,
      passed,
    });
  };

  // Dev tools – Autofill / Reset
  const handleDevAutofillEx1 = () => {
    setEx1Slots([...badgeStoryConfig.slotAnswers]);
    setVerbPool([]);
    setEx1SlotStatus(badgeStoryConfig.slotAnswers.map(() => true));
    setEx1Score(100);
    setEx1Feedback(
      "Dev: toate sloturile au fost completate automat cu răspunsurile corecte.",
    );
  };

  const handleDevResetEx1 = () => {
    handleRetryEx1();
  };

  const handleDevAutofillEx2 = () => {
    const nextShort = {};
    const nextSentences = {};
    const nextFeedback = {};

    badgeEx2Questions.forEach((q) => {
      nextShort[q.id] = q.correctShort || "";
      nextSentences[q.id] = q.sentence || "";
      nextFeedback[q.id] = "Dev: răspuns completat automat.";
    });

    setEx2ShortAnswers(nextShort);
    setEx2Sentences(nextSentences);
    setEx2PerQuestionFeedback(nextFeedback);
    setEx2Score(100);
    setEx2Summary(
      "Dev: toate întrebările au fost completate cu răspunsurile corecte.",
    );
  };

  const handleDevResetEx2 = () => {
    handleRetryEx2();
  };

  const handleDevAutofillEx3 = () => {
    const nextAnswers = badgeEx3Prompts.map(
      (prompt) =>
        `${prompt} (Dev) I usually wake up at 7 a.m., go to school, and spend time with my family.`,
    );
    setEx3Answers(nextAnswers);
    setEx3Status(badgeEx3Prompts.map(() => "ok"));
    setEx3Summary(
      "Dev: toate propozițiile au fost completate automat cu un text generic.",
    );
  };

  const handleDevResetEx3 = () => {
    handleRetryEx3();
  };

  const handleDevAutofill = () => {
    handleDevAutofillEx1();
    handleDevAutofillEx2();
    handleDevAutofillEx3();
  };

  const handleDevReset = () => {
    handleDevResetEx1();
    handleDevResetEx2();
    handleDevResetEx3();
    setBadgeResult("");
    setBadgeMessage("");
    setBadgePercent(0);
    setBadgeUnlocked(false);
    setMasterAnswers(null);
    try {
      storage.remove(MASTER_ANSWERS_KEY);
      storage.remove(DRAFT_ANSWERS_KEY);
    } catch (err) {
      // ignore storage reset errors
    }
  };

  const practiceResetVisible = badgeUnlocked || roomState.passed;

  const handlePracticeReset = () => {
    handleRetryEx1();
    handleRetryEx2();
    handleRetryEx3();
    setBadgeResult("");
    setBadgeMessage("");
    setBadgePercent(0);
  };

  const handleRetryForKey = () => {
    // Badge nu are cheie; păstrăm handlerul pentru compatibilitate.
  };

  const lexHints = presentSimpleBadgeLexHints.final || [];
  const pageTitle = "Present Simple – Badge";
  const roomLabel = "Badge – Camera 1";

  const devTools = (
    <TenseRoomDevToolsAndStatus
      roomState={roomState}
      onDevAutofill={handleDevAutofill}
      onDevReset={handleDevReset}
    />
  );

  const lex = (
    <TenseLexBubble hints={lexHints} avatarSrc={PS_LEX_HEAD_SVG} />
  );

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      sectionLabel="Badge"
      theoryRoute={psTheoryPath("affirmative")}
      mapRoute={psMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={handleRetryForKey}
      keyButtonVisible={false}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="ps-badge-room1-retry-for-key"
      devTools={devTools}
      lex={lex}
    >
        <>
          {/* Introducere badge */}
          <section className="card">
            <h2 className="card-title">
              Provocarea finală – Badge Present Simple
            </h2>
            <p className="card-description">
              Aceasta este camera specială a badge-ului. Rezolvă corect toate
              exercițiile. Dacă obții 100% la verificarea finală, primești
              badge-ul Present Simple!
            </p>
          </section>

          {/* Exercițiul 1 */}
          <section className="card">
            <h2 className="card-title">Exercițiul 1 – Completează povestea</h2>
            <p className="card-description">
              Citește povestea și completează verbele lipsă în Present Simple.
              Ai 20 de verbe amestecate în partea dreaptă (sau în panoul pentru
              mobil).
            </p>

            <TenseMiniDictionaryCard
              description="Citește cuvintele și expresiile de mai jos, ascultă pronunția cu 🔊 și folosește-le ca ajutor pentru poveste."
              items={badgeMiniDictionaryItems}
            />

            <div className="matching-layout badge-layout">
              <div className="matching-left">
                <div className="badge-story">
                  <div className="exercise-row exercise-row--matching">
                    <div className="exercise-header-row">
                      <div className="exercise-text">
                        <p>
                          Every day in my family starts differently for each of
                          us. I have my own routine, and my brother has his, and
                          they almost never look the same. That’s why our daily
                          schedules feel like two separate little stories.
                        </p>

                        <p>
                          <strong>Paragraph 2 — I</strong>
                        </p>

                        <p>
                          I usually {renderEx1Slot(0)} at 7 a.m., and the first
                          thing I do is {renderEx1Slot(1)} a quick cup of
                          coffee.
                        </p>

                        <p>
                          I {renderEx1Slot(2)} my messages, then I{" "}
                          {renderEx1Slot(3)} preparing for school.
                        </p>

                        <p>
                          I always {renderEx1Slot(4)} the house around 7:45
                          because I {renderEx1Slot(5)} to walk slowly and enjoy
                          the quiet morning.
                        </p>

                        <p>
                          During the day, I {renderEx1Slot(6)}, teach, and work
                          on different projects.
                        </p>

                        <p>
                          In the afternoon, I often {renderEx1Slot(7)} my
                          friends or {renderEx1Slot(8)} something relaxing.
                        </p>

                        <p>
                          I usually {renderEx1Slot(9)} around 6 p.m., cook
                          something simple, and finish my homework or plan
                          lessons for the next day.
                        </p>

                        <p>
                          <strong>Paragraph 3 — He</strong>
                        </p>

                        <p>
                          My brother, on the other hand, {renderEx1Slot(10)}{" "}
                          much later.
                        </p>

                        <p>
                          He normally {renderEx1Slot(11)} the news,{" "}
                          {renderEx1Slot(12)} a big breakfast, and{" "}
                          {renderEx1Slot(13)} at his computer around 10.
                        </p>

                        <p>
                          He {renderEx1Slot(14)} most of the afternoon gaming or
                          working on tech projects.
                        </p>

                        <p>
                          In the evening, he sometimes {renderEx1Slot(15)} with
                          friends or {renderEx1Slot(16)} food online because he{" "}
                          {renderEx1Slot(17)} cooking.
                        </p>

                        <p>
                          He usually {renderEx1Slot(18)} from home and{" "}
                          {renderEx1Slot(19)} after midnight, while I’m already
                          asleep.
                        </p>

                        <p>
                          Even though our days are different, we still find time
                          to talk, laugh, and share small moments. And maybe
                          that’s what really matters in a family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="matching-right">
                <div className="matching-options">
                  {verbPool.map((verb) => {
                    const isActive =
                      activePick &&
                      activePick.source === "pool" &&
                      activePick.value === verb;

                    return (
                      <button
                        key={verb}
                        type="button"
                        className={
                          "badge-verb" + (isActive ? " badge-verb--active" : "")
                        }
                        onClick={() => handlePickVerb(verb)}
                      >
                        {verb}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

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
                onClick={handleRetryEx1}
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
              {badgeEx2Questions.map((q) => {
                const short = ex2ShortAnswers[q.id] || "";
                const sentence = ex2Sentences[q.id] || "";
                const feedback = ex2PerQuestionFeedback[q.id] || "";

                const showSentence =
                  short.trim().toLowerCase() === "yes" ||
                  short.trim().toLowerCase() === "no";

                const canListenAnswer = Boolean(q.fullAnswer);

                const answerTts = q.fullAnswer || "";

                return (
                  <article key={q.id} className="ex2-item">
                    <p className="ex2-question">
                      <strong>Întrebarea {q.id}:</strong> {q.question}
                    </p>

                    <div className="ex2-input-row">
                      <label>
                        Răspuns scurt (Yes/No):
                        <input
                          type="text"
                          className="ex2-input ex2-input--short"
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
                            className="ex2-input"
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
                    {canListenAnswer && (
                      <div className="ex2-listen-answer">
                        <LexTtsButton
                          text={answerTts}
                          ariaLabel={`Ascultă răspunsul complet pentru întrebarea ${q.id}`}
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
                onClick={handleRetryEx2}
              >
                Repornește exercițiul 2
              </button>
            </div>
            {ex2Summary && <div className="exercise-score">{ex2Summary}</div>}
          </section>

          {/* Exercițiul 3 */}
          <section className="card">
            <h2 className="card-title">
              Exercițiul 3 – Povestea ta în Present Simple
            </h2>
            <p className="card-description">
              Scrie câte o propoziție despre rutina ta, folosind Present Simple.
              Nu există răspunsuri unice corecte, dar propozițiile trebuie să
              fie clare și suficient de detaliate.
            </p>

            <div className="ex3-tts">
              <LexTtsButton
                text={badgeStoryTtsText}
                ariaLabel="Ascultă varianta audio a poveștii-model pentru badge."
              />
            </div>

            <div className="ex3-list" id="exercise-3">
              {badgeEx3Prompts.map((prompt, idx) => {
                const value = ex3Answers[idx] || "";
                const status = ex3Status[idx] || "pending";

                let msg = "";
                if (status === "empty") {
                  msg = "Scrie cel puțin o propoziție.";
                } else if (status === "too-short") {
                  msg = "Încearcă să scrii o propoziție mai detaliată.";
                } else if (status === "ok") {
                  msg = "Bine! Propoziția ta pare clară.";
                }

                return (
                  <div key={idx} className="ex3-item">
                    <label>
                      <span className="ex3-prompt">{prompt}</span>
                      <textarea
                        className="ex3-textarea"
                        value={value}
                        onChange={(e) =>
                          handleEx3Change(idx, e.target.value)
                        }
                      />
                      {value && (
                        <LexTtsButton
                          text={value}
                          ariaLabel={`Ascultă propoziția ${idx}`}
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
                onClick={handleRetryEx3}
              >
                Repornește exercițiul 3
              </button>
            </div>
            {ex3Summary && <div className="exercise-score">{ex3Summary}</div>}
          </section>

          {/* Verificare finală + badge */}
          <section className="card">
            <h2 className="card-title">Badge-ul tău Present Simple</h2>
            <p className="card-description">
              Când ești gata, apasă pe butonul de mai jos ca să verifici
              progresul general pentru badge.
            </p>

            <div className="exercise-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCheckBadge}
              >
                Verifică badge-ul Present Simple
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
                  Felicitări! Ai obținut badge-ul{" "}
                  <strong>Present Simple</strong>! 🎉
                </p>
              </div>
            )}

            {!badgeUnlocked && (
              <div className="badge-reward" id="badge-reward" hidden>
                {/* Hidden fallback – păstrăm structură similară cu legacy */}
              </div>
            )}
          </section>
        </>
    </TenseRoomPageShell>
  );
}
