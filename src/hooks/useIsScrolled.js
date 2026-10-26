import { useState, useEffect } from 'react';

/**
 * ⚡ Bolt Optimization: useIsScrolled
 *
 * Replaced `useScrollPosition` which returned the exact scrollY coordinate.
 * Returning the exact coordinate caused the consuming component (Navbar)
 * to re-render on *every single scroll frame*, tanking performance.
 *
 * By taking a threshold and only returning a boolean state, we reduce
 * re-renders from hundreds per scroll to exactly two (when crossing the threshold).
 */
export default function useIsScrolled(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

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

    // Check initial position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
