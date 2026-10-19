import { useState, useEffect } from 'react';

export default function useIsScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > threshold : false
  );

  useEffect(() => {
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
    // Initial check in case scroll position is already beyond threshold
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
