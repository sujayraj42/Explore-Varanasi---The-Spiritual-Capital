import { useState, useEffect } from 'react';

export default function useScrollThreshold(threshold = 0) {
  // SSR Safety check
  const isBrowser = typeof window !== 'undefined';
  const [isPastThreshold, setIsPastThreshold] = useState(() =>
    isBrowser ? window.scrollY > threshold : false
  );

  useEffect(() => {
    if (!isBrowser) return;

    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // React state only updates if the boolean value actually changes
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
  }, [isBrowser, threshold]);

  return isPastThreshold;
}
