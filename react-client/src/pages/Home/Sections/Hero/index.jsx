import BackgroundObj1Image from "../../../../assets/svg/background-object-1-hero.svg";
import BackgroundObj2Image from "../../../../assets/svg/background-object-2-hero.svg";
import { Button } from "../../../../components/Button";

import "./styles.scss";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-default">
        <div className="hero-content">
          <div className="hero-text">
            <div className="subheading-section">
              <div className="subheading-text">Травматологічне відділення</div>
              <div className="subheading-line"></div>
            </div>
            <h1>Дбаємо про здоров’я вашої родини</h1>
            <p className="hero-description">
              Ми спеціалізуємося на швидкій та професійній допомозі при травмах
              будь-якої складності. Наша команда лікарів забезпечує повний
              спектр медичних послуг – від первинної діагностики до
              реабілітації. Ми використовуємо сучасні методи лікування, щоб ваш
              шлях до одужання був безпечним і комфортним.
            </p>
            <Button
              text="Зв'язатися з нами"
              href="/contact"
              style={{ marginTop: 15 }}
            />
          </div>
          <div className="hero-image-container">
            <div className="hero-bg-object hero-bg-object-1">
              <img src={BackgroundObj1Image} />
            </div>
            <div className="hero-bg-object hero-bg-object-2">
              <img src={BackgroundObj2Image} />
            </div>
            <div className="hero-transition-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
