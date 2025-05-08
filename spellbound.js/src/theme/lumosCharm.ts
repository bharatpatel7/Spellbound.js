/**
 * 🪄✨ Cast Lumos Charm! ✨🪄
 * Brings light to your web project, toggling between light and dark themes like a true wizard.
 * Perfect for illuminating your site with a magical touch!
 * 
 * @param {string} [toggleSelector] - The CSS selector for the theme toggle button (optional).
 */
export function castLumosCharm(toggleSelector?: string): void {
  const root = document.documentElement; // 🌱 The magical root of all styles
  const savedTheme = localStorage.getItem("spellbound-theme"); // 🗝️ A memory charm to recall the last theme

  // 🧙‍♂️ Sets the theme (light or dark) with a flick of the wand
  const setTheme = (theme: "light" | "dark") => {
    root.setAttribute("data-theme", theme); // Engraves the theme onto the root element
    localStorage.setItem("spellbound-theme", theme); // Stores the theme in the Room of Requirement (localStorage)
  };

  // 🔮 Detects the system's theme preference (like reading tea leaves)
  const detectSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // 🪄 Restores the saved theme or defaults to the system's preference
  if (savedTheme) {
    setTheme(savedTheme as "light" | "dark");
  } else {
    setTheme(detectSystemTheme());
  }

  // 🧙‍♀️ Adds a toggle button for manual theme switching (like a magical light switch)
  if (toggleSelector) {
    const toggleButton = document.querySelector(toggleSelector);
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        const current = root.getAttribute("data-theme"); // Checks the current theme
        const next = current === "dark" ? "light" : "dark"; // Switches to the opposite theme
        setTheme(next as "light" | "dark"); // Casts the Lumos or Nox charm
      });
    }
  }
}