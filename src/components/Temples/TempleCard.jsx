import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Temples.module.css';

export default function TempleCard({ temple, delay }) {
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
          src={temple.image}
          alt={temple.name}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.badge}>
          {temple.badgeEmoji} {temple.badge}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.deity}>{temple.deity}</span>
          <span className={styles.built}>{temple.built}</span>
        </div>

        <h3 className={styles.name}>{temple.name}</h3>
        <p className={styles.description}>{temple.description}</p>

        <a href={`#temple-${temple.id}`} className={styles.link}>
          Visit Temple →
        </a>
      </div>

      <div className={styles.shine} />
    </article>
  );
}
