const Marquee = () => {
  return (
    <div className="marquee-section">
      <div className="marquee">
        <div className="marquee-content">
          <span>React</span>
          <span>NODE</span>
          <span>FULLSTACK</span>
          <span>AI</span>
          <span>MACHINE LEARNING</span>
          <span>APIS</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span>React</span>
          <span>NODE</span>
          <span>FULLSTACK</span>
          <span>AI</span>
          <span>MACHINE LEARNING</span>
          <span>APIS</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
