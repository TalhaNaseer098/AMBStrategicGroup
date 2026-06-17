import heroLeftImg from '../../imagesfolder/herosectionimg/heroleftimg.png'
import heroRightImg from '../../imagesfolder/herosectionimg/herorightimg.png'
import btnIcon from '../../imagesfolder/herosectionimg/ambbuttonicon.png'
import hsbcLogo from '../../imagesfolder/herosectionimg/HSBCimgamb.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">

      <img src={heroLeftImg}  alt="" className="hero__side-img hero__side-img--left"  />
      <img src={heroRightImg} alt="" className="hero__side-img hero__side-img--right" />

      <div className="hero__content">

        <div className="hero__badge">
          Woman-Owned · Founder-Led
        </div>

        <h1 className="hero__title">
          Driving Business Transformation<br />
          Through Strategy, Systems & AI.
        </h1>

        <p className="hero__desc">
          AMB Strategic Group is a woman-owned consulting firm helping organizations fix broken processes,
          modernize operations, and implement AI where it actually creates impact — not noise.
        </p>

        <a href="#contact" className="hero__btn">
          <img src={btnIcon} alt="" className="hero__btn-icon" />
          Book a Strategy Call
        </a>

        <p className="hero__practitioner">
          Practitioner <span className="hero__practitioner-gradient">Experience Across</span>
        </p>

        <img src={hsbcLogo} alt="Partner logos" className="hero__logos-img" />

      </div>
    </section>
  )
}
