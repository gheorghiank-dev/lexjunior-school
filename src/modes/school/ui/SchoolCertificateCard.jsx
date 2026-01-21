import React, { useMemo, useState } from "react";
import { useStudentName } from "../student-name-manager.js";
import { buildStudentCode } from "../fnv1a.js";
import {
  downloadPdfBytes,
  generateCertificatePdf,
  loadCertificateTemplateBytes,
} from "../certificate/index.js";

function formatDateRo(d = new Date()) {
  try {
    return d.toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

export default function SchoolCertificateCard({
  tenseId,
  tenseLabel,
  templateUrl,
  layout,
  title = "Diplomă (School Mode)",
  locked = false,
  lockedReason = "Finalizează provocarea finală (Badge) ca să generezi diploma.",
}) {
  const { studentName } = useStudentName(tenseId);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const hasName = Boolean((studentName || "").trim());
  const disabled = locked || !hasName || !templateUrl || status === "working";

  const code = useMemo(() => {
    if (!hasName) return "";
    return buildStudentCode(studentName, tenseId);
  }, [hasName, studentName, tenseId]);

  const helperText = useMemo(() => {
    if (!templateUrl) {
      return "Template-ul pentru diplomă nu este configurat pentru acest timp.";
    }
    if (!hasName) {
      return "Salvează mai întâi numele elevului, apoi generezi diploma.";
    }
    if (locked) {
      return lockedReason || "Diploma este blocată momentan.";
    }
    return "Generează o diplomă PDF în browser folosind template-ul (background) existent.";
  }, [templateUrl, hasName, locked, lockedReason]);

  return (
    <section
      className="card"
      style={{ marginTop: "1rem" }}
      data-testid={`school-certificate-${tenseId}`}
    >
      <div className="card-title">{title}</div>
      <p className="card-description">{helperText}</p>

      {hasName ? (
        <div style={{ fontSize: "0.9rem" }}>
          Elev: <strong>{studentName}</strong>
          {code ? (
            <>
              {" "}• Cod: <strong>{code}</strong>
            </>
          ) : null}
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          marginTop: "0.8rem",
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          disabled={disabled}
          onClick={async () => {
            if (disabled) return;
            setError("");
            setStatus("working");
            try {
              const templateBytes = await loadCertificateTemplateBytes(templateUrl);
              const dateLabel = formatDateRo(new Date());
              const pdfBytes = await generateCertificatePdf({
                templateBytes,
                studentName,
                studentCode: code,
                dateLabel,
                tenseLabel,
                layout,
              });
              const safeTense = (tenseLabel || tenseId || "tense")
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9\-]/g, "")
                .toLowerCase();
              const safeName = (studentName || "student")
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9\-]/g, "")
                .toLowerCase();
              downloadPdfBytes(pdfBytes, `diploma-${safeTense}-${safeName}.pdf`);
              setStatus("idle");
            } catch (e) {
              setError(e?.message || "Nu am putut genera diploma.");
              setStatus("idle");
            }
          }}
        >
          {status === "working" ? "Generez..." : locked ? "Diplomă blocată" : "Generează diploma"}
        </button>
      </div>

      {error ? (
        <div
          style={{
            marginTop: "0.75rem",
            padding: "0.6rem 0.75rem",
            borderRadius: "12px",
            background: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.25)",
            color: "#7f1d1d",
            fontSize: "0.9rem",
          }}
        >
          {error}
        </div>
      ) : null}
    </section>
  );
}
