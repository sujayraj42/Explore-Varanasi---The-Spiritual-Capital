import { useState, useEffect } from 'react';

/**
 * ⚡ Bolt Optimization: useIsScrolled
 *
 * Replaces the previous `useScrollPosition` hook to drastically reduce
 * unnecessary React re-renders.
 * Instead of returning the raw scroll coordinate on every scroll event (which causes
 * a re-render on every tick), this returns a boolean that only updates when
 * crossing the specified threshold.
 */
export default function useIsScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // ⚡ Only updates React state when the threshold boundary is crossed
          const scrolled = window.scrollY > threshold;
          setIsScrolled(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
