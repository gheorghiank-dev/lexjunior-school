// src/modules/tenses/core/useTenseRoomEngine.js

import { createUseRoomEngine } from "../../../core/room-engine/createUseRoomEngine.js";

/**
 * Tense-agnostic wrapper peste engine-ul generic de cameră.
 *
 * Fiecare timp (PS, PC, future etc.) apelează această funcție cu:
 *  - normalizeAnswer: funcția lui de normalizare răspunsuri
 *  - progressManager: managerul de progres pe timp (tense-progress-kit)
 *  - HUD: clasa HUD legată de textul specific timpului
 */
export function createUseTenseRoomEngine(options) {
  return createUseRoomEngine(options);
}
