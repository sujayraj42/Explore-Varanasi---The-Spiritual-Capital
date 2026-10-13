import { useState, useEffect } from 'react';

// Optimized to accept a threshold and return a boolean.
// This prevents excessive re-renders by only updating state when the threshold is crossed,
// rather than updating state on every single scroll frame.
export default function useScrollPosition(threshold = 0) {
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
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
