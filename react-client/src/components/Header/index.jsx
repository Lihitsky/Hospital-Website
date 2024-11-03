import { DropDownList } from "../DropDownList";
import { Link } from "../Link";

import MailIcon from "../../assets/svg/mail.svg";
import TelIcon from "../../assets/svg/telephone.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";

import "./styles.scss";
import { Button } from "../Button";
import { BurgerButton } from "../BurgerButton";

const dropdownItems = [
  {
    id: 1,
    title: "Лікарі",
    items: [
      {
        text: "Д-р Олександра Шевченко",
        href: "/doctors/oleksandra-shevchenko",
      },
      { text: "Д-р Іван Коваль", href: "/doctors/ivan-koval" },
      {
        text: "Д-р Наталія Бондаренко",
        href: "/doctors/nataliya-bondarenko",
      },
    ],
  },
  {
    id: 2,
    title: "Пацієнти",
    items: [
      { text: "Марія Петренко", href: "/patients/mariya-petrenko" },
      { text: "Олексій Іванченко", href: "/patients/oleksiy-ivanchenko" },
      { text: "Катерина Сидорова", href: "/patients/kateryna-sydorova" },
    ],
  },
  {
    id: 3,
    title: "Прийоми",
    items: [
      {
        text: "Консультація - 10:00",
        href: "/appointments/consultation-10am",
      },
      {
        text: "Повторний прийом - 14:00",
        href: "/appointments/follow-up-2pm",
      },
      { text: "Обстеження - 17:30", href: "/appointments/physical-530pm" },
    ],
  },
];

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container-default">
        {/* Top Bar */}
        <div className="header-top-bar">
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
          <a href="/home" className="logo">
            <b>КНП "Черняхівське ТМО"</b>
            <br />
            ЧЕРНЯХІВСЬКОЇ СЕЛИЩНОЇ РАДИ
          </a>
          <nav>
            <Link text="Головна" href="/" type="header" />
            <DropDownList
              title={dropdownItems[0].title}
              items={dropdownItems[0].items}
            />
            <Button
              text="Зв'язатися з нами"
              style={{ marginLeft: 25 }}
              href="/contact"
            />
          </nav>

          {/* For mobile */}
          <BurgerButton />
        </div>
      </div>
    </div>
  );
};
