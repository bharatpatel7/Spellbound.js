/**
 * 🪄✨ Accio Cursor Glow! ✨🪄
 * Summons a magical glowing aura that follows your cursor like a loyal house-elf.
 * Perfect for adding a touch of wizardry to your web projects.
 * 
 * @param {string} color - The spell's glow color (default: "Ravenclaw blue").
 * @param {number} size - The size of the glow (default: 50px, because bigger isn't always better).
 */
export function useCursorGlow(color = "rgba(0, 150, 255, 0.3)", size = 50): void {
  // 🧙‍♂️ Conjuring the glow element
  const glow = document.createElement("div");
  glow.style.position = "fixed"; // Sticks to the viewport like a clingy poltergeist
  glow.style.pointerEvents = "none"; // No muggle interference allowed
  glow.style.borderRadius = "50%"; // Because magic is always smooth
  glow.style.background = color; // The glow's enchanting hue
  glow.style.width = `${size}px`; // Lumos Maxima! (but not too maxima)
  glow.style.height = `${size}px`;
  glow.style.zIndex = "9999"; // Above all else, like the Nimbus 2000
  glow.style.transition = "transform 0.1s ease-out"; // Smooth as a broomstick ride
  glow.style.mixBlendMode = "lighten"; // Blends like a potion brewed by Snape
  document.body.appendChild(glow); // Adds the glow to the DOM (or Room of Requirement)

  // 🕵️‍♂️ Tracking the cursor's every move (Marauder's Map style)
  document.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
  });
}