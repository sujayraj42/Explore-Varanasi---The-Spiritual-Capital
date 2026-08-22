import { useState, useEffect } from 'react';

// ⚡ Bolt: Performance Optimization
// Instead of returning raw scrollY coordinates and causing consumers
// to re-render on every scroll tick, this hook accepts a threshold
// and returns a boolean. React will automatically bail out of
// unnecessary re-renders when the boolean value remains unchanged,
// significantly reducing main thread work during scrolling.
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
    // Initialize state on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
