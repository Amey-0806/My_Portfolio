import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNavClick = (e) => {
    const target = e.target.closest("a");
    if (!target || !target.hash || target.hash.startsWith("#") === false)
      return;

    const el = document.querySelector(target.hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={handleNavClick}>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
