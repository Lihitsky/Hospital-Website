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
            <h2>Піклуємось про здоров'я кожного пацієнта</h2>
            <p className="about-description">
              Відділення оснащене передовими засобами для лікування травм, а
              також команда лікарів та медичного персоналу має багаторічний
              досвід в ортопедії, травматології та фізіотерапії. Ми прагнемо
              забезпечити комфорт та підтримку на кожному етапі вашого
              лікування.
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
