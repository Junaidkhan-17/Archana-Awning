import "./Services.css";
import { FaDraftingCompass, FaTools, FaWrench, FaScrewdriver, FaBrush } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import CTA from "../../components/CTA/CTA";

const services = [
  { title: "Installation", icon: <FaTools />, description: "Professional onsite installation with alignment and structural checks." },
  { title: "Custom Design", icon: <FaDraftingCompass />, description: "Tailored awning and tensile concepts matching architecture and usage." },
  { title: "Repairing", icon: <FaWrench />, description: "Fast troubleshooting and component replacement for existing systems." },
  { title: "Shade Repairing", icon: <FaScrewdriver />, description: "Fabric, arm, and frame restoration for extended service life." },
  { title: "Flex Boards", icon: <FaBrush />, description: "Branded outdoor board solutions for visibility and promotion." },
];

const benefits = [
  {
    title: "Easy to Use",
    description: "Simple operation with smooth controls, making daily shade adjustment quick and convenient.",
  },
  {
    title: "Durable",
    description: "Strong frames and quality fabrics built to handle sun, dust, wind, and regular usage cycles.",
  },
  {
    title: "Affordable",
    description: "Practical solutions with balanced pricing, low maintenance needs, and long-term value.",
  },
  {
    title: "Enhances Beauty",
    description: "Neat and modern designs that improve storefronts, homes, and outdoor spaces.",
  },
];

const Services = () => {
  return (
    <>
      <section className="services-banner">
        <div className="container services-hero-content py-5" data-aos="fade-up">
          <p className="services-kicker">ARCHANA AWNING COMPANY</p>
          <h1>Services That Keep You Covered</h1>
          <p className="services-lead">
            From concept planning to long-term maintenance, we provide complete awning and
            tensile support for residential, commercial, and industrial spaces.
          </p>
          <div className="services-hero-points">
            <span>Site Survey & Measurement</span>
            <span>Custom Fabrication Support</span>
            <span>Installation & Safety Checks</span>
            <span>Repair & Performance Optimization</span>
          </div>
          <div className="services-hero-stats">
            <div className="services-hero-stat card-surface">
              <h3>End-to-End</h3>
              <p>Design, supply, install, and maintain under one team.</p>
            </div>
            <div className="services-hero-stat card-surface">
              <h3>Fast Response</h3>
              <p>Quick troubleshooting for motors, frames, and shade fabrics.</p>
            </div>
            <div className="services-hero-stat card-surface">
              <h3>Built for Weather</h3>
              <p>Solutions designed for heat, dust, rain, and daily usage cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionTitle title="Our Services" />
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.title}><ServiceCard {...service} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-light-panel">
        <div className="container">
          <SectionTitle title="Benefits" />
          <div className="row g-4">
            {benefits.map((benefit) => (
              <div className="col-sm-6 col-lg-3" key={benefit.title}>
                <div className="benefit-card card-surface" data-aos="flip-left">
                  <h5>{benefit.title}</h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Need Repair or New Installation?" text="Get quick support and practical recommendations from our experienced team." />
    </>
  );
};

export default Services;
