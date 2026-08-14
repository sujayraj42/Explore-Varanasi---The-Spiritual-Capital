import { useEffect, useRef } from 'react';

export default function useParallax(speed = 0.4) {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking && ref.current) {
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.backgroundPositionY = `${window.scrollY * speed}px`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial position
    if (ref.current) {
        ref.current.style.backgroundPositionY = `${window.scrollY * speed}px`;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
}
