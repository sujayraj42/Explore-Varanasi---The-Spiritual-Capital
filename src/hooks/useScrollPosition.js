import { useState, useEffect } from 'react';

/**
 * Custom hook to track whether the scroll position has passed a certain threshold.
 * ⚡ Bolt: Returns a boolean instead of a raw scrollY integer to prevent the consuming
 * component from re-rendering on every single scroll frame. React will automatically
 * bail out of rendering if the boolean state hasn't changed.
 */
export default function useScrollPosition(threshold = 0) {
  const [isPastThreshold, setIsPastThreshold] = useState(
    typeof window !== 'undefined' ? window.scrollY > threshold : false
  );

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
