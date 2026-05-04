import React from 'react';

export default function ScrollIndicator() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: '3rem',
        animation: 'fadeIn 1s 2s both',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        Scroll to Explore
      </span>
      <span
        style={{
          fontSize: '1.5rem',
          color: 'var(--gold)',
          animation: 'bounceY 1.6s infinite ease-in-out',
        }}
      >
        ↓
      </span>
    </div>
  );
}
