import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import webdock from "../../assets/new-image/webdock.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <h5>ARCHANA AWNING COMPANY</h5>
            <p>The World of Awning & Tensile</p>
            <p className="mb-0">For All Your Sun & Rain Protection Needs</p>
          </div>
          <div className="col-lg-4">
            <h6>Contact</h6>
            <p><FaPhoneAlt className="me-2" />7709382191</p>
            <p><FaPhoneAlt className="me-2" />8625931661</p>
          </div>
          <div className="col-lg-3">
            <h6>Address</h6>
            <p className="mb-0"><FaMapMarkerAlt className="me-2" />Plot No. 57, Rajiv Nagar, Hingna Road, MIDC Area, Nagpur</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container d-flex justify-content-between flex-wrap gap-2">
          <span>Established 2008</span>
          <span> 
            <a href="https://webdockstudios.com/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2">
            <h4 className="powered-by">Powered By</h4>
            <img src={webdock} alt="WebDock" className="webdock-logo" />
            </a>
          </span>
          <span>Awning & Tensile Structure Manufacturing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
