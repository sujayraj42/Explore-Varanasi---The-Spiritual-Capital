import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Gallery.module.css';

export default function GalleryItem({ item, delay }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{
        animation: isVisible ? `scaleIn 0.6s ease ${delay}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.caption}>{item.caption}</p>
            <span className={styles.viewBtn}>View →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
