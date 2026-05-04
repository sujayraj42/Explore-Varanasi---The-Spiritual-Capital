import cultureSilk from '../assets/images/culture-silk.jpg';
import cultureMusic from '../assets/images/culture-music.jpg';
import cultureFood from '../assets/images/culture-food.jpg';

const culture = [
  {
    id: 'silk',
    emoji: '🥻',
    title: 'Banarasi Silk',
    image: cultureSilk,
    accentColor: 'var(--gold)',
    description: "Varanasi is world-famous for its exquisite Banarasi silk sarees — considered the finest and most luxurious silk fabric in all of India. Woven with breathtaking intricate gold and silver zari (metallic thread) patterns, a single saree can take skilled artisans weeks or even months to complete and is treasured as a precious family heirloom across generations. Over 1.2 million weavers in Varanasi practise this ancient craft, which has been recognised by UNESCO. Visit a weaver's colony in the Peeli Kothi area to witness master artisans at their traditional pit looms, maintaining alive a living art that stretches back over 2,000 years.",
    fact: "A single Banarasi silk saree can take up to 6 months to weave"
  },
  {
    id: 'music',
    emoji: '🎵',
    title: 'Classical Music & Dance',
    image: cultureMusic,
    accentColor: 'var(--saffron)',
    description: "Varanasi is the undisputed cultural capital of India's classical musical tradition — the city that gave the world the legendary Banaras Gharana of Hindustani classical music. This ancient school of Thumri, Dhrupad, Dadra, and Chaiti singing has produced titans of Indian classical music for over four centuries. The city has nurtured legendary maestros of the sitar, sarangi, tabla, and shehnai. Every evening, the ghats and ancient havelis come alive with intimate classical recitals where the music merges seamlessly with the sound of the eternal Ganga flowing beneath.",
    fact: "Ustad Bismillah Khan, shehnai maestro, played at the ghats daily for 70 years"
  },
  {
    id: 'food',
    emoji: '🍵',
    title: 'Cuisine & Street Food',
    image: cultureFood,
    accentColor: 'var(--crimson)',
    description: "Varanasi's culinary heritage is as ancient and layered as the city itself. Begin your morning with piping hot kachori-sabzi — flaky fried bread with spiced potato curry — served fresh from dawn at every street corner. The legendary Banarasi lassi, thick and creamy beyond imagination, served in handmade clay kulhads, is a ritual in itself. The winter specialty malaiyyo — an ethereal milk foam dessert flavoured with saffron, cardamom, and rose water — melts on the tongue like a cloud. The Banarasi paan — betel leaf preparation — is both a digestive and a cultural institution that visitors must experience before leaving the sacred city.",
    fact: "Varanasi's lassi tradition dates back over 1,000 years"
  }
];

export default culture;
