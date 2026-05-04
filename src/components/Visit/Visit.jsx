import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionHeading from '../shared/SectionHeading';
import styles from './Visit.module.css';

const CARDS = [
  {
    emoji: '🛬',
    title: 'Getting There',
    body: 'Varanasi is well-connected by air, rail, and road. The Lal Bahadur Shastri International Airport (VNS) is just 26 km from the city centre with regular flights from Delhi, Mumbai, and Bangalore. The Varanasi Junction railway station is one of India\'s major rail hubs with trains from across the country. For the adventurous, overnight trains from Delhi offer a quintessentially Indian travel experience.'
  },
  {
    emoji: '🌤️',
    title: 'Best Time to Visit',
    body: 'The ideal time to visit Varanasi is between October and March when the weather is pleasant and cool. Winter mornings (December-January) can be foggy, creating an ethereal atmosphere at the ghats. Avoid the scorching summer months of April-June. The most magical time to visit is during Dev Deepavali (Kartik Purnima, usually in November) when the entire city is illuminated with millions of oil lamps — a spectacle beyond imagination.'
  },
  {
    emoji: '🏨',
    title: 'Where to Stay',
    body: 'For the authentic Varanasi experience, stay in one of the heritage hotels overlooking the ghats in the old city. The BrijRama Palace at Darbhanga Ghat offers royal luxury with panoramic river views. Budget travellers will find excellent guesthouses near Assi Ghat with rooftop restaurants overlooking the Ganga. For modern amenities, the Cantonment area offers comfortable mid-range hotels within easy reach of both the railway station and the ghats.'
  },
  {
    emoji: '✈️',
    title: 'Visa & Entry',
    body: 'Varanasi is open to international visitors. Citizens of most countries can obtain an e-Visa for India online before arrival. The city is easily accessible from major international hubs via connecting flights through Delhi, Mumbai, or Kolkata. The Lal Bahadur Shastri International Airport handles direct flights from several Gulf countries and Southeast Asian cities.'
  }
];

function VisitCard({ card, delay }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        animation: isVisible ? `fadeInUp 0.7s ease ${delay}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={styles.emoji}>{card.emoji}</div>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.body}>{card.body}</p>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className={`section ${styles.visit}`}>
      <div className="container">
        <SectionHeading
          label="TRAVEL GUIDE"
          title="Plan Your Sacred Journey"
          centered
        />

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <VisitCard key={card.title} card={card} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
