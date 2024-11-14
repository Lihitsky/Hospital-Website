import MailIcon from "../../assets/svg/mail.svg";
import TelIcon from "../../assets/svg/telephone.svg";
import GeoIcon from "../../assets/svg/geo.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";

import { LINKS, TEXT } from "../../constants/common";
import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-default">
        <div className="footer-bar">
          <div className="contact-info">
            <a className="contact-info-item" href={LINKS.PHONE}>
              <img src={TelIcon} alt="Phone Icon" />
              <div>{TEXT.PHONE}</div>
            </a>

            <a className="contact-info-item" href={LINKS.MAIL}>
              <img src={MailIcon} alt="Email Icon" />
              <div>{TEXT.MAIL}</div>
            </a>
            <a
              className="contact-info-item"
              target="_blank"
              href={LINKS.GEOLOCATION}
            >
              <img src={GeoIcon} alt="Geolocation Icon" />
              <div>{TEXT.GEOLOCATION}</div>
            </a>
          </div>
          <div className="social-media">
            <a href={LINKS.FACEBOOK} className="social-media-link">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href={LINKS.TWITTER} className="social-media-link">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
            <a href={LINKS.INSTAGRAM} className="social-media-link">
              <img src={InstagramIcon} alt="Twitter Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
