import React from "react";

export default function TenseStructureBox({
  title,
  children,
  className = "",
}) {
  const rootClassName = ["lj-structure-box", "theory-structure-box", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      {title ? <h3 className="ps-structure-title">{title}</h3> : null}
      {children}
    </div>
  );
}
