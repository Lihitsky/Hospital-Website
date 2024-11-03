import React from "react";

export const ContactBar = () => {
  return (
    <div className="section section-contact-bar">
      <div className="contact-bar-wrapper">
        <div className="w-layout-grid contact-bar-grid">
          <div
            id="w-node-b1c16193-a8e4-9fba-a563-18b977742972-0b1ddc26"
            className="contact-bar-column"
          >
            <img
              src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e31091fc3a640f77d1141b1_contact-bar-phone-icon.svg"
              alt="Contact Us - Medica Webflow Template"
              className="contact-bar-icon"
            />
            <div className="contact-bar-text">
              <div className="contact-bar-title">Contact Us</div>
              <a href="tel:4048507080" className="contact-bar-link">
                (404) 850 - 7080
              </a>
              <a href="mailto:info@medica.com" className="contact-bar-link">
                info@medica.com
              </a>
            </div>
          </div>
          <div
            id="w-node-c2f4a8c0-a7d1-16d4-b8dd-995056e33b29-0b1ddc26"
            className="contact-bar-column"
          >
            <img
              src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e310cbae800ca9e25770f6e_contact-bar-clock-icon.svg"
              alt="Open Hours - Medica Webflow Template"
              className="contact-bar-icon"
            />
            <div className="contact-bar-text">
              <div className="contact-bar-title">Open Hours</div>
              <div className="contact-bar-item">
                Mon - Fri: 8:00am to 5:00pm
              </div>
              <div className="contact-bar-item">Saturday: 9:00am to 3:30pm</div>
              <div className="contact-bar-item">Sunday: 9:00am to 3:30pm</div>
            </div>
          </div>
          <div
            id="w-node-_8ebb027d-e121-07c0-417d-79903db2ce49-0b1ddc26"
            className="contact-bar-column"
          >
            <img
              src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e310cb3cf36f64d2f4a3c0f_contact-bar-medicine-icon.svg"
              alt="Services - Medica Webflow Template"
              className="contact-bar-icon"
            />
            <div className="contact-bar-text">
              <div className="contact-bar-title">Services</div>
              <a
                href="https://medica-webflow-template.webflow.io/services/cardiology"
                className="contact-bar-link"
              >
                Cardiology
              </a>
              <a
                href="https://medica-webflow-template.webflow.io/services/gastroenterologist"
                className="contact-bar-link"
              >
                Gastroenterologist
              </a>
              <a
                href="https://medica-webflow-template.webflow.io/services/orthopaedic"
                className="contact-bar-link"
              >
                Orthopaedic
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-down-wrapper">
          <a href="#Section2" className="scroll-down w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e310e83ceeebb943f90393b_arrow-down.svg"
              alt="Chevron Icon - Medica Webflow Template"
              className="arrow-scroll-down"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
