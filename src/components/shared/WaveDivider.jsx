import React from 'react';

export default function WaveDivider({ color = 'var(--saffron)', flip = false, opacity = 0.15 }) {
  return (
    <div
      style={{
        width: '100%',
        height: '80px',
        display: 'block',
        overflow: 'hidden',
        transform: flip ? 'scaleY(-1)' : 'none',
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    </div>
  );
}
