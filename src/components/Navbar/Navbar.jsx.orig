import React, { useState, useEffect } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Ghats', href: '#ghats' },
  { label: 'Temples', href: '#temples' },
  { label: 'Aarti', href: '#aarti' },
  { label: 'Sarnath', href: '#sarnath' },
  { label: 'Culture', href: '#culture' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 80;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleLinkClick(e, href) {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <header
      className={styles.navbar}
      style={{
        background: isScrolled ? 'rgba(10, 14, 26, 0.94)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(1.8)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(244, 196, 48, 0.12)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => handleLinkClick(e, '#home')}
        >
          <span className={styles.logoOm}>ॐ</span>
          <span className={styles.logoText}>Explore Varanasi</span>
        </a>

        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <a
            href="#visit"
            className={styles.ctaButton}
            onClick={(e) => handleLinkClick(e, '#visit')}
          >
            Plan Your Visit
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={styles.mobileMenu}
        style={{
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'all' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#visit"
          className={styles.mobileCta}
          onClick={(e) => handleLinkClick(e, '#visit')}
        >
          Plan Your Visit
        </a>
      </div>
    </header>
  );
}
