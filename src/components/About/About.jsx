import './About.css'

const values = [
  {
    icon: '◆',
    title: 'Integrity',
    desc: 'We build lasting relationships through transparent, ethical business practices.',
  },
  {
    icon: '◈',
    title: 'Excellence',
    desc: 'Every engagement is driven by a relentless commitment to delivering superior outcomes.',
  },
  {
    icon: '◉',
    title: 'Innovation',
    desc: 'We leverage cutting-edge methodologies to solve complex business challenges.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__image-wrap">
            <div className="about__image-placeholder">
              <div className="about__image-inner">
                <span className="about__image-logo">AMB</span>
                <span className="about__image-tagline">Strategic Group</span>
              </div>
            </div>
            <div className="about__exp-badge">
              <span className="about__exp-num">15+</span>
              <span className="about__exp-label">Years of<br />Excellence</span>
            </div>
            <div className="about__shape about__shape--1"></div>
            <div className="about__shape about__shape--2"></div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            A Partner in Your<br />Strategic Journey
          </h2>
          <p className="about__text">
            Founded with a mission to bridge the gap between ambition and achievement, AMB Strategic
            Group has been at the forefront of business transformation for over 15 years. We partner
            with organizations across industries to design strategies that endure.
          </p>
          <p className="about__text">
            Our multidisciplinary team brings together expertise in corporate strategy, financial
            advisory, digital transformation, and organizational development — offering an integrated
            approach that drives measurable results.
          </p>

          <div className="about__values">
            {values.map((v) => (
              <div key={v.title} className="about__value">
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h4 className="about__value-title">{v.title}</h4>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#services" className="about__link">
            Explore Our Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
