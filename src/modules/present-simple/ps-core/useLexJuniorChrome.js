import { useEffect } from "react";

/**
 * Legacy hook kept for backward compatibility.
 *
 * Previously this hook was DOM-driven (initLexJunior wrote markup via innerHTML).
 * As of Sprint 4, Lex Junior is rendered as a React component (<LexJunior />),
 * so this hook intentionally does nothing.
 */
export function useLexJuniorChrome() {
  useEffect(() => {
    // no-op (React-driven Lex Junior)
  }, []);
}
