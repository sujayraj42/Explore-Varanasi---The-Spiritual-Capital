import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import GalleryItem from './GalleryItem';
import galleryData from '../../data/gallery';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <SectionHeading
          label="VISUAL JOURNEY"
          title="Sacred Moments — Frames of Eternity"
          subtitle="A curated collection of images capturing the divine beauty, spiritual depth, and timeless wonder of Varanasi — the city that has inspired pilgrims, poets, and photographers for millennia."
          centered
        />

        <div className={styles.masonry}>
          {galleryData.map((item, i) => (
            <GalleryItem key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
