import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Collapse from "bootstrap/js/dist/collapse";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const collapseRef = useRef(null);
  const collapseInstanceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!collapseRef.current) return;

    collapseInstanceRef.current = new Collapse(collapseRef.current, { toggle: false });

    const handleShown = () => setMenuOpen(true);
    const handleHidden = () => setMenuOpen(false);

    collapseRef.current.addEventListener("shown.bs.collapse", handleShown);
    collapseRef.current.addEventListener("hidden.bs.collapse", handleHidden);

    return () => {
      collapseRef.current?.removeEventListener("shown.bs.collapse", handleShown);
      collapseRef.current?.removeEventListener("hidden.bs.collapse", handleHidden);
      collapseInstanceRef.current?.dispose();
    };
  }, []);

  const handleToggleMenu = () => {
    collapseInstanceRef.current?.toggle();
  };

  const handleNavItemClick = () => {
    if (window.innerWidth < 992) {
      collapseInstanceRef.current?.hide();
    }
  };

  return (
    <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <NavLink className="navbar-brand brand-mark" to="/">
            <span>ARCHANA AWNING COMPANY</span>
            <small>The World of Awning & Tensile</small>
          </NavLink>
          <button
            className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
            type="button"
            aria-controls="mainNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav" ref={collapseRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item"><NavLink className="nav-link" to="/" onClick={handleNavItemClick}>Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/manufacturing" onClick={handleNavItemClick}>Manufacturing</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/services" onClick={handleNavItemClick}>Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact" onClick={handleNavItemClick}>Contact</NavLink></li>
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <a className="btn btn-brand" href="tel:+917709382191" onClick={handleNavItemClick}><FaPhoneAlt className="me-2" /> Call Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
