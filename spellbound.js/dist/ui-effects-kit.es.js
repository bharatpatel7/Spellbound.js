function s(o = "rgba(0, 150, 255, 0.3)", t = 50) {
  const e = document.createElement("div");
  e.style.position = "fixed", e.style.pointerEvents = "none", e.style.borderRadius = "50%", e.style.background = o, e.style.width = `${t}px`, e.style.height = `${t}px`, e.style.zIndex = "9999", e.style.transition = "transform 0.1s ease-out", e.style.mixBlendMode = "lighten", document.body.appendChild(e), document.addEventListener("mousemove", (n) => {
    e.style.transform = `translate(${n.clientX - t / 2}px, ${n.clientY - t / 2}px)`;
  });
}
export {
  s as useCursorGlow
};
