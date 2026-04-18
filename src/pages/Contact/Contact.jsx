import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const locationLink =
  "https://www.google.com/maps/place/Teachers+Colony,+Wagdara,+Maharashtra+441110/@21.0937667,78.9863985,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4953e77117cbf:0x77f53f12cf4a5b09!8m2!3d21.0936688!4d78.9909222!16s%2Fg%2F11btx7ml08!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const enquiry = {
      name: (formData.get("name") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      service: (formData.get("service") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
    };

    const whatsappNumber = "917709382191";
    const text = [
      "Hello ARCHANA AWNING COMPANY,",
      "",
      "I would like to send an enquiry:",
      `Name: ${enquiry.name}`,
      `Phone: ${enquiry.phone}`,
      `Email: ${enquiry.email}`,
      `Service Type: ${enquiry.service}`,
      `Message: ${enquiry.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="section-space contact-page">
      <div className="container">
        <SectionTitle
          title="Contact Us"
          subtitle="Share your requirement and our team will guide you with the right awning and tensile solution."
        />

        <div className="contact-shell card-surface mb-4">
          <div className="row g-0">
            <div className="col-lg-4" data-aos="fade-right">
              <aside className="contact-box h-100">
                <h5>ARCHANA AWNING COMPANY</h5>
                <p className="contact-intro">
                  Reach out for site visits, custom design support, and quick assistance for installation or repair work.
                </p>

                <div className="contact-points">
                  <a className="contact-point" href={locationLink} target="_blank" rel="noreferrer">
                    <span className="contact-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <p>Teachers Colony, Wagdara, Maharashtra 441110</p>
                  </a>
                  <a className="contact-point" href="tel:+917709382191">
                    <span className="contact-icon">
                      <FaPhoneAlt />
                    </span>
                    <p>+91 77093 82191</p>
                  </a>
                  <a className="contact-point" href="tel:+918625931661">
                    <span className="contact-icon">
                      <FaPhoneAlt />
                    </span>
                    <p>+91 86259 31661</p>
                  </a>
                  <a className="contact-point" href="https://wa.me/917709382191" target="_blank" rel="noreferrer">
                    <span className="contact-icon">
                      <FaWhatsapp />
                    </span>
                    <p>Chat on WhatsApp</p>
                  </a>
                </div>

                <div className="contact-note">
                  <FaClock />
                  <span>Mon-Sat: 9:30 AM - 7:30 PM</span>
                </div>
              </aside>
            </div>

            <div className="col-lg-8" data-aos="fade-left">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h4>Request a Free Consultation</h4>
                <p className="form-subtitle">Fill in your details and we will contact you shortly.</p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Installation</option>
                      <option>Custom Design</option>
                      <option>Repairing</option>
                      <option>Shade Repairing</option>
                      <option>Flex Boards</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your area size, preferred style, or project timeline"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-actions">
                  <button type="submit" className="btn btn-brand">
                    Send Enquiry on WhatsApp
                  </button>
                  <span className="contact-form-hint">Fast response within business hours</span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="branch">
            <div className="branch-item" data-aos="fade-up" >
              <h3>Branch Office 1</h3>
              <p>Kailash Nagar, Birgaon, Raipur (C.G)</p>
            </div>
            <div className="branch-item " data-aos="fade-up" data-aos-delay="100">
              <h3>Branch Office 2</h3>
              <p>Brahmasthan Mau (UP) </p>
              <p>Ramjanam Srivastav: 7518320374</p>
            </div>
        </div>

        <div className="map-card card-surface" data-aos="zoom-in-up">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=21.0936688,78.9909222&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>   
  );
};

export default Contact;
