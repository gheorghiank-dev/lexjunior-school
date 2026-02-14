import React from "react";
import { PS_LEX_HEAD_SVG } from "../ps-core/assets.js";
import TenseLexBubble from "../../tenses/ui/TenseLexBubble.jsx";

/**
 * Legacy Present Simple wrapper around the tense-agnostic Lex bubble.
 * Keeps existing PS behavior but delegates UI/logic to TenseLexBubble.
 */
export default function LexJunior({ hints }) {
  return <TenseLexBubble hints={hints} avatarSrc={PS_LEX_HEAD_SVG} />;
}
