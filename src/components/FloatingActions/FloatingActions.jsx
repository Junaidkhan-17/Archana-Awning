import "./FloatingActions.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <a href="https://wa.me/917709382191" target="_blank" rel="noreferrer" className="float-btn whatsapp" aria-label="Chat on WhatsApp"><FaWhatsapp /></a>
      <a href="tel:+917709382191" className="float-btn call" aria-label="Call now"><FaPhoneAlt /></a>
    </div>
  );
};

export default FloatingActions;
