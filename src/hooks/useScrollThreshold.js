import { useState, useEffect } from 'react';

// ⚡ Bolt: Returning a boolean threshold state instead of the raw scrollY value
// to prevent excessive React re-renders on every frame during scrolling.
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
