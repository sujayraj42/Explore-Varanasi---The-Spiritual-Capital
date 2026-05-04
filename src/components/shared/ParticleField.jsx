import React, { useMemo } from 'react';

export default function ParticleField({ count = 20, emoji = '✨' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      fontSize: `${0.8 + Math.random() * 1.2}rem`,
      animationDuration: `${6 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 12}s`,
    }));
  }, [count]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-2rem',
            fontSize: p.fontSize,
            animation: `floatUp ${p.animationDuration} infinite linear`,
            animationDelay: p.animationDelay,
            opacity: 0,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
