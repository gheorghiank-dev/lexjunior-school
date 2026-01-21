// School mode
// Sprint 12–14: student name + deterministic code + PDF certificate (isolated here).

export * from "./student-name-manager.js";
export * from "./fnv1a.js";
export * from "./certificate/index.js";
export { default as SchoolStudentNameCard } from "./ui/SchoolStudentNameCard.jsx";
export { default as SchoolCertificateCard } from "./ui/SchoolCertificateCard.jsx";

export const SCHOOL_MODE = {
  id: "school",
};
