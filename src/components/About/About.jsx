import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionHeading from '../shared/SectionHeading';
import aboutBg from '../../assets/images/about-bg.jpg';
import styles from './About.module.css';

export default function About() {
  const [textRef, textVisible] = useIntersectionObserver();
  const [imageRef, imageVisible] = useIntersectionObserver();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div
            ref={textRef}
            className={styles.textColumn}
            style={{
              animation: textVisible ? 'slideInLeft 0.8s ease both' : 'none',
              opacity: textVisible ? 1 : 0,
            }}
          >
            <SectionHeading
              label="ABOUT KASHI"
              title="The Eternal City of Light"
            />

            <div className={styles.body}>
              <p>
                Varanasi, one of the world's oldest continuously inhabited cities, is situated on the banks of the River Ganga in the northern Indian state of Uttar Pradesh. Known variously as Benares, Banaras, or simply Kashi — "the City of Light" — this sacred metropolis has been a centre of spiritual learning, religious pilgrimage, and cultural excellence for over three millennia.
              </p>

              <p>
                The city occupies a singular place in the Hindu cosmos. It is believed that Lord Shiva himself stands here as the eternal guardian, and that dying within its boundaries brings instant liberation from the cycle of reincarnation. The Ganga, at her most majestic here, flows in a sweeping crescent past the famous eighty-four ghats — ancient stone steps that lead from the labyrinthine old city down to the river's edge, where every ritual of life, death, and rebirth plays out in plain sight.
              </p>

              <p>
                To walk through Varanasi is to step outside of ordinary time. Narrow medieval lanes barely wide enough for two people to pass open unexpectedly onto breathtaking temple courtyards. The air carries the scent of incense, fresh marigolds, and sandalwood. Sacred cows amble past roadside shrines, while chai-wallahs serve tiny glasses of sweet spiced tea from dawn until long after midnight. Every corner holds a surprise, every face tells a story, and every moment feels touched by the divine.
              </p>
            </div>

            <div className={styles.divider} />

            <blockquote className={styles.quote}>
              "Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."
              <cite>— Mark Twain</cite>
            </blockquote>
          </div>

          <div
            ref={imageRef}
            className={styles.imageColumn}
            style={{
              animation: imageVisible ? 'slideInRight 0.8s ease both' : 'none',
              opacity: imageVisible ? 1 : 0,
            }}
          >
            <div className={styles.imageFrame}>
              <img
                src={aboutBg}
                alt="Ancient narrow laneway of Varanasi at dusk with oil lamps and marigold garlands"
                loading="lazy"
              />
              <div className={styles.cornerTopLeft} />
              <div className={styles.cornerTopRight} />
              <div className={styles.cornerBottomLeft} />
              <div className={styles.cornerBottomRight} />
            </div>
            <p className={styles.caption}>
              Ancient lanes of Kashi where every stone tells a story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
