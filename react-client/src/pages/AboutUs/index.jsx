import { DOCTORS } from "../../constants/data";
import Image1 from "../../assets/images/about-us-image-1.jpg";
import Image2 from "../../assets/images/about-us-image-2.jpg";
import Image3 from "../../assets/images/about-us-image-3.jpg";
import Image4 from "../../assets/images/about-us-image-4.jpg";

import "./index.scss";

export const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="container-default">
          <div className="about-us-content">
            <div className="about-us-text">
              <h1>Про нас</h1>
              <p className="about-us-description">
                Травматологічне відділення КНП "Черняхівське ТМО" – сучасний
                центр медичної допомоги для пацієнтів із травмами та
                ортопедичними захворюваннями. Наше відділення – це команда
                професіоналів, які щодня працюють задля вашого здоров’я та
                мобільності.
              </p>
            </div>
            <div className="about-us-image-container">
              <div
                className="about-us-bg"
                style={{ backgroundImage: `url(${Image1})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <div className="container-default">
          <div className="about-us-content reverse">
            <div className="about-us-text">
              <h1>Наша команда</h1>
              <p className="about-us-description">
                <p>
                  У нашому відділенні працюють чотири досвідчені лікарі
                  ортопеди-травматологи:
                </p>
                <ul>
                  {DOCTORS.map((doctor, index) => (
                    <li key={index}>
                      <a href={`doctor/${doctor.routeName}`}>{doctor.name}</a>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 30 }}>
                  Кожен із них має високий рівень кваліфікації та багаторічний
                  досвід, забезпечуючи якісну допомогу жителям нашої громади.
                </p>
              </p>
            </div>
            <div className="about-us-image-container">
              <div
                className="about-us-bg"
                style={{ backgroundImage: `url(${Image2})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <div className="container-default">
          <div className="about-us-content">
            <div className="about-us-text">
              <h1>Наші послуги</h1>
              <p className="about-us-description">
                <p>
                  Ми пропонуємо широкий спектр травматологічної та ортопедичної
                  допомоги, серед яких:
                </p>
                <ul>
                  <li>
                    Тотальне та субтотальне ендопротезування кульшових і
                    колінних суглобів
                  </li>
                  <li>Кісткова пластика та реконструктивні операції</li>
                  <li>Остеосинтез при переломах усіх локалізацій</li>
                  <li>Лікування плоскостопості та інших деформацій стопи</li>
                  <li>
                    Сучасні малоінвазивні методи, включаючи PRP-терапію та
                    внутрішньосуглобові ін’єкції гіалуронової кислоти
                  </li>
                  <li>
                    Операції на кисті, лікування хвороби Дюпюітрена, бурситів,
                    артрозів
                  </li>
                </ul>
                <p>
                  Ми впровадили передові методики регіонарної анестезії під
                  контролем УЗД, що дозволяє значно зменшити післяопераційний
                  дискомфорт і прискорити реабілітацію.
                </p>
              </p>
            </div>
            <div className="about-us-image-container">
              <div
                className="about-us-bg"
                style={{ backgroundImage: `url(${Image3})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <div className="container-default">
          <div className="about-us-content reverse">
            <div className="about-us-text">
              <h1>Графік роботи</h1>
              <p className="about-us-description">
                <p>
                  Цілодобова допомога у приймальному відділенні для пацієнтів із
                  гострими травмами.
                </p>
                <p>
                  Амбулаторний прийом: <br />
                  Понеділок – п’ятниця, з 08:00 до 16:00, кабінет №16 <br />
                  Попередній запис через реєстратуру.
                </p>
              </p>
            </div>
            <div className="about-us-image-container">
              <div
                className="about-us-bg"
                style={{ backgroundImage: `url(${Image4})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
