import { Button } from "../../../../components/Button";
import { DOCTORS } from "../../../../constants/data";

import "./styles.scss";

export const OurDoctors = () => {
  return (
    <section className="our-doctors-section">
      <div className="container-default">
        <div className="our-doctors-text">
          <div className="our-doctors-subheading">Наша гордість</div>
          <h2 className="our-doctors-header">Наші лікарі</h2>
          <p className="our-doctors-description">
            Команда складається з досвідчених фахівців, які прагнуть забезпечити
            найкращу медичну допомогу.
          </p>
        </div>
        <div className="our-doctors-list">
          {DOCTORS.map((doctor, index) => (
            <div key={index} className="list-item-card">
              <div className="item-image-container">
                <img src={doctor.photoUrl} alt={`Фото ${doctor.name}`} />
              </div>
              <div className="item-text-container">
                <h2 className="item-title">{doctor.name}</h2>
                <div className="item-position">{doctor.position}</div>
                <p className="item-description">{doctor.quote}</p>
                <Button
                  text={"Дізнатись більше"}
                  href={`doctor/${doctor.routeName}`}
                  style={{ width: "100%", marginTop: "auto" }}
                  type="secondary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
