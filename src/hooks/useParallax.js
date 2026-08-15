import { useState, useEffect } from 'react';

export default function useParallax(speed = 0.4) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    let animationFrameId;

    function handleScroll() {
      // ⚡ Bolt: Throttles high-frequency scroll events using requestAnimationFrame
      // This prevents excessive synchronous React state updates and reduces jank/CPU usage
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          setOffset(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  return offset;
}
