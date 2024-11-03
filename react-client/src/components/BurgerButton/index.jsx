import { useState } from "react";
import "./styles.scss";

export const BurgerButton = ({ isOpen, setIsOpen }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isClicked);
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
