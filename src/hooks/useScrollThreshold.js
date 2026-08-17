import { useState, useEffect } from 'react';

/**
 * ⚡ Bolt Optimization: useScrollThreshold
 *
 * Instead of returning the exact scroll position (which causes re-renders
 * on every scroll frame), this hook accepts a threshold and returns a boolean.
 * React bails out of state updates if the boolean value hasn't changed,
 * reducing component re-renders from hundreds down to just two per scroll
 * direction when passing the threshold.
 */
export default function useScrollThreshold(threshold = 0) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsPastThreshold(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setIsPastThreshold(window.scrollY > threshold);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
