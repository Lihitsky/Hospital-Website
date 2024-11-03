import { useState, useRef, useEffect } from "react";
import { Link } from "../Link";

import "./styles.scss";

export const DropDownList = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Закриття списку при кліку поза його межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className={`dropdown-toggle ${isOpen ? "current" : ""}`}
        onClick={toggleDropdown}
      >
        <div className={`dropdown-toggle-icon ${isOpen ? "rotate" : ""}`}>
          ❮
        </div>
        <div>{title}</div>
      </div>
      <nav className={`dropdown-list ${isOpen ? "visible" : ""}`}>
        {items.map((item, index) => (
          <Link key={index} text={item.text} href={item.href} type="dropdown" />
        ))}
      </nav>
    </div>
  );
};
