export function useCursorGlow(color = "rgba(0, 150, 255, 0.3)", size = 50): void {
        const glow = document.createElement("div");
        glow.style.position = "fixed";
        glow.style.pointerEvents = "none";
        glow.style.borderRadius = "50%";
        glow.style.background = color;
        glow.style.width = `${size}px`;
        glow.style.height = `${size}px`;
        glow.style.zIndex = "9999";
        glow.style.transition = "transform 0.1s ease-out";
        glow.style.mixBlendMode = "lighten";
        document.body.appendChild(glow);
      
        document.addEventListener("mousemove", (e) => {
          glow.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
        });
      }
      