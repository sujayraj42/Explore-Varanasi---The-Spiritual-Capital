import templeVishwanath from '../assets/images/temple-vishwanath.jpg';
import templeSankat from '../assets/images/temple-sankat.jpg';
import templeDurga from '../assets/images/temple-durga.jpg';
import templeTulsi from '../assets/images/temple-tulsi.jpg';

const temples = [
  {
    id: 'vishwanath',
    name: 'Kashi Vishwanath Temple',
    badge: 'Jyotirlinga',
    badgeEmoji: '⭐',
    image: templeVishwanath,
    description: "The spiritual crown and living heart of Varanasi — one of the twelve sacred Jyotirlingas, the holiest of all Shiva temples in India. Situated on the western banks of the Ganga, the temple's magnificent gold-plated spires have drawn pilgrims for millennia. Destroyed and rebuilt multiple times, it was beautifully restored in 1780 CE by the great Maratha Queen Ahilyabai Holkar. The recently completed Kashi Vishwanath Corridor creates a stunning grand passage linking pilgrims from the ghats directly to the temple, welcoming over 75,000 devotees daily.",
    deity: 'Lord Shiva',
    built: 'Ancient, restored 1780 CE'
  },
  {
    id: 'sankat',
    name: 'Sankat Mochan Hanuman Temple',
    badge: 'Hanuman',
    badgeEmoji: '🐒',
    image: templeSankat,
    description: "One of the most beloved and spiritually powerful temples in Varanasi, dedicated to Lord Hanuman — the divine remover of obstacles and suffering. Founded in the 16th century by the revered poet-saint Goswami Tulsidas, the author of the Ramcharitmanas, this temple vibrates with unwavering devotion throughout the day and night. Tuesday and Saturday mornings see especially fervent gatherings of thousands of devoted pilgrims who queue for hours for a glimpse of the deity.",
    deity: 'Lord Hanuman',
    built: '16th Century CE'
  },
  {
    id: 'durga',
    name: 'Durga Temple (Durga Kund)',
    badge: 'Shakti Power',
    badgeEmoji: '🔴',
    image: templeDurga,
    description: "Popularly called the 'Monkey Temple' for the large resident troops of sacred langur monkeys, the Durga Temple is renowned for its striking deep terracotta-red exterior and the powerful feminine divine energy that permeates the entire complex. Built in the 18th century in the North Indian Nagara architectural style, the multi-tiered shikhara tower rises dramatically above the sacred Durga Kund tank. During Navratri — the nine-night festival of the Goddess — the temple becomes a sea of devotion with thousands of pilgrims arriving daily.",
    deity: 'Goddess Durga',
    built: '18th Century CE'
  },
  {
    id: 'tulsi',
    name: 'Tulsi Manas Temple',
    badge: 'Literary Heritage',
    badgeEmoji: '📖',
    image: templeTulsi,
    description: "Built in 1964 in pristine white marble at the precise spot where the immortal poet-saint Goswami Tulsidas composed the Ramcharitmanas — the beloved Hindi verse retelling of the epic Ramayana. Every wall of this luminous temple is inscribed with verses from the Ramcharitmanas, transforming the entire structure into a living sacred manuscript in stone. The temple features remarkable mechanical diorama displays depicting scenes from the Ramayana, making it beloved by pilgrims and children alike.",
    deity: 'Lord Ram',
    built: '1964 CE'
  }
];

export default temples;
