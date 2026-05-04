import React from 'react';

export default function SectionLabel({ children, centered = false }) {
  return (
    <span
      className="section-label"
      style={centered ? { justifyContent: 'center' } : {}}
    >
      {children}
    </span>
  );
}
