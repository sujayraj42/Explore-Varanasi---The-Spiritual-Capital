import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionLabel from './SectionLabel';

export default function SectionHeading({ label, title, subtitle, centered = false }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{
        textAlign: centered ? 'center' : 'left',
        marginBottom: '3rem',
        animation: isVisible ? 'fadeInUp 0.7s ease both' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <SectionLabel centered={centered}>{label}</SectionLabel>
      <h2
        className="gold-text"
        style={{
          marginTop: '1.2rem',
          marginBottom: subtitle ? '1.2rem' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="lead" style={{ maxWidth: centered ? '800px' : '700px', margin: centered ? '0 auto' : '0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
