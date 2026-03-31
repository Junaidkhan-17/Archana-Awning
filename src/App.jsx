import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingActions from "./components/FloatingActions/FloatingActions";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import Home from "./pages/Home/Home";
import Manufacturing from "./pages/Manufacturing/Manufacturing";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const initAos = () => {
      const isMobile = mobileQuery.matches;
      const prefersReducedMotion = reducedMotionQuery.matches;

      AOS.init({
        duration: prefersReducedMotion ? 0 : isMobile ? 550 : 900,
        once: true,
        offset: isMobile ? 28 : 80,
        easing: "ease-out-cubic",
        disable: prefersReducedMotion,
      });
    };

    initAos();

    const handleMotionChange = () => {
      initAos();
      AOS.refresh();
    };

    mobileQuery.addEventListener("change", handleMotionChange);
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMotionChange);
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="app-shell">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <ScrollTopButton />
    </div>
  );
};

export default App;
