import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = ({ title, text }) => {
  return (
    <section className="cta-banner section-space" data-aos="zoom-in">
      <div className="container">
        <div className="cta-inner">
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <Link className="btn btn-brand" to="/contact">Get Free Site Visit</Link>
            <a className="btn btn-outline-brand" href="tel:+918625931661">Talk to Expert</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
