import React from 'react';
import WaveDivider from '../shared/WaveDivider';
import styles from './Footer.module.css';

const LOTUS_POSITIONS = [
  { top: '10%', delay: '0s', duration: '22s' },
  { top: '25%', delay: '3s', duration: '18s' },
  { top: '40%', delay: '7s', duration: '20s' },
  { top: '55%', delay: '2s', duration: '24s' },
  { top: '70%', delay: '5s', duration: '19s' },
  { top: '30%', delay: '10s', duration: '21s' },
  { top: '60%', delay: '1s', duration: '17s' },
  { top: '85%', delay: '8s', duration: '23s' },
];

const QUICK_LINKS = [
  'Home', 'About Varanasi', 'Sacred Ghats', 'Sacred Temples',
  'Ganga Aarti', 'Sarnath', 'Cultural Heritage', 'Gallery', 'Plan Your Visit'
];

const GHAT_LINKS = [
  'Dashashwamedh Ghat', 'Manikarnika Ghat', 'Assi Ghat', 'Scindia Ghat',
  'Kedar Ghat', 'Panchganga Ghat', 'Harishchandra Ghat', 'Tulsi Ghat'
];

const TEMPLE_LINKS = [
  'Kashi Vishwanath Temple', 'Sankat Mochan Hanuman Temple', 'Durga Temple',
  'Tulsi Manas Temple', 'Bharat Mata Temple', 'Kal Bhairav Temple',
  'Nepal Temple', 'Vishalakshi Temple'
];

const SOCIAL_LINKS = [
  { emoji: '📸', label: 'Instagram' },
  { emoji: '📘', label: 'Facebook' },
  { emoji: '▶️', label: 'YouTube' },
  { emoji: '🐦', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WaveDivider color="var(--saffron)" opacity={0.12} />

      <div className={styles.lotusContainer} aria-hidden="true">
        {LOTUS_POSITIONS.map((pos, i) => (
          <span
            key={i}
            className={styles.lotus}
            style={{
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span>ॐ</span> Explore Varanasi
              </div>
              <p className={styles.tagline}>
                Har Har Mahadev — Where Every Soul Finds Its Way Home
              </p>
              <div className={styles.divider} />
              <div className={styles.social}>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className={styles.socialLink}
                    aria-label={s.label}
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                {QUICK_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Sacred Ghats</h4>
              <ul>
                {GHAT_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Sacred Temples</h4>
              <ul>
                {TEMPLE_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <span>
              &copy; 2025 Explore Varanasi. Crafted with 🙏 devotion for the eternal city.
            </span>
            <span>
              Made in India 🇮🇳 | Jai Kashi Vishwanath
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
