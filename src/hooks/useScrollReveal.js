import { useEffect, useRef } from 'react';

// Custom hook to trigger scroll animations
export function useScrollReveal(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    observer.observe(element);
    
    // Also observe children that have reveal classes
    const revealSelectors = '.reveal-up, .reveal-fade, .reveal-zoom, .reveal-left, .reveal-right';
    const childrenToReveal = element.querySelectorAll(revealSelectors);
    childrenToReveal.forEach(child => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.triggerOnce]);

  return ref;
}
