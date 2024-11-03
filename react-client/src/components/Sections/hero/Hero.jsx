import React from "react";

export const Hero = () => {
  return (
    <div id="Hero" className="full-image-section">
      <div className="container-default w-container">
        <div className="w-layout-grid split-section-grid">
          <div
            id="w-node-af684ee7-055e-79ef-1b13-d5aa208aae56-0b1ddc26"
            className="split-column content"
          >
            <div className="justify-column hero">
              <div className="subheading-wrapper">
                <div className="subheading accent">Hospital Center</div>
                <div className="sufix-line"></div>
              </div>
              <h1>Healthcare for Family’s Health</h1>
              <p className="large-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque.
              </p>
              <div className="mg-top-32px">
                <a href="/contact" className="button-primary large w-button">
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="split-column image hero">
            <div style={{ opacity: "0" }} className="bg-object-1---hero">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e310425e800ca41f276c5f9_background-object-1-hero.svg"
                alt=""
              />
            </div>
            <div style={{ opacity: "0" }} className="bg-object-2---hero">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e310615cf36f636714a14ee_background-object-2-hero.svg"
                alt=""
              />
            </div>
            <div className="transition-bg-image hero"></div>
            <div
              style={{ display: "block" }}
              className="transition-bg-solid"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
