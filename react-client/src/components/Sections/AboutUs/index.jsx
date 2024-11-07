import { Button } from "../../Button";

import BackgroundObj1Image from "../../../assets/svg/background-object-1-about.svg";

import "./styles.scss";

export const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="container-default">
        <div className="about-content">
          <div className="about-text">
            <div className="subheading-section">
              <div className="subheading-text">Про нас</div>
              <div className="subheading-line"></div>
            </div>
            <h2>Ми поруч із вами на шляху до здоров’я</h2>
            <p className="about-description">
              Наша команда лікарів об’єднана єдиною місією – забезпечити
              найвищий рівень медичної допомоги для кожного пацієнта. Ми понад
              10 років допомагаємо відновлювати здоров’я нашим пацієнтам,
              застосовуючи передові методи лікування, індивідуальний підхід і
              турботу.
            </p>
            <Button text="Детальніше про нас" style={{ marginTop: 15 }} />
          </div>
          <div className="about-image-container">
            <div className="about-bg-object about-bg-object-1">
              <img src={BackgroundObj1Image} alt="Background decoration 1" />
            </div>
            <div className="about-transition-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
