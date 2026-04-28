const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Let’s Work
            <br />
            Together
          </h2>
          <p>
            Looking to build a web app or experiment with AI? Let’s collaborate
            and create something useful.
          </p>
        </div>

        <div className="contact-line reveal">
          <a href="mailto:[EMAIL_ADDRESS]" className="email">
            [EMAIL_ADDRESS]
          </a>

          <div className="socials">
            <a
              href="https://www.instagram.com/amey_bobade/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              Instagram
            </a>
            <a href="www.linkedin.com/in/amey-bobade" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Amey-0806/Amey-0806" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
