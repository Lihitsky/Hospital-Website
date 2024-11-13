import { Button } from "../Button";
import { BurgerButton } from "../BurgerButton";
import { useState } from "react";
import { DropDownList } from "../DropDownList";
import { Link } from "../Link";

import MailIcon from "../../assets/svg/mail.svg";
import TelIcon from "../../assets/svg/telephone.svg";
import GeoIcon from "../../assets/svg/geo.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-default">
        <div className="footer-bar">
          <div className="contact-info">
            <a className="contact-info-item" href="tel:123123123">
              <img src={TelIcon} alt="Phone Icon" />
              <div>(096) 123 - 1234</div>
            </a>

            <a
              className="contact-info-item"
              href="mailto:chernyahivtmo@gmail.com"
            >
              <img src={MailIcon} alt="Email Icon" />
              <div>chernyahivtmo@gmail.com</div>
            </a>
            <a
              className="contact-info-item"
              target="_blank"
              href="https://maps.app.goo.gl/vMwLa94NogUHsK75A"
            >
              <img src={GeoIcon} alt="Geolocation Icon" />
              <div>12301, смт. Черняхів, вул. Івана Франка, 42 – З</div>
            </a>
          </div>
          <div className="social-media">
            <a href="#" className="social-media-link">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="#" className="social-media-link">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
            <a href="#" className="social-media-link">
              <img src={InstagramIcon} alt="Twitter Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
