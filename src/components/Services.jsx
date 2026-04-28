const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            What I<br />
            Do
          </h2>
          <p>
            Services focused on helping individuals and brands look sharper
            online.
          </p>
        </div>

        <div className="services-list reveal">
          <div className="service-item">
            <span>01</span>
            <h3>Fullstack Development</h3>
            <p>
              Building complete web applications with frontend, backend, and API
              integration.
            </p>
          </div>

          <div className="service-item">
            <span>02</span>
            <h3>Frontend Development</h3>
            <p>
              Clean, responsive UI with smooth interactions using modern
              frameworks like React.
            </p>
          </div>

          <div className="service-item">
            <span>03</span>
            <h3>AI + ML Integration</h3>
            <p>
              Automating tasks, building intelligent features, and processing
              large datasets with AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
