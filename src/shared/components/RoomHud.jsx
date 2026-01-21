import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { renderPiechart } from "../../core/room-engine/piechart.js";

/**
 * React-driven HUD root.
 *
 * The room engine instantiates `new HUD(hudRootRef.current)` and calls:
 *   - setProgress(percent)
 *   - setKeyState({ hasKey, passed })
 *   - showMessage(text, type)
 *
 * To keep the engine unchanged while eliminating DOM querySelector/textContent work,
 * we attach an imperative API to the DOM element: `root.__hudApi`.
 */
const RoomHud = React.forwardRef(function RoomHud(
  {
    sectionLabel,
    roomLabel,
    actions,
    // Optional controlled props (useful outside the room engine, e.g. Badge)
    percent: controlledPercent,
    keyIcon: controlledKeyIcon,
    keyLabel: controlledKeyLabel,
    messageText: controlledMessageText,
    messageType: controlledMessageType,
  },
  forwardedRef
) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  const [percentState, setPercentState] = useState(0);
  const [keyIconState, setKeyIconState] = useState("🔒");
  const [keyLabelState, setKeyLabelState] = useState("Cheia nu este obtinuta.");
  const [messageTextState, setMessageTextState] = useState("");
  const [messageTypeState, setMessageTypeState] = useState("info");

  const effectivePercent =
    typeof controlledPercent === "number" ? controlledPercent : percentState;
  const effectiveKeyIcon =
    typeof controlledKeyIcon === "string" ? controlledKeyIcon : keyIconState;
  const effectiveKeyLabel =
    typeof controlledKeyLabel === "string" ? controlledKeyLabel : keyLabelState;
  const effectiveMessageText =
    typeof controlledMessageText === "string"
      ? controlledMessageText
      : messageTextState;
  const effectiveMessageType =
    typeof controlledMessageType === "string"
      ? controlledMessageType
      : messageTypeState;

  const drawPie = useCallback((value) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      renderPiechart(canvas, value ?? 0);
    } catch {
      // ignore canvas/context issues
    }
  }, []);

  useEffect(() => {
    drawPie(effectivePercent);
  }, [drawPie, effectivePercent]);

  const api = useMemo(() => {
    return {
      setProgress: (value) => {
        setPercentState(value ?? 0);
        drawPie(value ?? 0);
      },
      setKeyState: ({ icon, label }) => {
        if (typeof icon === "string") setKeyIconState(icon);
        if (typeof label === "string") setKeyLabelState(label);
      },
      showMessage: (text, type = "info") => {
        setMessageTextState(text || "");
        setMessageTypeState(type || "info");
      },
    };
  }, [drawPie]);

  const setMergedRef = useCallback(
    (node) => {
      rootRef.current = node;

      // Attach the API for the room engine / HUD class.
      if (node) {
        node.__hudApi = api;
      }

      // Forward the ref to callers (the room engine keeps a ref to the same node).
      if (!forwardedRef) return;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else {
        forwardedRef.current = node;
      }
    },
    [api, forwardedRef]
  );

  const baseMessageClass = "message";
  const typeClass = effectiveMessageType
    ? `${baseMessageClass}--${effectiveMessageType}`
    : "";
  const messageClass = typeClass
    ? `${baseMessageClass} ${typeClass}`
    : baseMessageClass;

  return (
    <div className="hud" ref={setMergedRef}>
      <canvas ref={canvasRef} data-hud-pie width="120" height="120" />
      <div className="info">
        <div>
          <strong>Sectiune:</strong> {sectionLabel} – <strong>{roomLabel}</strong>
        </div>

        <div className="key-status">
          <span className="icon" data-hud-key>
            {effectiveKeyIcon}
          </span>
          <span data-hud-key-label>{effectiveKeyLabel}</span>
        </div>

        <div className={messageClass} data-hud-message>
          {effectiveMessageText}
        </div>

        {actions ? (
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default RoomHud;
