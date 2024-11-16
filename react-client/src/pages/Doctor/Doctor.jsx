import { useParams } from "react-router-dom";
import { DOCTORS } from "../../constants/data";
import PhoneIcon from "../../assets/svg/telephone.svg";
import MainIcon from "../../assets/svg/mail.svg";

import "./styles.scss";

export const Doctor = () => {
  const { name } = useParams();
  const doctorDate = DOCTORS.find((item) => item.routeName === name);

  return (
    <div className="doctor-section">
      <div className="container-default">
        <div className="doctor-content">
          <div className="doctor-text">
            <div className="subheading-section">
              <div className="subheading-text">{doctorDate.position}</div>
              <div className="subheading-line"></div>
            </div>
            <h2>{doctorDate.name}</h2>
            <div className="doctor-contact">
              <a className="contact-ring" href={`tel:${doctorDate.phone}`}>
                <img src={PhoneIcon} style={{ height: 16 }} />
              </a>
              <a className="contact-ring" href={`mailto:${doctorDate.mail}`}>
                <img src={MainIcon} style={{ height: 12 }} />
              </a>
            </div>
            <p className="doctor-description">
              Більше <b>{doctorDate.experienceYears}</b>{" "}
              {doctorDate.experienceYears % 100 >= 11 &&
              doctorDate.experienceYears % 100 <= 19
                ? "років"
                : doctorDate.experienceYears % 10 === 1
                ? "рік"
                : doctorDate.experienceYears % 10 >= 2 &&
                  doctorDate.experienceYears % 10 <= 4
                ? "роки"
                : "років"}{" "}
              стажу <br />
              Більше ніж <b>{doctorDate.operationsCount}</b> успішних операцій{" "}
              <br />
              Та більше <b>{doctorDate.patientsCount}</b> задоволених пацієнтів
              <br />
              <br />
              Основні напрямки: <br />
              {doctorDate.services.map((item) => (
                <>
                  <a
                    href={`https://uk.wikipedia.org/wiki/${item}`}
                    target="_blank"
                  >
                    {item}
                  </a>
                  <br />
                </>
              ))}
            </p>
          </div>
          <img className="doctor-image" src={doctorDate.mainPhotoUrl} />
        </div>
      </div>
    </div>
  );
};
