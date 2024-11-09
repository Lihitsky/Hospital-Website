import React from "react";

export const BookAppointment = () => {
  return (
    <div className="section-banner">
      <div className="container-default w-container">
        <div className="w-layout-grid split-section-grid">
          <div
            id="w-node-ddb3dd2b-8950-2628-fcf0-54e84f19d49d-4f19d49b"
            className="split-column content"
          >
            <div className="justify-column">
              <div className="background-object-banner">
                <img
                  src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e31f9ec5b016d342c2b5fe3_background-banner-object.svg"
                  alt=""
                />
              </div>
              <div className="subheading-wrapper">
                <div className="subheading white">Book an Appointment</div>
              </div>
              <h2 className="header-h2 white">
                Our Medical Team is Ready to Help You.
              </h2>
              <p className="paragraph-default white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque.
              </p>
              <div className="mg-top-32px">
                <div className="flex-buttons">
                  <a href="/contact" className="button-primary white w-button">
                    Contact Us
                  </a>
                  <a
                    href="tel:4048507080"
                    className="button-secondary-icon white w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e31f518778457356ae87cf8_white-phone-icon.svg"
                      alt="Phone Icon - Medica Webflow Template"
                      className="icon-button"
                    />
                    <div>(404) 850 - 7080</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="split-column image banner">
            <div className="transition-bg-image banner-cta"></div>
            <div className="transition-bg-solid about-us"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
