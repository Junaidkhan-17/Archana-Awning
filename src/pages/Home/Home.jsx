import "./Home.css";

import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import CTA from "../../components/CTA/CTA";
import FoldingAwning from "../../assets/new-image/FoldingAwning.png";
import WindowAwning1 from "../../assets/new-image/WindowAwning1.png";
import DropAwning from "../../assets/new-image/DropAwning.png";
import HutAwning from "../../assets/new-image/HutAwning.png";
import TensileStructure from "../../assets/new-image/TensileStructure.png";
import HutAwning1 from "../../assets/new-image/HutAwning1.png";
import verticalAwning from "../../assets/images/vertical-awning.svg";
import CarParkingAwning from "../../assets/new-image/CarParkingAwning.png";
import home from "../../assets/new-image/home.png";
import pakode from "../../assets/new-image/pakode.png";
import HutAwning3 from "../../assets/new-image/HutAwning3.png";
import TensileStructure1 from "../../assets/new-image/TensileStructure1.png";
import IntelligentAutomation from "../../assets/new-image/IntelligentAutomation.png";
import sir from "../../assets/new-image/sir.png";
import automation from "../../assets/new-image/automation.jpg";
import automation1 from "../../assets/new-image/automation1.png";

const categories = [
  { title: "Folding Awning", image: FoldingAwning, description: "Retractable shading for homes, showrooms, and cafes." },
  { title: "Window Awning", image: WindowAwning1, description: "Elegant facade protection with weather-resistant fabric." },
  { title: "Drop Awning", image: DropAwning, description: "Vertical drop systems for balconies and storefronts." },
  { title: "Hut Awning", image: HutAwning, description: "Stylish hut profile designs for premium outdoor spaces." },
  { title: "Tensile Structures", image: TensileStructure, description: "Wide-span tension systems for commercial applications." },
  { title: "Vertical Awning", image: HutAwning1, description: "Luxury pergola solutions with modern architectural finish." },
  { title: "Intelligent Automation", image: IntelligentAutomation, description: "Luxury pergola solutions with modern architectural finish." },
  { title: "Car Parking Awning", image: CarParkingAwning, description: "Luxury pergola solutions with modern architectural finish." },
];

const featured = [
  { title: "Folding Awning", image: FoldingAwning, description: "Smart and durable retractable systems." },
  { title: "Tensile Parking", image: TensileStructure1, description: "Large format shade protection for vehicle zones." },
  { title: "Hut Awning", image: HutAwning, description: "Decorative weather shield with strong framing." },
  { title: "Vertical Awning", image: verticalAwning, description: "Space-saving modern systems for side coverage." },
];

const whyChooseItems = [
  {
    title: "Since 2008",
    description: "Trusted hands-on experience in awning and tensile projects across residential and commercial sites.",
  },
  {
    title: "3-10 Years Warranty",
    description: "Reliable material and system coverage based on product type and project requirements.",
  },
  {
    title: "Custom Design",
    description: "Tailor-made shades and structures designed to match your space, style, and daily usage.",
  },
  {
    title: "Affordable Pricing",
    description: "Practical solutions with transparent pricing and value-focused recommendations.",
  },
];

const Home = () => {

  return (
    <section className="home-page">
      <Hero className="home-hero" title="ARCHANA AWNING COMPANY" subtitle="Complete Awning & Tensile Solutions for Sun & Rain Protection" />

      <section className="section-space">
        <div className="container">
          <SectionTitle
            title="Product Categories"
            subtitle="Industrial-grade awning and tensile products engineered for performance and visual impact."
          />
            <div className="row g-4 justify-content-center">
            {categories.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-light-panel">
        <div className="container">
          <SectionTitle title="Why Choose Us" />
          <div className="row g-4 align-items-stretch why-layout">
            <div className="col-lg-7">
              <div className="why-list">
                {whyChooseItems.map((item) => (
                  <div className="why-card card-surface" data-aos="fade-up" key={item.title}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left">
                <img src={sir} alt="Company Director" className="why-sir" />              
                <h4>Owner : <p>Sir. Abhishek Shrivastav</p></h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionTitle title="Featured Products" />
          <div className="row g-4">
            {featured.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-light-panel">
        <div className="container">
          <SectionTitle
            title="Fabric Selection"
            subtitle="Choose fabric systems based on budget, warranty needs, and long-term UV performance."
          />
          <div className="row g-4">
            <div className="col-lg-6">
              <article className="fabric-card card-surface" data-aos="fade-right">
                <h4>SunSetter (PVC)</h4>
                <ul>
                  <li>Budget-friendly</li>
                  <li>1-year warranty</li>
                  <li>Commercial use ready</li>
                </ul>
              </article>
            </div>
            <div className="col-lg-6">
              <article className="fabric-card card-surface" data-aos="fade-left">
                <h4>ProSolar (Acrylic)</h4>
                <ul>
                  <li>Premium finish</li>
                  <li>10-year warranty</li>
                  <li>UV protection up to 90% + heat reduction</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space automation-section">
        <div className="automation-bg" style={{ backgroundImage: `url(${automation1})` }} aria-hidden="true" />
        <div className="container automation-content">
          <SectionTitle title="Automation Highlights" />
            <div className="row g-4 justify-content-center">
              {["Remote Control", "Wind Sensor", "Sun Sensor", "Motorized systems up to 75 sq.m", "Wired + RTS technology"].map((item) => (
                <div className="col-sm-4 col-lg-2 d-flex justify-content-center" key={item}>
                  <div className="auto-chip card-surface" data-aos="flip-up">
                    <span className="auto-chip-text">{item}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-light-panel">
        <div className="container">
          <SectionTitle title="Work Showcase" />
          <div className="row g-4">
            {[home, pakode, HutAwning3, TensileStructure1].map((img, idx) => (
              <div className="col-sm-6 col-lg-3" key={idx}>
                <div className="image-hover-wrap" data-aos="zoom-in-up">
                  <img src={img} alt={`Project ${idx + 1}`} className="project-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Get Your Custom Awning Installed Today"
        text="Book a free consultation and site inspection with Nagpur's trusted awning experts."
      />
    </section>
  );
};

export default Home;
