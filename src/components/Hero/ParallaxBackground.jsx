import React from 'react';
import useParallax from '../../hooks/useParallax';
import styles from './Hero.module.css';
import heroBg from '../../assets/images/hero-bg.jpg';

export default function ParallaxBackground() {
  const parallaxOffset = useParallax(0.4);

  return (
    <div
      className={styles.bgImage}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPositionY: `${parallaxOffset}px`,
      }}
    />
  );
}
