/**
 * 🪄✨ Cast Scroll Charm! ✨🪄
 * Enchants elements to reveal themselves as they scroll into view, like a sneaky wizard 
 * emerging from under an invisibility cloak. Perfect for adding magical animations to your site!
 * 
 * @param {string} selector - The CSS selector for the elements to enchant.
 * @param {ScrollCharmOptions} options - The charm's configuration:
 *   - rootMargin: The observer's margin (default: "0px 0px -10% 0px").
 *   - threshold: The visibility threshold to trigger the charm (default: 0.1).
 *   - animationClass: The base class for the animation (default: "sb-fade-in").
 */

interface ScrollCharmOptions {
        rootMargin?: string;
        threshold?: number;
        animationClass?: string;
      }
      
      export function castScrollCharm(
        selector: string,
        options: ScrollCharmOptions = {}
      ): void {
        // 🧙‍♂️ Unpacking the charm's ingredients (like potion-making, but less messy)
        const {
          rootMargin = "0px 0px -10% 0px", // Adjusts the charm's sensitivity
          threshold = 0.1, // How much of the element needs to be visible to trigger the magic
          animationClass = "sb-fade-in" // The animation spell to cast
        } = options;
      
        // 🪄 Summoning the elements to enchant
        const elements = document.querySelectorAll<HTMLElement>(selector);
      
        // 🔮 Setting up the magical observer (like a watchful eye of Mad-Eye Moody)
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                // ✨ Activating the charm (Wingardium Leviosa!)
                entry.target.classList.add(`${animationClass}-active`);
                observer.unobserve(entry.target); // No need to watch it anymore, the spell is cast
              }
            }
          },
          { rootMargin, threshold }
        );
      
        // 🧹 Observing each element (like keeping an eye on mischievous house-elves)
        elements.forEach((el) => observer.observe(el));
      }
      