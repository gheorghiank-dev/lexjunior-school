// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../core/platform/browser-dom.js";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll instant la începutul paginii de fiecare dată când se schimbă ruta
    scrollToTop({ smooth: false });
  }, [location.pathname]);

  return null;
}
