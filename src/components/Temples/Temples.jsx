import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import TempleCard from './TempleCard';
import templesData from '../../data/temples';
import styles from './Temples.module.css';

export default function Temples() {
  return (
    <section id="temples" className={`section ${styles.temples}`}>
      <div className={styles.glow} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          label="SACRED TEMPLES"
          title="Sanctuaries of the Divine"
          subtitle="Varanasi is home to over 23,000 temples, ranging from grand ancient structures that have drawn pilgrims for millennia to humble neighbourhood shrines. Each temple is a portal to the sacred, a place where the divine and the earthly meet."
          centered
        />

        <div className={styles.grid}>
          {templesData.map((temple, i) => (
            <TempleCard key={temple.id} temple={temple} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
