import React from "react";

// Very small, intentionally limited HTML -> React renderer.
// Supported tags: <br>, <strong>, <em>, <img>
// Everything else is treated as plain text.
// Use ONLY for trusted, internal content strings.

function parseImgAttrs(tag) {
  // tag like: <img src='...' alt="..." class='x y'>
  const attrs = {};
  const attrRe = /(\w+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+))?/g;
  let m;
  while ((m = attrRe.exec(tag))) {
    const key = m[1];
    if (!key) continue;
    const raw = m[2];
    if (raw == null) {
      attrs[key] = true;
      continue;
    }
    const val = raw.startsWith('"') || raw.startsWith("'") ? raw.slice(1, -1) : raw;
    attrs[key] = val;
  }
  return attrs;
}

export function renderTrustedInlineHtml(html) {
  if (typeof html !== "string" || !html.trim()) return null;

  const tokens = html.split(/(<[^>]+>)/g).filter(Boolean);

  const root = [];
  const stack = [{ type: "root", children: root }];

  let key = 0;
  const pushNode = (node) => {
    stack[stack.length - 1].children.push(node);
  };

  for (const t of tokens) {
    if (!t) continue;

    // Text
    if (t[0] !== "<") {
      // Preserve whitespace as-is.
      pushNode(t);
      continue;
    }

    const tag = t.trim();
    const lower = tag.toLowerCase();

    // <br>
    if (lower.startsWith("<br")) {
      pushNode(<br key={`br-${key++}`} />);
      continue;
    }

    // <strong>
    if (lower === "<strong>") {
      const children = [];
      pushNode(
        <strong key={`strong-${key++}`}>{children}</strong>
      );
      stack.push({ type: "strong", children });
      continue;
    }
    if (lower === "</strong>") {
      // Pop until matching strong (defensive)
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].type === "strong") {
          stack.splice(i, 1);
          break;
        }
      }
      continue;
    }

    // <em>
    if (lower === "<em>") {
      const children = [];
      pushNode(<em key={`em-${key++}`}>{children}</em>);
      stack.push({ type: "em", children });
      continue;
    }
    if (lower === "</em>") {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].type === "em") {
          stack.splice(i, 1);
          break;
        }
      }
      continue;
    }

    // <img ...>
    if (lower.startsWith("<img")) {
      const attrs = parseImgAttrs(tag);
      const src = typeof attrs.src === "string" ? attrs.src : undefined;
      const alt = typeof attrs.alt === "string" ? attrs.alt : "";
      const className = typeof attrs.class === "string" ? attrs.class : undefined;

      // Only allow safe attributes.
      pushNode(
        <img
          key={`img-${key++}`}
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
        />
      );
      continue;
    }

    // Unknown tag: ignore it (do not inject raw HTML).
    // If you ever need more tags, add them explicitly above.
  }

  return root;
}
