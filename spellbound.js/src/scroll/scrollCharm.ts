interface ScrollCharmOptions {
        rootMargin?: string;
        threshold?: number;
        animationClass?: string;
      }
      
      export function castScrollCharm(
        selector: string,
        options: ScrollCharmOptions = {}
      ): void {
        const {
          rootMargin = "0px 0px -10% 0px",
          threshold = 0.1,
          animationClass = "sb-fade-in"
        } = options;
      
        const elements = document.querySelectorAll<HTMLElement>(selector);
      
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                        entry.target.classList.add(`${animationClass}-active`);
                        observer.unobserve(entry.target);
                }                      
            }
          },
          { rootMargin, threshold }
        );
      
        elements.forEach((el) => observer.observe(el));
      }
      