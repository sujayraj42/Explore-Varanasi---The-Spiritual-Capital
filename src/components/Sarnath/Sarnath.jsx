import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import sarnathStupa from '../../assets/images/sarnath-stupa.jpg';
import sarnathMonks from '../../assets/images/sarnath-monks.jpg';
import sarnathLion from '../../assets/images/sarnath-lion.jpg';
import styles from './Sarnath.module.css';

export default function Sarnath() {
  const [textRef, textVisible] = useIntersectionObserver();
  const [imageRef, imageVisible] = useIntersectionObserver();

  return (
    <section id="sarnath" className={`section ${styles.sarnath}`}>
      <div className={styles.wheel} aria-hidden="true">☸</div>

      <div className="container">
        <div className={styles.grid}>
          <div
            ref={imageRef}
            className={styles.imageColumn}
            style={{
              animation: imageVisible ? 'slideInLeft 0.8s ease both' : 'none',
              opacity: imageVisible ? 1 : 0,
            }}
          >
            <div className={styles.mainImage}>
              <img
                src={sarnathStupa}
                alt="Dhamek Stupa at Sarnath with monks circumambulating"
                loading="lazy"
              />
            </div>
            <div className={styles.secondaryImage}>
              <img
                src={sarnathMonks}
                alt="Buddhist monks meditating at Sarnath deer park"
                loading="lazy"
              />
            </div>
          </div>

          <div
            ref={textRef}
            className={styles.textColumn}
            style={{
              animation: textVisible ? 'slideInRight 0.8s ease both' : 'none',
              opacity: textVisible ? 1 : 0,
            }}
          >
            <span className={styles.label}>WHERE BUDDHISM BEGAN</span>

            <h2 className={`${styles.title} gold-text`}>
              Sarnath — The First Sermon
            </h2>

            <div className={styles.body}>
              <p>
                Just ten kilometres northeast of Varanasi lies Sarnath — the hallowed ground where, in the 6th century BCE, Prince Siddhartha Gautama attained enlightenment under the Bodhi tree in Bodh Gaya and then walked to this peaceful deer park to deliver his first teaching. Here, surrounded by five ascetic companions, the Buddha set in motion the Wheel of Dharma — giving the world the Four Noble Truths and the Eightfold Path that would transform the spiritual landscape of Asia and beyond.
              </p>

              <p>
                The Dhamek Stupa, a soaring cylindrical monument rising 43.6 metres, marks the exact spot where the Buddha spoke. Built in its current form around 500 CE, the stupa's lower section is adorned with exquisitely carved floral and geometric stone patterns that have survived centuries of weather and history. Buddhist pilgrims from across the world — Tibet, Thailand, Japan, Sri Lanka, and beyond — come here to circumambulate the stupa in silent meditation, just as devotees have done for over 1,500 years.
              </p>

              <p>
                Nearby, the Sarnath Archaeological Museum houses the most precious relics of early Buddhist art, including the magnificent Lion Capital of Ashoka — the sculpture that now forms the national emblem of India. Four majestic lions stand back-to-back atop an abacus carved with a dharma wheel and galloping animals, symbolising the Buddha's teaching spreading in all four directions. The park's ancient gardens, dotted with archaeological ruins and shaded by towering trees, remain a sanctuary of profound peace — a fitting birthplace for a tradition devoted to compassion, mindfulness, and liberation from suffering.
              </p>
            </div>

            <div className={styles.insetCard}>
              <img
                src={sarnathLion}
                alt="The Lion Capital of Ashoka in Sarnath Archaeological Museum"
                loading="lazy"
              />
              <p>
                The Lion Capital of Ashoka — India's national emblem, displayed at the Sarnath Archaeological Museum
              </p>
            </div>

            <a
              href="https://www.google.com/search?q=sarnath+varanasi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Visit Sarnath →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
