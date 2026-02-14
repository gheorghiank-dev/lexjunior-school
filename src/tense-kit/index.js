// TenseKit v1 – public entrypoint
// -----------------------------------------------
// This module centralizes the contract for tense modules.
//
// It complements (but does not replace) the engine‑level helper
// `createTenseModule` that already lives in src/core/tense/tense-kit.js.
// Existing imports from "../../core/tense/tense-kit.js" are left
// untouched for backwards compatibility, but we re‑export the helper
// here so future tenses can depend only on this folder.

export { createTenseModule } from "../core/tense/tense-kit.js";

export * from "./tense-schema.js";
export * from "./tense-manifest.js";
export * from "./tense-rooms-schema.js";
export * from "./tense-theory-schema.js";
export * from "./tense-theme.js";
