import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Ghats.module.css';

export default function GhatCard({ ghat, delay }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{
        animation: isVisible ? `fadeInUp 0.7s ease ${delay}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={ghat.image}
          alt={ghat.name}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.badge}>
          {ghat.badgeEmoji} {ghat.badge}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{ghat.name}</h3>
        <p className={styles.description}>{ghat.description}</p>

        <div className={styles.highlight}>
          <span className={styles.dot} />
          <span>{ghat.highlight}</span>
        </div>

        <div className={styles.bestTime}>
          <span>🕐</span>
          <span>{ghat.bestTime}</span>
        </div>

        <a href={`#ghat-${ghat.id}`} className={styles.link}>
          Explore Ghat →
        </a>
      </div>

      <div className={styles.shine} />
    </article>
  );
}
