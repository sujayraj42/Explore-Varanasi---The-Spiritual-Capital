import { useState, useEffect } from 'react';

// Renamed from useScrollPosition but kept file name for now to avoid import issues
// Optimization: Return a boolean instead of an integer to avoid excessive React re-renders on scroll
export default function useScrollPosition(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > threshold;
          setIsScrolled((prev) => {
            // Only update state (and trigger re-render) if the boolean value has changed
            if (prev !== scrolled) return scrolled;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    }

    // Initial check
    setIsScrolled(window.scrollY > threshold);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
