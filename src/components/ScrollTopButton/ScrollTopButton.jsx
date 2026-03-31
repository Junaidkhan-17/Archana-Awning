import "./ScrollTopButton.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button type="button" className={`scroll-top-btn ${visible ? "show" : ""}`} onClick={handleClick} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;
