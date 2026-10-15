import { useState, useEffect } from 'react';

export default function useIsScrolled(threshold = 0) {
  // Initialize safely in case of SSR, though this is a static Vite app.
  // Returning a boolean based on a threshold prevents consumers from re-rendering
  // on every scroll event pixel change, improving scroll performance significantly.
  const [isScrolled, setIsScrolled] = useState(() =>
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
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
