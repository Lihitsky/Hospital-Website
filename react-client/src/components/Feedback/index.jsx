import emailjs from "emailjs-com";

export const Feedback = () => {
  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log("Ошибка:", error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <label>
        Ваше имя:
        <input type="text" name="name" />
      </label>
      <label>
        Ваш email:
        <input type="phone" name="phone" />
      </label>
      <label>
        Сообщение:
        <textarea name="message" />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};
