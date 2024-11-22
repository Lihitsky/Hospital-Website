import { Button } from "../Button";
import { BurgerButton } from "../BurgerButton";
import { useState } from "react";
import { DropDownList } from "../DropDownList";
import { Link } from "../Link";

import MailIcon from "../../assets/svg/mail.svg";
import TelIcon from "../../assets/svg/telephone.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";

import "./styles.scss";
import { DOCTORS } from "../../constants/data";
import { LINKS, TEXT } from "../../constants/common";

const doctorDropdownItems = DOCTORS.map((doctor) => ({
  text: doctor.name,
  href: `/doctor/${doctor.routeName}`,
}));

const dropdownItems = [
  {
    id: 1,
    title: "Лікарі",
    items: doctorDropdownItems,
  },
];

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="container-default">
        {/* Top Bar */}
        <div className="header-top-bar">
          <div className="contact-info">
            <a className="contact-info-item" href={LINKS.PHONE}>
              <img src={TelIcon} alt="Phone Icon" />
              <div>{TEXT.PHONE}</div>
            </a>

            <a className="contact-info-item" href={LINKS.MAIL}>
              <img src={MailIcon} alt="Email Icon" />
              <div>{TEXT.MAIL}</div>
            </a>
          </div>
          <div>
            <a href="#" className="social-media-link">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="#" className="social-media-link">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Nav menu Bar */}
      <div className="container-default">
        <div className="header-bottom-bar">
          <a href="/" className="logo">
            <b>КНП "Черняхівське ТМО"</b>
            <br />
            ЧЕРНЯХІВСЬКОЇ СЕЛИЩНОЇ РАДИ
          </a>
          <nav
            className={`navigation-wrapper ${isBurgerOpen ? "visible" : ""}`}
          >
            <Link text="Головна" href="/" type="header" />
            <Link text="Про нас" href="/about-us" type="header" />
            <Link text="Контакти" href="/contact" type="header" />

            <DropDownList
              title={dropdownItems[0].title}
              items={dropdownItems[0].items}
            />
            <Button
              text="Зв'язатися з нами"
              style={!isBurgerOpen ? { marginLeft: 35 } : { marginTop: 15 }}
              href="/contact"
            />
          </nav>

          {/* For mobile */}
          <BurgerButton isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />
        </div>
      </div>
    </div>
  );
};
