# ॐ Explore Varanasi — The Spiritual Capital of India

A cinematic, immersive travel website dedicated to Varanasi (Kashi) — the world's oldest continuously inhabited city and the spiritual heart of India. Built with React 18, Vite, and vanilla CSS, featuring AI-generated imagery, scroll-triggered animations, parallax effects, and a premium design language inspired by sacred Indian aesthetics.

## 📸 Screenshots

> The website features 25 AI-generated cinematic images of Varanasi including the ghats, temples, Ganga Aarti ceremonies, Buddhist monuments at Sarnath, cultural crafts, and street food.

## 🛠 Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool and dev server
- **CSS Modules** — Component-scoped styling
- **Vanilla CSS Animations** — @keyframes-based animations, no animation libraries
- **No external UI dependencies** — Pure React + CSS

## ✨ Features

- 🎬 **Cinematic loading screen** — Animated Om symbol with spinning ring and progress bar (2.8s minimum)
- 🏔️ **Parallax hero section** — Full-viewport with parallax background, letter-by-letter title reveal, and floating diya particles
- 📜 **Scroll-triggered reveal animations** — Every section animates on scroll via IntersectionObserver
- 🔢 **Animated counters** — Stats section with easeOutQuart-animated numbers
- ✨ **Particle effects** — Floating emojis and lotus petals throughout
- 🌊 **Wave dividers** — SVG wave transitions between sections
- 🖼️ **Masonry gallery** — Responsive CSS columns layout with hover overlays
- 📱 **Fully responsive** — Breakpoints at 1024px, 768px, and 480px
- ♿ **Accessibility** — Semantic HTML, focus states, prefers-reduced-motion support, alt text

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
varanasi-explore/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   │   └── images/          ← 25 AI-generated images
│   ├── hooks/
│   │   ├── useIntersectionObserver.js
│   │   ├── useCounterAnimation.js
│   │   ├── useParallax.js
│   │   └── useScrollPosition.js
│   ├── components/
│   │   ├── LoadingScreen/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Stats/
│   │   ├── Ghats/
│   │   ├── Temples/
│   │   ├── GangaAarti/
│   │   ├── Sarnath/
│   │   ├── Culture/
│   │   ├── Gallery/
│   │   ├── Visit/
│   │   ├── Footer/
│   │   └── shared/
│   ├── data/
│   │   ├── ghats.js
│   │   ├── temples.js
│   │   ├── gallery.js
│   │   └── culture.js
│   └── styles/
│       ├── variables.css
│       ├── animations.css
│       └── typography.css
```

## 🎨 Design Philosophy

The design draws from the sacred aesthetics of Varanasi itself — saffron and gold accents evoke the colours of ritual and temple spires, while deep midnight blues reflect the serenity of the Ganga at night. Typography pairs the elegant Playfair Display for headings with the scholarly Crimson Pro for body text, creating a reading experience reminiscent of a premium travel journal. Every animation is purposeful and reverent, mirroring the timeless, unhurried rhythm of life along the ghats.

## 🙏 Credits

- **All images** — AI-generated using Kimi's image generation capability
- **Design & Development** — Crafted with devotion for the eternal city of Kashi
- **Typography** — Playfair Display, Crimson Pro, and Cinzel from Google Fonts

## 📄 License

MIT License — Feel free to use this project for learning, personal projects, or as a foundation for your own work.

---

*Har Har Mahadev — Jai Kashi Vishwanath*
