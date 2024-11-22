import emailjs from "emailjs-com";
import { useState } from "react";
import InputMask from "react-input-mask";

import "./styles.scss";
import { Button } from "../Button";
import { LINKS, TEXT } from "../../constants/common";

export const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_SUBMISSIONS = 3; // Максимальна кількість запитів

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введіть ваше ім'я.";
    }

    const phonePattern = /^\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone =
        "Введіть коректний номер телефону у форматі +38 (097) 123 45 67.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkSpam = () => {
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const now = Date.now();

    if (lastSubmitTime) {
      const timeDifference = now - lastSubmitTime;

      if (timeDifference < 300000) {
        alert("Зачекайте 5 хвилин перед наступним відправленням.");
        return false;
      }
    }
    return true;
  };

  const checkRequestLimit = () => {
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10
    );

    if (requestCount >= MAX_SUBMISSIONS) {
      alert("Ви досягли ліміту на відправлення запитів.");
      return false;
    }

    return true;
  };

  const incrementRequestCount = () => {
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10
    );
    localStorage.setItem("requestCount", (requestCount + 1).toString());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (!checkSpam() || !checkRequestLimit()) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_gj5m7b8",
        "template_tyu8tsn",
        e.target,
        "duU_CimNCImisvOqA"
      )
      .then(
        (result) => {
          console.log("Сообщение отправлено:", result.text);
          alert("Ваше повідомлення відправлено!");

          localStorage.setItem("lastSubmitTime", Date.now().toString());

          incrementRequestCount();
        },
        (error) => {
          console.log("Ошибка:", error.text);
          alert("Виникла помилка при відправці повідомлення.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="feedback-section">
      <div className="container-default">
        <div className="feedback-content">
          <div className="feedback-form">
            <h1>Чим можемо допомогти?</h1>
            <form onSubmit={sendEmail}>
              <label>
                Ваше ім'я:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                Ваш номер:
                <InputMask
                  mask="+38 (999) 999 99 99"
                  maskChar={null}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label>
                Повідомлення:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </label>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Надсилається..." : "Відправити"}
              </button>
            </form>
          </div>
          <div className="feedback-info">
            <div className="info-buttons-container">
              <h3>Потрібна допомога?</h3>
              <Button
                text="Зателефонувати"
                href={LINKS.PHONE}
                style={{ maxWidth: "280px" }}
              />
              <Button
                text="Написати емейл"
                type="secondary"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  maxWidth: "280px",
                }}
              />
            </div>
            <div className="info-location-container">
              <h4>Завітайте до нас</h4>
              <p className="city">{TEXT.CITY}</p>
              <a className="phone">+38 {TEXT.PHONE}</a>
              <a className="address">{TEXT.GEOLOCATION}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
