import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useCounterAnimation from '../../hooks/useCounterAnimation';
import styles from './Stats.module.css';

const STATS = [
  { value: 3000, suffix: '+', label: 'Years of History', prefix: '' },
  { value: 84, suffix: '', label: 'Sacred Ghats', prefix: '' },
  { value: 23000, suffix: '+', label: 'Ancient Temples', prefix: '' },
  { value: 1, suffix: 'M+', label: 'Annual Pilgrims', prefix: '' },
];

function StatItem({ stat, delay }) {
  const [ref, isVisible] = useIntersectionObserver();
  const count = useCounterAnimation(stat.value, 2200, isVisible);

  let displayValue;
  if (stat.value >= 1000) {
    displayValue = count.toLocaleString();
  } else {
    displayValue = count;
  }

  return (
    <div
      ref={ref}
      className={styles.stat}
      style={{
        animation: isVisible ? `fadeInUp 0.7s ease ${delay}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={styles.number}>
        {stat.prefix}{displayValue}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem stat={stat} delay={i * 0.15} />
              {i < STATS.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
