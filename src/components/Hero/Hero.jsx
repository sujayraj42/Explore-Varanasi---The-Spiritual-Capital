import React, { useMemo } from 'react';
import useParallax from '../../hooks/useParallax';
import SectionLabel from '../shared/SectionLabel';
import ScrollIndicator from '../shared/ScrollIndicator';
import heroBg from '../../assets/images/hero-bg.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  const parallaxOffset = useParallax(0.4);

  const diyaParticles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      fontSize: `${0.9 + Math.random() * 1.3}rem`,
      animationDuration: `${7 + Math.random() * 9}s`,
      animationDelay: `${Math.random() * 10}s`,
    }));
  }, []);

  function handleScrollToGhats(e) {
    e.preventDefault();
    document.getElementById('ghats')?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleScrollToAarti(e) {
    e.preventDefault();
    document.getElementById('aarti')?.scrollIntoView({ behavior: 'smooth' });
  }

  const titleLine1 = 'Explore';
  const titleLine2 = 'Varanasi';

  return (
    <section
      id="home"
      className={styles.hero}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${parallaxOffset}px`,
        }}
      />
      <div className={styles.overlay1} />
      <div className={styles.overlay2} />

      {/* Diya particles */}
      <div className={styles.particles} aria-hidden="true">
        {diyaParticles.map((p) => (
          <span
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              fontSize: p.fontSize,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className={styles.content}>
        <SectionLabel>SPIRITUAL CAPITAL OF INDIA</SectionLabel>

        <h1 className={`${styles.title} gold-text`}>
          <span className={styles.titleLine}>
            {titleLine1.split('').map((char, i) => (
              <span
                key={`l1-${i}`}
                className={styles.char}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className={styles.titleLine}>
            {titleLine2.split('').map((char, i) => (
              <span
                key={`l2-${i}`}
                className={styles.char}
                style={{ animationDelay: `${(6 + i) * 0.04 + 0.3}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className={`${styles.tagline} lead`}>
          The Eternal City of Light — Where Every Soul Finds Its Way Home
        </p>

        <p className={styles.description}>
          Nestled on the banks of the sacred River Ganga, Varanasi — also known as Kashi or Benares — is the oldest continuously inhabited city on earth. For over 3,000 years, seekers, saints, and pilgrims have walked its ancient stone ghats, finding solace, salvation, and spiritual awakening in its eternal embrace.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#ghats" className={styles.btnPrimary} onClick={handleScrollToGhats}>
            Discover the Ghats →
          </a>
          <a href="#aarti" className={styles.btnSecondary} onClick={handleScrollToAarti}>
            Experience Ganga Aarti
          </a>
        </div>

        <ScrollIndicator />
      </div>

      <div className={styles.bottomLine} />
    </section>
  );
}
