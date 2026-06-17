import './Footer.css'

const footerLinks = {
  Services: ['Corporate Strategy', 'Financial Advisory', 'Digital Transformation', 'Org Development', 'Market Expansion'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press', 'Contact'],
  Resources: ['Case Studies', 'White Papers', 'Blog', 'Events', 'Newsletter'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-amb">AMB</span>
              <span className="footer__logo-text">Strategic Group</span>
            </div>
            <p className="footer__tagline">
              Transforming organizations through strategic excellence, financial acumen, and operational innovation since 2010.
            </p>
            <div className="footer__social">
              {['in', 'tw', 'ig'].map((s) => (
                <a key={s} href="#" className="footer__social-btn">{s}</a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer__col">
              <h4 className="footer__col-title">{category}</h4>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} AMB Strategic Group. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
