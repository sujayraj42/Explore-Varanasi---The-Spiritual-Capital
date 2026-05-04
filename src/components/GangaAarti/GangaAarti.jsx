import React from 'react';
import ParticleField from '../shared/ParticleField';
import aartiMain from '../../assets/images/aarti-main.jpg';
import aartiWide from '../../assets/images/aarti-wide.jpg';
import styles from './GangaAarti.module.css';

export default function GangaAarti() {
  return (
    <section
      id="aarti"
      className={styles.aarti}
      style={{ animation: 'glowPulse 3s infinite ease-in-out' }}
    >
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${aartiMain})` }}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.flame}>🔥</div>

        <span className={styles.label}>
          EVERY EVENING — DASHASHWAMEDH GHAT, VARANASI
        </span>

        <h2 className={`${styles.title} gold-text`}>
          The Divine Ganga Aarti
        </h2>

        <div className={styles.text}>
          <p>
            As the sun sets over the sacred Ganga and twilight deepens into night, the ancient stone steps of Dashashwamedh Ghat transform into a spectacular open-air theatre of divine worship. The Ganga Aarti — one of the most awe-inspiring spiritual ceremonies on Earth — begins precisely as the day's last light fades, drawing thousands of pilgrims and visitors from every corner of the globe.
          </p>
          <p>
            Seven young priests, dressed in immaculate saffron and gold robes, stand in perfect formation on ornate wooden platforms. Each priest wields a massive multi-tiered brass lamp, ablaze with dozens of flickering cotton wicks soaked in ghee. In synchronized movements passed down through countless generations, they raise and lower the lamps in elaborate circular patterns — offering light to the river goddess Ganga, to Lord Shiva who watches over Kashi, and to the sun and moon who govern time itself. The air fills with the rhythmic ringing of bells, the blowing of conch shells, and the intoxicating scent of sandalwood incense and camphor flames. As thousands of voices join in devotional song, hundreds of small earthen diyas bearing flowers and flaming wicks are set afloat on the dark water, transforming the entire river into a living galaxy of golden light.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.wideImage}>
          <img
            src={aartiWide}
            alt="Panoramic view of Varanasi ghats illuminated during Dev Deepavali with millions of oil lamps"
            loading="lazy"
          />
        </div>

        <p className={styles.caption}>
          Dev Deepavali — when over one million lamps illuminate every ghat simultaneously
        </p>
      </div>

      <ParticleField count={15} emoji="🔥" />
    </section>
  );
}
