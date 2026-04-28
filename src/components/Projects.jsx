const Projects = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Selected
            <br />
            Work
          </h2>
          <p>
            Projects focused on fullstack development, real-time systems, and
            early-stage AI-powered applications.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card large reveal">
            <div className="project-top">
              <span>01</span>
              <span>Website Design</span>
            </div>
            <div>
              <h3>Premium Portfolio Experience</h3>
              <p>
                A clean, editorial portfolio system for a creative professional
                with subtle motion and strong typography.
              </p>
            </div>
            <div className="project-visual"></div>
          </article>

          <article className="project-card reveal">
            <div className="project-top">
              <span>02</span>
              <span>Brand Identity</span>
            </div>
            <div>
              <h3>Studio Landing Page</h3>
              <p>Minimal landing page concept for a modern creative studio.</p>
            </div>
            <div className="project-visual"></div>
          </article>

          <article className="project-card reveal">
            <div className="project-top">
              <span>03</span>
              <span>Product UI</span>
            </div>
            <div>
              <h3>SaaS Dashboard Concept</h3>
              <p>
                A calm dashboard interface focused on simplicity and
                readability.
              </p>
            </div>
            <div className="project-visual"></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
