import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onComplete }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={styles.loadingScreen}
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div className={styles.content}>
        <div className={styles.omSymbol}>ॐ</div>
        <div className={styles.pulseRing} />
        <div className={styles.mahadevText}>हर हर महादेव</div>
        <div className={styles.subtitle}>Loading the Sacred City of Kashi</div>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} />
      </div>
    </div>
  );
}
