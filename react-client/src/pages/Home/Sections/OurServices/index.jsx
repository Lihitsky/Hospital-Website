import React from "react";

export const OurServices = () => {
  return (
    <div className="section our-services">
      <div className="container-default">
        <div className="subheading-wrapper center">
          <div className="subheading">Our services</div>
        </div>
        <h2 className="header-h2 center">Specialties</h2>
        <p className="paragraph-default center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
          nulla tincidunt fermentum. Sagittis pellentesque.
        </p>
        <div className="services-collection home w-dyn-list">
          <div role="list" className="services-grid w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="card">
                <img
                  alt="Pediatricians"
                  src="https://cdn.prod.website-files.com/5e31fbcb275ce1b6bb167cb4/5e33a8a0806f6d8fab02c33e_pediatricians-icon.svg"
                  className="icon-card"
                />
                <h3>Pediatricians</h3>
                <p className="paragraph-default">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  mauris nulla tincidunt appet fermentum amet sit.
                </p>
                <div className="mg-top-28px">
                  <a
                    href="/services/pediatricians"
                    className="button-secondary full-width w-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="card">
                <img
                  alt="Plastic Surgeons"
                  src="https://cdn.prod.website-files.com/5e31fbcb275ce1b6bb167cb4/5e33a8592e40db66bdca8bbd_plastic-surgeons-icon.svg"
                  className="icon-card"
                />
                <h3>Plastic Surgeons</h3>
                <p className="paragraph-default">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  mauris nulla tincidunt appet fermentum amet sit.
                </p>
                <div className="mg-top-28px">
                  <a
                    href="/services/plastic-surgeons"
                    className="button-secondary full-width w-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="card">
                <img
                  alt="Ophthalmologists"
                  src="https://cdn.prod.website-files.com/5e31fbcb275ce1b6bb167cb4/5e33a845cf951fb30f205313_ophthalmologists-icon.svg"
                  className="icon-card"
                />
                <h3>Ophthalmologists</h3>
                <p className="paragraph-default">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  mauris nulla tincidunt appet fermentum amet sit.
                </p>
                <div className="mg-top-28px">
                  <a
                    href="/services/ophthalmologists"
                    className="button-secondary full-width w-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg-top-32px center">
        <a href="/services" className="button-primary default w-button">
          Our Services
        </a>
      </div>
    </div>
  );
};
