import { useState } from 'react'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import iconBtn from '../../imagesfolder/ambiconbutton.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Business Transformation', href: '#services' },
  { label: 'AI & Automation', href: '#ai-automation' },
  { label: 'Faqs', href: '#faqs' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <img src={logoImg} alt="AMB Strategic Group" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              <span className="navbar__link-text" data-text={link.label}>{link.label}</span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta" onClick={() => handleNavClick('#contact')}>
          Contact us
          <img src={iconBtn} alt="" className="navbar__cta-icon" />
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}
