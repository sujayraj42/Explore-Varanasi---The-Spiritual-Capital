import { useState, useEffect } from 'react';

/**
 * Optimized scroll hook that returns a boolean instead of raw pixel values
 * to prevent excessive React re-renders on every scroll tick.
 *
 * @param {number} threshold - The scroll threshold in pixels
 * @returns {boolean} - True if scroll position is beyond the threshold
 */
export default function useScrollPosition(threshold = 0) {
  // Safety check for SSR/static builds
  const [isPastThreshold, setIsPastThreshold] = useState(() => {
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
          // React state bailout will prevent re-render if the boolean value hasn't changed
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
