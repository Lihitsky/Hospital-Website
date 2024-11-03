import React from "react";

export const AboutUs = () => {
  return (
    <div className="section section-about-us">
      <div className="container-default w-container">
        <div id="Section2" className="w-layout-grid split-section-grid">
          <div
            id="w-node-e9c5233f-7146-6914-7283-06983f4a4e40-0b1ddc26"
            className="split-column content"
          >
            <div className="justify-column">
              <div className="subheading-wrapper">
                <div className="subheading">About us</div>
                <div className="sufix-line"></div>
              </div>
              <h2>Our Qualified Team is Ready to Help You!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque.
              </p>
              <div className="mg-top-32px">
                <a href="/about" className="button-primary default w-button">
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="split-column image about-us">
            <div style={{ opacity: "0" }} className="background-object-about">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e3119bab76b837d2e2d5a83_background-object-about-us.svg"
                alt=""
              />
            </div>
            <div className="transition-bg-image about-us"></div>
            <div
              style={{ display: "block" }}
              className="transition-bg-solid about-us"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
