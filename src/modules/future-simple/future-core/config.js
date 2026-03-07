// Future Simple module config

export const FUTURE_SIMPLE_STORAGE_PREFIX = "pas_";
export const FUTURE_SIMPLE_ROOMS_PER_SECTION = 7;

export const FUTURE_SIMPLE_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Future Simple.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Future Simple.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Future Simple.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Future Simple.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru Future Simple.",
  },
];

export const STORAGE_PREFIX = FUTURE_SIMPLE_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = FUTURE_SIMPLE_ROOMS_PER_SECTION;
export const SECTIONS = FUTURE_SIMPLE_SECTIONS;

export const HUD_TEXT = {
  keyObtainedLabel: "Cheia este obținută.",
  keyMissingLabel: "Cheia nu este obținută.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia încă.",
  hudNear: "Încearcă din nou, ești foarte aproape!",
  hudNeedKey:
    "Ai rezolvat camera, dar ai nevoie de o încercare perfectă pentru cheie.",
  hudHasKey: "Perfect! Ai obținut cheia pentru această cameră.",
  roomNear: "Sunt câteva greșeli. Mai aruncă o privire :)",
  roomPerfect: "Bravo! Ai terminat corect această cameră!",
};

export const FUTURE_SIMPLE_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const FUTURE_SIMPLE_DEV_MODE = DEV_MODE;
