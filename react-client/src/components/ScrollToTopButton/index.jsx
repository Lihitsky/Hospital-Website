import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={buttonStyle}>
        ❮
      </button>
    )
  );
};

const buttonStyle = {
  cursor: "pointer",
  zIndex: 100,
  position: "fixed",
  bottom: "80px",
  right: "30px",
  padding: "20px 20px",
  fontSize: "24px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  transform: "rotate(90deg)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

export default ScrollToTopButton;
