import footerLogo from '../../imagesfolder/ambheaderlogo.png'
import facebookIcon from '../../imagesfolder/footersection/facebookicon.png'
import instaIcon from '../../imagesfolder/footersection/instaicon.png'
import linkedIcon from '../../imagesfolder/footersection/linkedicon.png'
import xIcon from '../../imagesfolder/footersection/xicon.png'
import './Footer.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Business Transformation', href: '#how-we-can' },
  { label: 'AI & Automation', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
]

const socialIcons = [
  { label: 'Facebook', img: facebookIcon },
  { label: 'Instagram', img: instaIcon },
  { label: 'LinkedIn', img: linkedIcon },
  { label: 'X', img: xIcon },
]

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__main">
        <div className="container">

          {/* Row 1: Logo + Desc | Nav */}
          <div className="footer__row1">
            <div className="footer__left">
              <img src={footerLogo} alt="AMB Strategic Group" className="footer__logo" />
              <p className="footer__desc">
                Whether you're modernizing a regulated platform, standing up governance,
                or exploring where AI fits in your operating model — we'd be glad to talk.
              </p>
            </div>
            <nav className="footer__nav">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__nav-link">
                  <span className="footer__nav-link-text" data-text={link.label}>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Row 2: Social Icons | Contact + Location */}
          <div className="footer__row2">
            <div className="footer__social">
              <p className="footer__social-label">Follow us on</p>
              <div className="footer__social-icons">
                {socialIcons.map((icon) => (
                  <a key={icon.label} href="#" className="footer__social-icon" aria-label={icon.label}>
                    <img src={icon.img} alt={icon.label} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__right">
              <div className="footer__info-block">
                <h4 className="footer__info-title">Contact Us</h4>
                <a href="tel:+19998887766" className="footer__info-text footer__info-text--mb">+1 (999) 888-77-66</a>
                <a href="mailto:info@ambstrategicgroup.com" className="footer__info-text">ambstrategicgroup.com</a>
              </div>
              <div className="footer__info-block">
                <h4 className="footer__info-title">Location</h4>
                <p className="footer__info-text footer__info-text--address">1209 Barton Springs Rd Texas, Austin, United States</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">© 2026 AMB Strategic Group · Woman-Owned Business</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
