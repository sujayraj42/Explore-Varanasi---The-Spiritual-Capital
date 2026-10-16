import { useState, useEffect } from 'react';

export default function useScrollPosition(threshold = 0) {
  // SSR safety check
  const isBrowser = typeof window !== 'undefined';
  const [isScrolled, setIsScrolled] = useState(
    isBrowser ? window.scrollY > threshold : false
  );

  useEffect(() => {
    if (!isBrowser) return;

    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
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
  }, [threshold, isBrowser]);

  return isScrolled;
}
