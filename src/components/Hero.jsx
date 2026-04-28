const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot"></span>
            Available for freelance work
          </div>

          <h1>
            Fullstack Developer
            <span>& AI Engineer</span>
          </h1>

          <div className="cta-row">
            <a href="#work" className="btn btn-dark">
              View Work
            </a>
            <a href="#contact" className="btn btn-light">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-info">
          <p>
            I build modern fullstack web applications and explore AI/ML to
            create smarter, scalable digital products with clean user
            experiences.
          </p>

          <div className="pill-row">
            <span className="pill">Based in India</span>
            <span className="pill">Web & App Development</span>
            <span className="pill">AI / Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
