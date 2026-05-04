import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Culture.module.css';

export default function CultureCard({ item, delay }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{
        animation: isVisible ? `fadeInUp 0.7s ease ${delay}s both` : 'none',
        opacity: isVisible ? 1 : 0,
        borderTopColor: item.accentColor,
      }}
    >
      <div className={styles.emoji}>{item.emoji}</div>
      <h3 className={styles.title}>{item.title}</h3>

      <div className={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      </div>

      <p className={styles.description}>{item.description}</p>

      <div className={styles.fact} style={{ color: item.accentColor }}>
        "{item.fact}"
      </div>

      <div className={styles.shine} />
    </article>
  );
}
