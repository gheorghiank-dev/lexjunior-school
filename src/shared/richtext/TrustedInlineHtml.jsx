import React from "react";
import { renderTrustedInlineHtml } from "./trustedInlineHtmlRenderer.jsx";

export default function TrustedInlineHtml({ html }) {
  return <>{renderTrustedInlineHtml(html)}</>;
}
