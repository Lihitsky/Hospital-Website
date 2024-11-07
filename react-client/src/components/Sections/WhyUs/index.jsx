import { Button } from "../../Button";

import BackgroundObjImage from "../../../assets/svg/background-object-1-why-us.svg";

import "./styles.scss";

export const WhyUs = () => {
  return (
    <div className="why-us-section">
      <div className="container-default">
        <div className="why-us-content">
          <div className="why-us-text">
            <div className="subheading-section">
              <div className="subheading-text">Чому ми</div>
              <div className="subheading-line"></div>
            </div>
            <h2>Ваше здоров’я – наш пріоритет</h2>
            <p className="why-us-description">
              Ми пропонуємо інноваційні медичні рішення, професійну команду та
              сучасне обладнання, що відповідає світовим стандартам. Наша мета –
              забезпечити максимально комфортні умови лікування та підтримку на
              кожному етапі відновлення.
            </p>
            <Button text="Дізнатися більше" style={{ marginTop: 15 }} />
          </div>
          <div className="why-us-image-container">
            <div className="why-us-bg-object why-us-bg-object-1">
              <img src={BackgroundObjImage} alt="Background decoration 1" />
            </div>
            <div className="why-us-transition-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
