import "./Hero.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import herobg from "../../assets/new-image/herobg.png";
import herobg1 from "../../assets/new-image/herobg1.png";
import herobg2 from "../../assets/new-image/herobg2.png";
import sir from "../../assets/new-image/sir.png";

const Hero = ({ title, subtitle, className = "" }) => {
    const heroImages = [herobg, herobg1, herobg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero-section ${className}`}
    style={{ backgroundImage: `url(${heroImages[currentImage]})` }} >
      <div className="container hero-content" data-aos="fade-up">
        <span className="hero-eyebrow">Since 2008</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link className="btn btn-brand" to="/contact">Get Quote</Link>
          <a className="btn btn-outline-light hero-call" href="tel:+917709382191">Call Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
