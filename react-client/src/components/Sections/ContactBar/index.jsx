import PhoneIcon from "../../../assets/svg/contact-bar-phone.svg";
import ClockIcon from "../../../assets/svg/contact-bar-clock.svg";
import MedicineIcon from "../../../assets/svg/contact-bar-medicine.svg";

import "./styles.scss";

export const ContactBar = () => {
  return (
    <div className="contact-bar-section">
      <div className="contact-bar-wrapper">
        <div className="contact-bar-container">
          <div className="contact-bar-item">
            <img src={PhoneIcon} className="contact-bar-icon" />
            <div className="contact-bar-info">
              <div className="contact-bar-title">Зв'яжіться з нами</div>
              <a href="tel:380501234567" className="contact-bar-link">
                +38 (050) 123-45-67
              </a>
              <a
                href="mailto:chernyahivtmo@gmail.com"
                className="contact-bar-link"
              >
                chernyahivtmo@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-bar-item">
            <img src={ClockIcon} className="contact-bar-icon" />
            <div className="contact-bar-info">
              <div className="contact-bar-title">Години роботи</div>
              <div>Пн - Пт: 8:00 - 20:00</div>
              <div>Субота: 9:00 - 16:00</div>
              <div>Неділя: Вихідний</div>
            </div>
          </div>
          <div className="contact-bar-item">
            <img src={MedicineIcon} className="contact-bar-icon" />
            <div className="contact-bar-info">
              <div className="contact-bar-title">Послуги</div>
              <a href="/services/trauma-surgery" className="contact-bar-link">
                Травматологічна хірургія
              </a>
              <a href="/services/physiotherapy" className="contact-bar-link">
                Фізіотерапія
              </a>
              <a href="/services/orthopedic-care" className="contact-bar-link">
                Ортопедичне лікування
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
