function f(r = "rgba(0, 150, 255, 0.3)", t = 50) {
  const e = document.createElement("div");
  e.style.position = "fixed", e.style.pointerEvents = "none", e.style.borderRadius = "50%", e.style.background = r, e.style.width = `${t}px`, e.style.height = `${t}px`, e.style.zIndex = "9999", e.style.transition = "transform 0.1s ease-out", e.style.mixBlendMode = "lighten", document.body.appendChild(e), document.addEventListener("mousemove", (n) => {
    e.style.transform = `translate(${n.clientX - t / 2}px, ${n.clientY - t / 2}px)`;
  });
}
function g(r, t = {}) {
  const {
    rootMargin: e = "0px 0px -10% 0px",
    threshold: n = 0.1,
    animationClass: m = "sb-fade-in"
  } = t, s = document.querySelectorAll(r), l = new IntersectionObserver(
    (c) => {
      for (const o of c)
        o.isIntersecting && (o.target.classList.add(`${m}-active`), l.unobserve(o.target));
    },
    { rootMargin: e, threshold: n }
  );
  s.forEach((c) => l.observe(c));
}
function x(r, t) {
  const {
    text: e,
    speed: n = 100,
    loop: m = !0,
    deleteDelay: s = 1500,
    typingDelay: l = 500,
    cursorChar: c = "|"
  } = t, o = document.querySelector(r);
  if (!o) return;
  let h = 0, i = 0, a = !1;
  const d = document.createElement("span");
  d.textContent = c, d.className = "sb-cursor", o.appendChild(d);
  const u = () => {
    const p = e[h], y = a ? p.substring(0, i--) : p.substring(0, i++);
    o.childNodes[0].textContent = y, !a && i === p.length + 1 ? (a = !0, setTimeout(u, s)) : a && i === 0 ? (a = !1, h = (h + 1) % e.length, setTimeout(u, l)) : setTimeout(u, n);
  };
  o.innerHTML = "<span></span>", o.appendChild(d), setTimeout(u, l);
}
function b(r) {
  const t = document.documentElement, e = localStorage.getItem("spellbound-theme"), n = (s) => {
    t.setAttribute("data-theme", s), localStorage.setItem("spellbound-theme", s);
  };
  if (n(e || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")), r) {
    const s = document.querySelector(r);
    s && s.addEventListener("click", () => {
      const c = t.getAttribute("data-theme") === "dark" ? "light" : "dark";
      n(c);
    });
  }
}
export {
  b as castLumosCharm,
  g as castScrollCharm,
  x as castTextIncantation,
  f as useCursorGlow
};
