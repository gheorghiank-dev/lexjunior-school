// Present Perfect module config

export const PRESENT_PERFECT_STORAGE_PREFIX = "pas_";
export const PRESENT_PERFECT_ROOMS_PER_SECTION = 7;

export const PRESENT_PERFECT_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Present Perfect.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Present Perfect.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Present Perfect.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Present Perfect.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru Present Perfect.",
  },
];

export const STORAGE_PREFIX = PRESENT_PERFECT_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = PRESENT_PERFECT_ROOMS_PER_SECTION;
export const SECTIONS = PRESENT_PERFECT_SECTIONS;

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

export const PRESENT_PERFECT_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const PRESENT_PERFECT_DEV_MODE = DEV_MODE;
