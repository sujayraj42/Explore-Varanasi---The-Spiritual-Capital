import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import CultureCard from './CultureCard';
import cultureData from '../../data/culture';
import styles from './Culture.module.css';

export default function Culture() {
  return (
    <section id="culture" className={`section ${styles.culture}`}>
      <div className="container">
        <SectionHeading
          label="CULTURE & HERITAGE"
          title="Culture, Craft & Cuisine of Banaras"
          subtitle="Beyond its spiritual significance, Varanasi is a vibrant living museum of Indian culture — where ancient crafts, classical arts, and culinary traditions have been preserved and passed down through countless generations."
          centered
        />

        <div className={styles.grid}>
          {cultureData.map((item, i) => (
            <CultureCard key={item.id} item={item} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
