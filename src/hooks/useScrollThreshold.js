import { useState, useEffect } from 'react';

export default function useScrollThreshold(threshold = 0) {
  // SSR safety check and initial state based on threshold
  const [isPastThreshold, setIsPastThreshold] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // React state bail-out optimization:
          // If the new boolean matches the old boolean, React won't re-render the component.
          // This prevents O(N) re-renders when scrolling!
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
