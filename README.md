# Explore Varanasi - The Spiritual Capital

A modern, responsive website exploring the spiritual, cultural, and historical beauty of Varanasi, India. Built with a stunning **Glassmorphism Design System** featuring smooth animations, transitions, and a delightful user experience.

## 🌟 Features

### Design & UI
- **Glassmorphism Design**: Modern frosted glass effect with blur and transparency
- **Responsive Layout**: Fully responsive on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful fade-in, slide-in, and hover effects
- **Color Scheme**: Gradient backgrounds with carefully chosen color palette
- **Typography**: Professional font hierarchy with Segoe UI

### Pages
1. **Home** - Hero carousel with featured content and quick overview
2. **About** - Rich history, cultural importance, and famous personalities
3. **Places** - Showcase of famous attractions (Ghats, Temples, Sarnath, Fort, University)
4. **Gallery** - Photo gallery with lightbox modal viewer
5. **Contact** - Contact form, map integration, and social links
6. **Book** - Travel package booking system with grid/list view

### Technical Features
- Bootstrap 5.3 for responsive grid system
- Font Awesome 6.4 for beautiful icons
- CSS custom properties (variables) for easy theming
- Accessibility features (reduced motion preferences)
- SEO-friendly HTML structure
- Smooth scroll navigation
- Dynamic navbar effects

## 📁 Project Structure

```
explore-varanasi/
├── index.html              # Home page
├── about.html              # About Varanasi
├── places.html             # Famous places
├── gallery.html            # Photo gallery
├── contact.html            # Contact page
├── book.html               # Booking system
├── css/
│   └── styles.css          # Main stylesheet (Glassmorphism design system)
├── images/                 # Image assets
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## 🎨 Design System Variables

```css
--primary: #1e3c72              /* Deep blue */
--primary-light: #2a5298        /* Light blue */
--secondary: #ffd700            /* Gold */
--accent: #10b981               /* Green */
--glass-bg: rgba(255, 255, 255, 0.25)    /* Glass effect */
--glass-border: rgba(255, 255, 255, 0.18)
--shadow: 0 8px 32px rgba(31, 41, 55, 0.1)
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sujayraj42/Explore-Varanasi---The-Spiritual-Capital.git
   cd Explore-Varanasi---The-Spiritual-Capital
   ```

2. **Open locally**
   - Simply open `index.html` in your web browser, or
   - Use a local server: `python -m http.server 8000`

3. **Deploy to GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save and access at `https://yourusername.github.io/repo-name`

## 🎯 Key CSS Classes

### Glass Cards
```html
<div class="glass-card">
  <!-- Content with glassmorphism effect -->
</div>
```

### Button Styles
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary glass button
- `.btn-outline-primary` - Outlined button

### Animations
- `.fade-in` - Fade in animation
- `.float` - Floating animation
- `.glow` - Glowing effect

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🔧 Customization

### Change Color Scheme
Edit `css/styles.css` root variables:
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    --accent: #your-color;
}
```

### Update Content
Edit individual HTML files - all page structure is semantic and well-organized.

### Add Images
Place images in the `images/` folder and update image paths in HTML files.

## 📝 File Guide

- **Navigation**: Fixed navbar with smooth scroll effects
- **Hero Section**: Full-width carousel with multiple slides
- **Sections**: Glass-card based layout for better organization
- **Footer**: Complete footer with quick links and social media
- **Forms**: Contact form and booking system

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ✨ Special Features

1. **Glass Effect**: Backdrop-filter blur creates modern frosted look
2. **Gradient Text**: Section titles use gradient text effect
3. **Navbar Scroll Effect**: Navbar changes appearance on scroll
4. **Lightbox Gallery**: Click images to view in modal
5. **Booking System**: Complete package booking with multiple payment modes
6. **Contact Integration**: Google Maps embedded for location
7. **Accessibility**: Respects `prefers-reduced-motion` preference

## 📊 Performance

- Optimized CSS with minimal bloat
- Uses CDN for Bootstrap and Font Awesome
- Lazy loading support for images
- Mobile-first responsive design
- Smooth 60fps animations

## 🔐 Security

- No sensitive data stored
- Form validation on client-side
- Safe external links with target="_blank" and rel attributes

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sujay Raj**
- GitHub: [@sujayraj42](https://github.com/sujayraj42)
- Email: sujayraj7003@gmail.com
- Instagram: [@_banaras_ki_galiya_](https://instagram.com/)

## 🙏 Acknowledgments

- Designed and built with modern web standards
- Inspired by glassmorphism design trends
- Built with Bootstrap and Vanilla JavaScript
- Images sourced from Varanasi

## 📞 Support

For questions or issues:
1. Open an GitHub issue
2. Contact via email
3. Reach out on social media

---

**Made with ❤️ for Varanasi Tourism**

*Last Updated: 2026-04-10*
*Version: 2.0.0 (Glassmorphism Enhanced)*
