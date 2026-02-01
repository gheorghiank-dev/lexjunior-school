import React from "react";

export default function PsCopyrightFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ps-footer" aria-label="Copyright">
      © {year} Colecția Anca &amp; Lex — Escape Room. All rights reserved.
    </footer>
  );
}
