import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-overlay"></div>
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`}></div>
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Strategic Excellence Since 2010
        </div>

        <h1 className="hero__title">
          Transforming Vision<br />
          Into <span className="hero__title-highlight">Strategic Reality</span>
        </h1>

        <p className="hero__subtitle">
          AMB Strategic Group delivers world-class business consulting, financial advisory,
          and organizational transformation services to help enterprises achieve sustainable growth.
        </p>

        <div className="hero__actions">
          <a href="#services" className="btn btn--primary">
            Our Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--outline">
            Schedule a Consultation
          </a>
        </div>

        <div className="hero__trust">
          <span className="hero__trust-label">Trusted by industry leaders</span>
          <div className="hero__trust-logos">
            {['Fortune 500', 'Global Enterprises', 'SMEs', 'Startups'].map((name) => (
              <div key={name} className="hero__trust-item">{name}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
