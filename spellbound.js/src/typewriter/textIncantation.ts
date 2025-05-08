/**
 * 🪄✨ Cast Text Incantation! ✨🪄
 * Animates text as if it's being typed by an invisible quill, adding a magical typewriter effect.
 * Perfect for enchanting your web project with dynamic text spells!
 * 
 * @param {string} selector - The CSS selector for the element to enchant.
 * @param {TextIncantationOptions} options - The incantation's configuration:
 *   - text: An array of strings to magically type out.
 *   - speed: Typing speed in milliseconds (default: 100ms).
 *   - loop: Whether the incantation should repeat endlessly (default: true).
 *   - deleteDelay: Delay before deleting text (default: 1500ms).
 *   - typingDelay: Delay before typing the next text (default: 500ms).
 *   - cursorChar: The magical cursor character (default: "|").
 */
export

interface TextIncantationOptions {
        text: string[];
        speed?: number;
        loop?: boolean;
        deleteDelay?: number;
        typingDelay?: number;
        cursorChar?: string;
      }
      
      export function castTextIncantation(
        selector: string,
        options: TextIncantationOptions
      ): void {
        const {
          text,
    speed = 100, // ⚡ Speed of the Quick-Quotes Quill
    loop = true, // 🔄 Whether the spell loops like a Time-Turner
    deleteDelay = 1500, // ⏳ Pause before vanishing the text
    typingDelay = 500, // ⏱️ Pause before starting the next spell
    cursorChar = "|", // ✨ The blinking wand tip
  } = options;

  const el = document.querySelector(selector);
  if (!el) return; // 🧙‍♂️ If the element is missing, the spell fizzles out

  let textIndex = 0; // 📜 Tracks the current incantation
  let charIndex = 0; // 🔤 Tracks the current character
  let isDeleting = false; // ❌ Whether the spell is erasing text

  // 🪄 Summoning the magical cursor
  const cursorSpan = document.createElement("span");
  cursorSpan.textContent = cursorChar;
  cursorSpan.className = "sb-cursor";
  el.appendChild(cursorSpan);

  // ✨ The magical typing function
  const type = () => {
    const currentText = text[textIndex]; // 📜 The current incantation
    const displayedText = isDeleting
      ? currentText.substring(0, charIndex--) // 🔙 Erasing the spell
      : currentText.substring(0, charIndex++); // ✍️ Writing the spell

    el.childNodes[0].textContent = displayedText; // 🖋️ Updates the enchanted text

    if (!isDeleting && charIndex === currentText.length + 1) {
      // 🛑 Pause before erasing
      isDeleting = true;
      setTimeout(type, deleteDelay);
    } else if (isDeleting && charIndex === 0) {
      // 🔄 Move to the next incantation
      isDeleting = false;
      textIndex = (textIndex + 1) % text.length;
      setTimeout(type, typingDelay);
    } else {
      // ⏳ Continue typing or erasing
      setTimeout(type, speed);
    }
  };

  el.innerHTML = "<span></span>"; // 🖋️ Prepares the element for the spell
  el.appendChild(cursorSpan); // ✨ Adds the magical cursor
  setTimeout(type, typingDelay); // 🕒 Starts the incantation
}