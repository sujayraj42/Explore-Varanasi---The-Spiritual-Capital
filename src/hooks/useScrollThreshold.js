import { useState, useEffect } from 'react';

/**
 * ⚡ Bolt Performance Optimization:
 * Previously `useScrollPosition` tracked the exact scroll Y coordinate,
 * causing React to re-render consuming components on every scroll frame (60+ times/sec).
 *
 * By evaluating the threshold condition inside the hook and leveraging React's
 * state bailout behavior (useState ignores updates with the exact same value),
 * this hook now only triggers a single re-render exactly when the scroll position
 * crosses the defined threshold.
 *
 * Impact: Eliminates hundreds of unnecessary React re-renders while scrolling,
 * significantly reducing main thread blocking and improving scrolling smoothness.
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
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
