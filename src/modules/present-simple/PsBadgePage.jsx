import React, { useEffect, useRef, useState } from "react";
import { psTheoryPath } from "./ps-paths.js";
import { normalizeAnswer } from "./ps-core/normalize-answer.js";
import { DEV_MODE } from "./ps-core/config.js";
import { progressManager } from "./ps-core/progress-manager.js";
import { storage } from "./ps-core/storage.js";
import { PsMiniDictionaryCard } from "./components/PsMiniDictionaryCard.jsx";
import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import LexTtsButton from "../../shared/exercises/LexTtsButton.jsx";
import "../../styles/badge.css";
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

  const hudRootRef = useRef(null);
  const [badgePercent, setBadgePercent] = useState(0);

  const [roomState, setRoomState] = useState({
    firstAttemptScore: null,
    passed: false,
    hasKey: false,
  });

  const [didInit, setDidInit] = useState(false);

  const [masterAnswers, setMasterAnswers] = useState(null);

  useEffect(() => {
    const api = hudRootRef.current?.__hudApi;
    if (!api) return;

    api.setProgress(badgePercent ?? 0);
    api.setKeyState({ icon: "🏅", label: "Nu există cheie aici, doar badge." });
    api.showMessage(
      "Rezolvă exercițiile și apasă pe „Verifică badge-ul” ca să vezi progresul.",
      "info"
    );
  }, [badgePercent]);

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
        .filter(Boolean)
    );
    const remaining = badgeStoryConfig.verbs.filter((v) => !used.has(v));
    return shuffleList(remaining);
  };

  // Pool-ul din dreapta: verbe unice. Când pui un verb într-un slot, dispare din pool.
  const [verbPool, setVerbPool] = useState(() =>
    shuffleList([...badgeStoryConfig.verbs])
  );

  // "În mână": fie un verb din pool, fie un verb ridicat dintr-un slot.
  // source: 'pool' | 'slot'
  const [activePick, setActivePick] = useState(null);

  const [ex1Slots, setEx1Slots] = useState(
    badgeStoryConfig.slotAnswers.map(() => "")
  );
  const [ex1Score, setEx1Score] = useState(0);
  const [ex1Feedback, setEx1Feedback] = useState("");

  const handlePickVerb = (verb) => {
    setActivePick((prev) => {
      // Dacă aveam un verb ridicat dintr-un slot și acum alegem din pool,
      // îl punem înapoi în slotul lui (logică legacy).
      if (prev && prev.source === "slot") {
        const origin = prev.fromIndex;
        setEx1Slots((slotsPrev) => {
          const next = [...slotsPrev];
          if (typeof origin === "number" && origin >= 0) {
            if (!next[origin]) {
              next[origin] = prev.value;
            } else {
              // fallback: dacă slotul a fost umplut între timp, întoarcem tokenul în pool
              setVerbPool((poolPrev) => [...poolPrev, prev.value]);
            }
          } else {
            setVerbPool((poolPrev) => [...poolPrev, prev.value]);
          }
          return next;
        });
      }

      // Toggle select pentru același verb din pool
      if (prev && prev.source === "pool" && prev.value === verb) return null;
      return { value: verb, source: "pool" };
    });
  };

  const handleSlotClick = (index) => {
    // Dacă nu avem nimic selectat: click pe slot ocupat => "ridică" verbul din slot
    if (!activePick) {
      const current = ex1Slots[index];
      if (!current) return;
      setEx1Slots((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      setActivePick({ value: current, source: "slot", fromIndex: index });
      return;
    }

    // Dacă avem un verb selectat din pool: îl punem în slot și îl scoatem din pool.
    if (activePick.source === "pool") {
      const verb = activePick.value;
      setEx1Slots((prev) => {
        const next = [...prev];
        const existing = next[index];
        next[index] = verb;

        setVerbPool((poolPrev) => {
          const filtered = poolPrev.filter((v) => v !== verb);
          return existing ? [...filtered, existing] : filtered;
        });

        return next;
      });
      setActivePick(null);
      return;
    }

    // Dacă avem un verb ridicat dintr-un slot: mutare / swap între sloturi.
    if (activePick.source === "slot") {
      const verb = activePick.value;
      const origin = activePick.fromIndex;

      setEx1Slots((prev) => {
        const next = [...prev];
        const existing = next[index];
        next[index] = verb;

        if (existing) {
          if (typeof origin === "number" && origin >= 0) {
            next[origin] = existing;
          } else {
            setVerbPool((poolPrev) => [...poolPrev, existing]);
          }
        }

        return next;
      });

      setActivePick(null);
    }
  };

  const handleRetryEx1 = () => {
    setActivePick(null);
    setEx1Slots(badgeStoryConfig.slotAnswers.map(() => ""));
    setVerbPool(shuffleList([...badgeStoryConfig.verbs]));
    setEx1Score(0);
    setEx1Feedback("");
  };

  const handleCheckEx1 = () => {
    let score = 0;
    const correct = badgeStoryConfig.slotAnswers;
    ex1Slots.forEach((value, idx) => {
      const user = (value || "").trim().toLowerCase();
      const target = (correct[idx] || "").trim().toLowerCase();
      if (user && user === target) {
        score++;
      }
    });
    setEx1Score(score);
    setEx1Feedback(
      `Scor exercițiul 1: ${score}/${badgeStoryConfig.slotAnswers.length}`
    );
  };

  const handleDevAutofillEx1 = () => {
    const full = [...badgeStoryConfig.slotAnswers];
    setActivePick(null);
    setEx1Slots(full);
    setVerbPool([]);
    const fullScore = badgeStoryConfig.slotAnswers.length;
    setEx1Score(fullScore);
    setEx1Feedback(
      `Scor exercițiul 1: ${fullScore}/${badgeStoryConfig.slotAnswers.length}`
    );
  };

  const handleDevResetEx1 = () => {
    setActivePick(null);
    setEx1Slots(badgeStoryConfig.slotAnswers.map(() => ""));
    setVerbPool(shuffleList([...badgeStoryConfig.verbs]));
    setEx1Score(0);
    setEx1Feedback("");
  };

  // ===== Exercițiul 2 – Yes/No + propoziții =====
  const [ex2ShortAnswers, setEx2ShortAnswers] = useState({});
  const [ex2Sentences, setEx2Sentences] = useState({});
  const [ex2PerQuestionFeedback, setEx2PerQuestionFeedback] = useState({});
  const [ex2Score, setEx2Score] = useState(0);
  const [ex2Summary, setEx2Summary] = useState("");

  const handleEx2ShortChange = (id, value) => {
    setEx2ShortAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleEx2SentenceChange = (id, value) => {
    setEx2Sentences((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRetryEx2 = () => {
    setEx2ShortAnswers({});
    setEx2Sentences({});
    setEx2PerQuestionFeedback({});
    setEx2Score(0);
    setEx2Summary("");
  };

  const handleCheckEx2 = () => {
    let score = 0;
    const perFeedback = {};

    badgeEx2Questions.forEach((q) => {
      const shortRaw = ex2ShortAnswers[q.id] || "";
      const sentenceRaw = ex2Sentences[q.id] || "";

      const short = (shortRaw || "").trim().toLowerCase();
      const normalizedSentence = normalizeAnswer(sentenceRaw);

      const expectedShort = (q.correctShort || "").trim().toLowerCase();

      // Accept the main expected sentence + any alternatives provided by data
      const expectedList = [];
      if (q.sentence) expectedList.push(q.sentence);
      if (Array.isArray(q.acceptSentences)) expectedList.push(...q.acceptSentences);

      const expectedNormalizedSet = new Set(
        expectedList.map((s) => normalizeAnswer(s || "")).filter(Boolean)
      );

      let isCorrect = true;
      const parts = [];

      if (!short) {
        isCorrect = false;
        parts.push("Selectează Yes / No.");
      } else if (short !== expectedShort) {
        isCorrect = false;
        parts.push("Verifică răspunsul Yes / No.");
      }

      if (!normalizedSentence) {
        isCorrect = false;
        parts.push("Scrie propoziția completă.");
      } else if (!expectedNormalizedSet.has(normalizedSentence)) {
        isCorrect = false;
        parts.push("Verifică forma propoziției.");
      }

      if (isCorrect) {
        score++;
        perFeedback[q.id] = "Corect! ✅";
      } else {
        perFeedback[q.id] = parts.join(" ");
      }
    });

    setEx2Score(score);
    setEx2PerQuestionFeedback(perFeedback);
    setEx2Summary(
      `Scor exercițiul 2: ${score}/${badgeEx2Questions.length} întrebări corecte.`
    );
  };


  const handleDevAutofillEx2 = () => {
    const nextShort = {};
    const nextSentences = {};

    badgeEx2Questions.forEach((q) => {
      nextShort[q.id] = q.correctShort;
      nextSentences[q.id] = q.sentence;
    });

    setEx2ShortAnswers(nextShort);
    setEx2Sentences(nextSentences);
    setEx2PerQuestionFeedback({});
    setEx2Score(badgeEx2Questions.length);
    setEx2Summary(
      `Scor exercițiul 2: ${badgeEx2Questions.length}/${badgeEx2Questions.length} întrebări corecte.`
    );
  };

  const handleDevResetEx2 = () => {
    setEx2ShortAnswers({});
    setEx2Sentences({});
    setEx2PerQuestionFeedback({});
    setEx2Score(0);
    setEx2Summary("");
  };

  // ===== Exercițiul 3 – rutina elevului =====
  const [ex3Answers, setEx3Answers] = useState({});
  const [ex3Messages, setEx3Messages] = useState({});
  const [ex3Score, setEx3Score] = useState(0);
  const [ex3Summary, setEx3Summary] = useState("");

  const handleEx3Change = (index, value) => {
    const trimmed = value || "";

    setEx3Answers((prev) => ({
      ...prev,
      [index]: trimmed,
    }));

    let message = "";
    const wordCount = trimmed.trim().split(/\s+/).filter(Boolean).length;

    if (!trimmed.trim()) {
      message = "Write a sentence here.";
    } else if (wordCount < 4) {
      message = "Your sentence is too short. Write at least 4 words.";
    } else if (!/[a-zA-Z]/.test(trimmed)) {
      message = "Use letters to write your sentence.";
    }

    setEx3Messages((prev) => ({
      ...prev,
      [index]: message,
    }));
  };

  const handleRetryEx3 = () => {
    setEx3Answers({});
    setEx3Messages({});
    setEx3Score(0);
    setEx3Summary("");
  };

  const handleCheckEx3 = () => {
    let score = 0;
    const nextMessages = {};

    badgeEx3Prompts.forEach((_, index) => {
      const idx = index + 1;
      // ex3Answers is keyed 1..N (idx), matching the legacy HTML.
      const sentence = ex3Answers[idx] || "";
      const trimmed = sentence.trim();
      const wordCount = trimmed.split(/\s+/).filter(Boolean).length;

      let msg = "";

      if (!trimmed) {
        msg = "Write a sentence here.";
      } else if (wordCount < 4) {
        msg = "Your sentence is too short. Write at least 4 words.";
      } else if (!/[a-zA-Z]/.test(trimmed)) {
        msg = "Use letters to write your sentence.";
      } else {
        score++;
        msg = "";
      }

      nextMessages[idx] = msg;
    });

    setEx3Messages(nextMessages);
    setEx3Score(score);
    setEx3Summary(
      `Scor exercițiul 3: ${score}/${badgeEx3Prompts.length} propoziții valide.`
    );
  };

  const handleDevAutofillEx3 = () => {
    const examples = [
      "I wake up at 7 o'clock every day.",
      "I always eat breakfast with my family.",
      "I go to school by bus in the morning.",
      "I do my homework in the afternoon.",
      "I never watch TV late at night.",
      "On Sundays I visit my grandparents.",
    ];

    const nextAnswers = {};
    const nextMessages = {};

    badgeEx3Prompts.forEach((_, index) => {
      const idx = index + 1;
      const sentence = examples[index] || "";
      nextAnswers[idx] = sentence;
      nextMessages[idx] = sentence ? "" : "Write a sentence here.";
    });

    setEx3Answers(nextAnswers);
    setEx3Messages(nextMessages);

    const fullScore = badgeEx3Prompts.length;
    setEx3Score(fullScore);
    setEx3Summary(`Scor exercițiul 3: ${fullScore}/${badgeEx3Prompts.length}`);
  };

  const handleDevResetEx3 = () => {
    setEx3Answers({});
    setEx3Messages({});
    setEx3Score(0);
    setEx3Summary("");
  };

  // ===== Verificare finală badge =====
  const [badgeResult, setBadgeResult] = useState("");
  const [badgeMessage, setBadgeMessage] = useState("");
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  // Buton "Resetează pentru exersare" – vizibil doar după ce badge-ul a fost obținut
  const practiceResetVisible = badgeUnlocked || roomState.passed;

  useEffect(() => {
  // Inițializăm starea globală a badge-ului (progressManager) și rehidratăm răspunsurile.
  // Regula:
  //  - dacă există "draft" -> îl încărcăm (pentru a păstra munca elevului + reset-ul de practică)
  //  - altfel, dacă badge-ul este trecut -> încărcăm "master" (răspunsurile oficiale de la 100%)
  //  - păstrăm master-ul în state chiar dacă afișăm draft-ul, ca să nu îl suprascriem accidental
  const hydrateFrom = (payload) => {
    if (!payload || typeof payload !== "object") return;

    // Ex1
    if (Array.isArray(payload.ex1Slots)) {
      if (payload.ex1Slots.length === badgeStoryConfig.slotAnswers.length) {
        setEx1Slots(payload.ex1Slots);
        setActivePick(null);
        if (Array.isArray(payload.ex1VerbPool)) {
          setVerbPool(payload.ex1VerbPool);
        } else {
          setVerbPool(computePoolFromSlots(payload.ex1Slots));
        }
      }
    }

    // Ex2
    if (payload.ex2ShortAnswers && typeof payload.ex2ShortAnswers === "object") {
      setEx2ShortAnswers(payload.ex2ShortAnswers);
    }
    if (payload.ex2Sentences && typeof payload.ex2Sentences === "object") {
      setEx2Sentences(payload.ex2Sentences);
    }

    // Ex3
    if (payload.ex3Answers && typeof payload.ex3Answers === "object") {
      setEx3Answers(payload.ex3Answers);
    }
  };

  try {
    const state = progressManager.getRoomState(SECTION_ID, ROOM_NUMBER);
    setRoomState(state);

    // Citește master (dacă există) – îl ținem în state chiar dacă elevul lucrează pe draft
    let savedMaster = null;
    try {
      savedMaster = storage.get(MASTER_ANSWERS_KEY, null);
      if (savedMaster && typeof savedMaster === "object") {
        setMasterAnswers(savedMaster);
      }
    } catch (err) {
      console.warn("Badge master answers read failed", err);
    }

    // Citește draft (dacă există) – acesta are prioritate la rehidratare
    let savedDraft = null;
    try {
      savedDraft = storage.get(DRAFT_ANSWERS_KEY, null);
    } catch (err) {
      console.warn("Badge draft answers read failed", err);
    }

    if (savedDraft) {
      hydrateFrom(savedDraft);
    } else if (state && state.passed && savedMaster) {
      hydrateFrom(savedMaster);
    }

    if (state && state.passed) {
      setBadgeUnlocked(true);

      let initialPercent = 100;
      if (typeof state.firstAttemptScore === "number") {
        initialPercent = state.firstAttemptScore;
        if (initialPercent < 100) initialPercent = 100;
      }
      setBadgePercent(initialPercent);
    }
  } catch (err) {
    console.warn("Progress manager init failed for badge", err);
  }

  // După ce am încercat să rehidratăm, permitem autosave-ul draft-ului
  setDidInit(true);
}, []);

// Autosave draft: păstrăm răspunsurile curente (și reset-ul de practică) la revenire în cameră.
useEffect(() => {
  if (!didInit) return;

  const draft = {
    ex1Slots: Array.isArray(ex1Slots) ? [...ex1Slots] : [],
    ex1VerbPool: Array.isArray(verbPool) ? [...verbPool] : [],
    ex2ShortAnswers:
      ex2ShortAnswers && typeof ex2ShortAnswers === "object"
        ? { ...ex2ShortAnswers }
        : {},
    ex2Sentences:
      ex2Sentences && typeof ex2Sentences === "object" ? { ...ex2Sentences } : {},
    ex3Answers:
      ex3Answers && typeof ex3Answers === "object" ? { ...ex3Answers } : {},
  };

  try {
    storage.set(DRAFT_ANSWERS_KEY, draft);
  } catch (err) {
    console.warn("Badge draft answers persist failed", err);
  }
}, [didInit, ex1Slots, verbPool, ex2ShortAnswers, ex2Sentences, ex3Answers]);

  const handlePracticeReset = () => {
    // Exercițiul 1 – reset complet (ca în HTML vechi: repornește + reshuffle pool)
    setActivePick(null);
    setEx1Slots(badgeStoryConfig.slotAnswers.map(() => ""));
    setVerbPool(shuffleList([...badgeStoryConfig.verbs]));
    setEx1Score(0);
    setEx1Feedback("");

    // Exercițiul 2
    setEx2ShortAnswers({});
    setEx2Sentences({});
    setEx2PerQuestionFeedback({});
    setEx2Score(0);
    setEx2Summary("");

    // Exercițiul 3
    setEx3Answers({});
    setEx3Messages({});
    setEx3Score(0);
    setEx3Summary("");

    // Rezultatul final pentru badge – îl ștergem ca să poată reface verificarea de la zero,
    // dar păstrăm badge-ul și procentul 100% (dacă au fost deja obținute).
    setBadgeResult("");
  };

  const handleCheckBadge = () => {
const max1 = badgeStoryConfig.slotAnswers.length;
const max2 = badgeEx2Questions.length;
const max3 = badgeEx3Prompts.length;

// IMPORTANT: Scorul final se calculează din răspunsurile curente,
// nu din scorurile intermediare (Ex1/Ex2/Ex3). Astfel, elevul poate
// verifica badge-ul chiar dacă nu a apăsat "Verifică" pe fiecare exercițiu.
let score1 = 0;
const correct1 = badgeStoryConfig.slotAnswers;
ex1Slots.forEach((value, idx) => {
  const user = (value || "").trim().toLowerCase();
  const target = (correct1[idx] || "").trim().toLowerCase();
  if (user && user === target) score1++;
});

let score2 = 0;
badgeEx2Questions.forEach((q) => {
  const short = ((ex2ShortAnswers[q.id] || "") + "").trim().toLowerCase();
  const sentenceRaw = ex2Sentences[q.id] || "";
  const normalizedSentence = normalizeAnswer(sentenceRaw);

  const expectedShort = ((q.correctShort || "") + "").trim().toLowerCase();

  const expectedList = [];
  if (q.sentence) expectedList.push(q.sentence);
  if (Array.isArray(q.acceptSentences)) expectedList.push(...q.acceptSentences);

  const expectedNormalizedSet = new Set(
    expectedList.map((s) => normalizeAnswer(s || "")).filter(Boolean)
  );

  const isCorrectShort = !!short && short === expectedShort;
  const isCorrectSentence =
    !!normalizedSentence && expectedNormalizedSet.has(normalizedSentence);

  if (isCorrectShort && isCorrectSentence) score2++;
});

let score3 = 0;
badgeEx3Prompts.forEach((_, idx) => {
  const sentence = ex3Answers[idx + 1] || "";
  const trimmed = (sentence || "").trim();
  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;

  if (
    trimmed &&
    wordCount >= 4 &&
    /[a-zA-Z]/.test(trimmed)
  ) {
    score3++;
  }
});

const totalScore = score1 + score2 + score3;
const totalMax = max1 + max2 + max3;
const percent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

    let nextState = roomState;
    try {
      if (roomState.firstAttemptScore === null) {
        nextState = progressManager.setFirstAttempt(
          SECTION_ID,
          ROOM_NUMBER,
          percent
        );
      } else {
        nextState = progressManager.recordAttempt(
          SECTION_ID,
          ROOM_NUMBER,
          percent
        );
      }

      if (!roomState.passed && nextState.passed) {
        setBadgeUnlocked(true);
      }
    } catch (err) {
      console.warn("Badge progress update failed", err);
    }
    setRoomState(nextState);

    const visualPercent = nextState.passed ? 100 : percent;
    setBadgePercent(visualPercent);

    setBadgeResult(
      `Scor total badge (Ex.1 + Ex.2 + Ex.3): ${totalScore}/${totalMax} (${percent}%)`
    );

    if (percent === 100) {
      setBadgeMessage(
        "Perfect! Ai obținut badge-ul Present Simple! Îl găsești și în hub."
      );

      // Dacă este prima dată când ajungem la 100% (sau nu avem încă masterAnswers),
      // salvăm răspunsurile curente ca "oficiale" pentru badge.
      if (!masterAnswers) {
        const newMaster = {
          ex1Slots: [...ex1Slots],
          ex2ShortAnswers: { ...ex2ShortAnswers },
          ex2Sentences: { ...ex2Sentences },
          ex3Answers: { ...ex3Answers },
        };
        setMasterAnswers(newMaster);
        try {
          storage.set(MASTER_ANSWERS_KEY, newMaster);
        } catch (err) {
          console.warn("Badge master answers persist failed", err);
        }
      }

      // Dacă badge-ul nu era încă "oficial" în progressManager, îl marcăm aici.
      try {
        const ensuredState = progressManager.ensureBadgeUnlocked(
          SECTION_ID,
          ROOM_NUMBER
        );
        setRoomState(ensuredState);
        setBadgeUnlocked(true);
      } catch (err) {
        console.warn("Badge ensure unlock failed", err);
      }
    } else {
      // nu revocăm badge-ul dacă a fost deja obținut; elevul poate exersa în continuare
      setBadgeMessage(
        "Mai ai puțin până la 100%. Corectează răspunsurile și verifică din nou."
      );
      // la fel, nu schimbăm badgeUnlocked aici
    }
  };

  const handleRetryForKey = () => {};

  const handleDevAutofill = () => {
    if (!DEV_MODE) return;
    handleDevAutofillEx1();
    handleDevAutofillEx2();
    handleDevAutofillEx3();
  };

  const handleDevReset = () => {
    try {
      const newState = progressManager.resetRoom(SECTION_ID, ROOM_NUMBER);
      setRoomState(newState);
    } catch (err) {
      console.warn("Badge progress reset failed", err);
    }

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

  const lexHints = presentSimpleBadgeLexHints.final || [];

  return (
    <PsRoomTemplateV1
      sectionId={SECTION_ID}
      sectionLabel="Badge"
      roomNumber={ROOM_NUMBER}
      lexHints={lexHints}
      theoryRoute={psTheoryPath("affirmative")}
      // Badge este o pagină specială: își gestionează singură logica (scor, storage, gating).
      // Folosim template-ul doar ca shell (HUD + DevTools + Lex Junior panel), fără engine-ul standard.
      shell={{
        answers: null,
        feedback: null,
        lastResult: null,
        roomState,
        keyButtonVisible: false,
        practiceResetVisible,
        hudRootRef,
        onRetryForKey: handleRetryForKey,
        onPracticeReset: handlePracticeReset,
        onDevAutofill: handleDevAutofill,
        onDevReset: handleDevReset,
        onChange: null,
        handleVerify: null,
      }}
      showDictionaryCard={false}
      renderBody={() => (
        <>
          {/* Introducere badge */}
          <section className="card">
            <h2 className="card-title">Provocarea finală – Badge Present Simple</h2>
            <p className="card-description">
              Aceasta este camera specială a badge-ului. Rezolvă corect toate
              exercițiile. Dacă obții 100% la verificarea finală, primești badge-ul
              Present Simple!
            </p>
          </section>

          {/* Exercițiul 1 */}
          <section className="card">
        <h2 className="card-title">Exercițiul 1 – Completează povestea</h2>
        <p className="card-description">
          Citește povestea și completează verbele lipsă în Present Simple. Ai 20
          de verbe amestecate în partea dreaptă (sau în panoul pentru mobil).
        </p>

        <PsMiniDictionaryCard
          description="Citește cuvintele și expresiile de mai jos, ascultă pronunția cu 🔊 și folosește-le ca ajutor pentru poveste."
          items={badgeMiniDictionaryItems}
        />

        <div className="matching-layout">
          <div className="matching-left">
            <div className="badge-story">
              <div className="exercise-row exercise-row--matching">
                <div className="exercise-header-row">
                  <div className="exercise-text">
                    <p>
                      Every day in my family starts differently for each of us.
                      I have my own routine, and my brother has his, and they
                      almost never look the same. That’s why our daily schedules
                      feel like two separate little stories.
                    </p>

                    <p>
                      <strong>Paragraph 2 — I</strong>
                    </p>

                    <p>
                      I usually{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(0)}
                      >
                        {ex1Slots[0] || "_____"}
                      </button>{" "}
                      at 7 a.m., and the first thing I do is{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(1)}
                      >
                        {ex1Slots[1] || "_____"}
                      </button>{" "}
                      a quick cup of coffee.
                    </p>

                    <p>
                      I{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(2)}
                      >
                        {ex1Slots[2] || "_____"}
                      </button>{" "}
                      my messages, then I{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(3)}
                      >
                        {ex1Slots[3] || "_____"}
                      </button>{" "}
                      preparing for school.
                    </p>

                    <p>
                      I always{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(4)}
                      >
                        {ex1Slots[4] || "_____"}
                      </button>{" "}
                      the house around 7:45 because I{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(5)}
                      >
                        {ex1Slots[5] || "_____"}
                      </button>{" "}
                      to walk slowly and enjoy the quiet morning.
                    </p>

                    <p>
                      During the day, I{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(6)}
                      >
                        {ex1Slots[6] || "_____"}
                      </button>{" "}
                      , teach, and work on different projects.
                    </p>

                    <p>
                      In the afternoon, I often{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(7)}
                      >
                        {ex1Slots[7] || "_____"}
                      </button>{" "}
                      my friends or{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(8)}
                      >
                        {ex1Slots[8] || "_____"}
                      </button>{" "}
                      something relaxing.
                    </p>

                    <p>
                      I usually{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(9)}
                      >
                        {ex1Slots[9] || "_____"}
                      </button>{" "}
                      around 6 p.m., cook something simple, and finish my homework
                      or plan lessons for the next day.
                    </p>

                    <p>
                      <strong>Paragraph 3 — He</strong>
                    </p>

                    <p>
                      My brother, on the other hand,{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(10)}
                      >
                        {ex1Slots[10] || "_____"}
                      </button>{" "}
                      much later.
                    </p>

                    <p>
                      He normally{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(11)}
                      >
                        {ex1Slots[11] || "_____"}
                      </button>{" "}
                      the news,{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(12)}
                      >
                        {ex1Slots[12] || "_____"}
                      </button>{" "}
                      a big breakfast, and{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(13)}
                      >
                        {ex1Slots[13] || "_____"}
                      </button>{" "}
                      at his computer around 10.
                    </p>

                    <p>
                      He{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(14)}
                      >
                        {ex1Slots[14] || "_____"}
                      </button>{" "}
                      most of the afternoon gaming or working on tech projects.
                    </p>

                    <p>
                      In the evening, he sometimes{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(15)}
                      >
                        {ex1Slots[15] || "_____"}
                      </button>{" "}
                      with friends or{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(16)}
                      >
                        {ex1Slots[16] || "_____"}
                      </button>{" "}
                      food online because he{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(17)}
                      >
                        {ex1Slots[17] || "_____"}
                      </button>{" "}
                      cooking.
                    </p>

                    <p>
                      He usually{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(18)}
                      >
                        {ex1Slots[18] || "_____"}
                      </button>{" "}
                      from home and{" "}
                      <button
                        type="button"
                        className="badge-slot-btn"
                        onClick={() => handleSlotClick(19)}
                      >
                        {ex1Slots[19] || "_____"}
                      </button>{" "}
                      after midnight, while I’m already asleep.
                    </p>

                    <p>
                      Even though our days are different, we still find time to talk,
                      laugh, and share small moments. And maybe that’s what really
                      matters in a family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="matching-right">
            <div className="matching-options">
              {verbPool.map((verb) => {
                const isActive = activePick && activePick.source === "pool" && activePick.value === verb;
                const optionClasses = ["matching-option"];
                if (isActive) optionClasses.push("matching-option--selected");

                return (
                  <button
                    key={verb}
                    type="button"
                    className={optionClasses.join(" ")}
                    onClick={() => handlePickVerb(verb)}
                  >
                    {verb}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {ex1Score === badgeStoryConfig.slotAnswers.length && (
          <div className="exercise-listen">
            {/* Handler-ul global e acum React-pur (SpeechSynthesis) */}
            <button
              type="button"
              className="lex-voice-btn button secondary"
              data-tts={badgeStoryTtsText}
              aria-label="Ascultă povestea completă"
            >
              🔊 Ascultă povestea completă
            </button>
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
            const hasSentenceBox = !!short;
            const shortLabel = q.shortLabels[short] || "";
            const answerTts = [shortLabel, sentence].filter(Boolean).join(" ");
            const canListenAnswer = !!answerTts && !!ex2Summary;

            return (
              <article key={q.id} className="ex2-card" data-q={q.id}>
                <p className="ex2-question">
                  {q.id}. {q.question}{" "}
                  <LexTtsButton
                    text={q.question}
                    ariaLabel={`Ascultă întrebarea ${q.id}`}
                  />
                </p>
                <div className="ex2-short">
                  <label>
                    <input
                      type="radio"
                      name={`ex2-q${q.id}`}
                      value="yes"
                      checked={short === "yes"}
                      onChange={() => handleEx2ShortChange(q.id, "yes")}
                    />
                    {q.shortLabels.yes}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`ex2-q${q.id}`}
                      value="no"
                      checked={short === "no"}
                      onChange={() => handleEx2ShortChange(q.id, "no")}
                    />
                    {q.shortLabels.no}
                  </label>
                </div>
                {hasSentenceBox && (
                  <div className="ex2-sentence" data-sentence-box="">
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
        <h2 className="card-title">Exercițiul 3 – Rutina ta zilnică</h2>
        <p className="card-description">
          Scrie 5 propoziții despre rutina ta zilnică, folosind Present Simple.
          Fiecare propoziție trebuie să aibă cel puțin 4 cuvinte și să
          folosească un verb la Present Simple.
        </p>

        <div className="ex3-list" id="exercise-3">
          {badgeEx3Prompts.map((prompt, index) => {
            const idx = index + 1;
            const value = ex3Answers[idx] || "";
            const msg = ex3Messages[idx] || "";
            return (
              <div key={idx} className="ex3-row" data-s={idx}>
                <label>
                  {idx}. {prompt}
                  <textarea
                    className="ex3-input"
                    rows={2}
                    value={value}
                    onChange={(e) => handleEx3Change(idx, e.target.value)}
                  />{" "}
                  {value.trim() && (
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
          Când ești gata, apasă pe butonul de mai jos ca să calculezi scorul
          final pentru toate cele trei exerciții.
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
          <div className="exercise-score">
            <p>{badgeMessage}</p>
          </div>
        )}

        {badgeUnlocked && (
          <div className="badge-reward" id="badge-reward">
            <p className="badge-reward__text">
              Felicitări! Ai obținut badge-ul <strong>Present Simple</strong>! 🎉
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
      )}
    />
  );
}
