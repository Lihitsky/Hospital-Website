import { useState } from "react";
import "./styles.scss";

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`burger-wrapper ${isOpen ? "animate" : ""}`}
      onClick={handleClick}
    >
      <div className="burger-line top"></div>
      <div className="burger-line middle"></div>
      <div className="burger-line bottom"></div>
    </div>
  );
};
