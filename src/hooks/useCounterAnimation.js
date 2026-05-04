import { useState, useEffect, useRef } from 'react';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

export default function useCounterAnimation(target, duration = 2200, trigger) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.round(easedProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [trigger, target, duration]);

  return count;
}
