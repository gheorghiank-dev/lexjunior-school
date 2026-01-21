/**
 * Lex Voice Runtime (React-pur)
 *
 * Înlocuiește scriptul legacy `/present-simple/js/ui/lex-voice.js`.
 *
 * Cum funcționează:
 * - ascultă global click-urile pe elemente cu clasa `.lex-voice-btn`
 * - citește textul din atributul `data-tts`
 * - pornește Web Speech API (speechSynthesis)
 * - folosește DOAR voci ENGLEZE (lang începe cu `en`)
 */

import { addDocumentEventListener } from "../../core/platform/browser-dom.js";

let installed = false;
let clickHandler = null;
let removeClickListener = null;

let cachedEnglishVoice = null;
let voicesPromise = null;

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function normalizeLang(lang) {
  return String(lang || "").trim().toLowerCase();
}

function isEnglishVoice(v) {
  const lang = normalizeLang(v && v.lang);
  return lang.startsWith("en");
}

function preferEnglishVoices(voices) {
  const en = (voices || []).filter(isEnglishVoice);
  if (!en.length) return null;

  const pickByLang = (wanted) =>
    en.find((v) => normalizeLang(v.lang) === normalizeLang(wanted));

  // Preferințe: en-GB (British) -> en-US -> orice en
  const exactGb = pickByLang("en-gb");
  if (exactGb) return exactGb;

  const exactUs = pickByLang("en-us");
  if (exactUs) return exactUs;

  // Dacă există o voce english setată ca default, ia-o.
  const def = en.find((v) => v.default);
  if (def) return def;

  return en[0];
}

function getVoicesFast() {
  try {
    return window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  } catch {
    return [];
  }
}

function getVoicesAsync(timeoutMs = 1200) {
  if (!isBrowser() || !window.speechSynthesis) return Promise.resolve([]);

  // Un singur "wait" shared, ca să nu facem spam de listeners.
  if (voicesPromise) return voicesPromise;

  const immediate = getVoicesFast();
  if (immediate && immediate.length) return Promise.resolve(immediate);

  voicesPromise = new Promise((resolve) => {
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      try {
        window.speechSynthesis.removeEventListener("voiceschanged", onChange);
      } catch {
        // ignore
      }
      resolve(getVoicesFast());
    };

    const onChange = () => finish();

    try {
      window.speechSynthesis.addEventListener("voiceschanged", onChange);
    } catch {
      // ignore
    }

    // Fallback: nu toate browserele trag event-ul rapid.
    setTimeout(finish, timeoutMs);
  }).finally(() => {
    voicesPromise = null;
  });

  return voicesPromise;
}

async function pickEnglishVoice() {
  if (!isBrowser() || !window.speechSynthesis) return null;
  if (cachedEnglishVoice) return cachedEnglishVoice;

  const voices = await getVoicesAsync();
  cachedEnglishVoice = preferEnglishVoices(voices);
  return cachedEnglishVoice;
}

export function cancelSpeech() {
  if (!isBrowser() || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    // ignore
  }
}

export async function speakEnglish(text, opts = {}) {
  if (!isBrowser()) return;
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;

  const cleanText = String(text || "").trim();
  if (!cleanText) return;

  // Oprim ce se citește deja (comportament "click -> citește acum").
  cancelSpeech();

  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Default-uri safe. (Dacă browserul nu găsește voice, măcar setăm limba.)
  utterance.lang = "en-US";

  const voice = await pickEnglishVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || utterance.lang;
  }

  // Opțiuni (dacă vrei vreodată control fin)
  if (typeof opts.rate === "number") utterance.rate = opts.rate;
  if (typeof opts.pitch === "number") utterance.pitch = opts.pitch;
  if (typeof opts.volume === "number") utterance.volume = opts.volume;

  try {
    window.speechSynthesis.speak(utterance);
  } catch {
    // ignore
  }
}

export function ensureLexVoiceRuntimeInstalled() {
  if (!isBrowser()) return;
  if (installed) return;
  installed = true;

  clickHandler = async (e) => {
    const target = e && e.target;
    const btn = target && target.closest ? target.closest(".lex-voice-btn") : null;
    if (!btn) return;

    const tts = btn.getAttribute("data-tts") || btn.dataset?.tts;
    if (!tts) return;

    // Nu lăsăm click-ul să declanșeze altceva (de ex. un label/drag etc.)
    e.preventDefault();

    await speakEnglish(tts);
  };

  removeClickListener = addDocumentEventListener("click", clickHandler);
}

export function uninstallLexVoiceRuntime() {
  if (!isBrowser()) return;
  if (!installed) return;

  try {
    if (removeClickListener) removeClickListener();
  } catch {
    // ignore
  }

  clickHandler = null;
  removeClickListener = null;
  installed = false;
}
