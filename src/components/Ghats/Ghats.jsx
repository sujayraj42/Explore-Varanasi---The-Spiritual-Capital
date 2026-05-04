import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import GhatCard from './GhatCard';
import ghatsData from '../../data/ghats';
import styles from './Ghats.module.css';

export default function Ghats() {
  return (
    <section id="ghats" className={`section ${styles.ghats}`}>
      <div className="container">
        <SectionHeading
          label="THE SACRED GHATS"
          title="84 Steps to the Divine"
          subtitle="The ghats of Varanasi are the soul of the city — ancient stone steps leading down to the sacred Ganga, where life, death, prayer, and celebration flow together in an eternal rhythm that has continued unbroken for millennia."
          centered
        />

        <div className={styles.grid}>
          {ghatsData.map((ghat, i) => (
            <GhatCard key={ghat.id} ghat={ghat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
