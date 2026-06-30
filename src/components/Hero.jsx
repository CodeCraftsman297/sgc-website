import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.70), rgba(0,0,0,.70)),
          url(${heroImage})
        `,
      }}
    >
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-tag">Admissions Open 2026–27</p>

        <h1>Shree Ganesh Classes</h1>

        <h2>Believe In Yourself</h2>

        <p className="hero-description">
          Quality education with personal attention for{" "}
          <strong>Std. 1st–10th (State Board, CBSE & ICSE)</strong>,
          <strong> 11th–12th Commerce</strong>, and{" "}
          <strong>Private Tutoring</strong>.
        </p>

        <div className="hero-buttons">
          <a
            href="#contact"
            className="hero-btn"
            aria-label="Go to Contact section"
          >
            Enquire Now
          </a>

          <a
            href="tel:9987420415"
            className="hero-btn secondary"
            aria-label="Call Shree Ganesh Classes"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;