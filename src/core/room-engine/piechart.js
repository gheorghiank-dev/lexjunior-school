export function renderPiechart(canvas, percent) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = Math.min(canvas.width, canvas.height);
  const center = size / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // cercul de fundal
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
  ctx.beginPath();
  ctx.arc(center, center, center - 8, 0, Math.PI * 2);
  ctx.stroke();

  // arcul de progres
  const angle = ((percent ?? 0) / 100) * Math.PI * 2;
  ctx.strokeStyle = "#38bdf8";
  ctx.beginPath();
  ctx.arc(center, center, center - 8, -Math.PI / 2, angle - Math.PI / 2, false);
  ctx.stroke();

  // procentul la mijloc
  ctx.fillStyle = "#0f172a";
  ctx.font =
    "bold 20px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${Math.round(percent ?? 0)}%`, center, center);
}
