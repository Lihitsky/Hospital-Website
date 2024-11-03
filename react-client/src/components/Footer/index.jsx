import React from "react";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-default">
        <div className="w-layout-grid footer-top-grid">
          <img
            src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e326b2ece191136a59cf714_logo-white.svg"
            id="w-node-_5559221c-41b9-c7f7-236f-c0cb4682a9ad-4682a9aa"
            alt="Medica Webflow Template - Logo"
            className="footer-logo"
          />
          <div
            id="w-node-_5559221c-41b9-c7f7-236f-c0cb4682a9ae-4682a9aa"
            className="social-media-footer"
          >
            <a href="#" className="social-media-link w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e3a30890875f805b7e93ec1_facebook-icon.svg"
                alt="Facebook Icon - Medica Webflow Template"
                className="social-media-icon"
              />
            </a>
            <a href="#" className="social-media-link w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e3a309b0e42b05a63d435b4_twitter-icon.svg"
                alt="Tiwtter Icon - Medica Webflow Template"
                className="social-media-icon"
              />
            </a>
            <a href="#" className="social-media-link w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5f342b792b0404099509b9ea_instagram-icon.svg"
                alt="Instagram Icon - Medica Webflow Template"
                className="social-media-icon"
              />
            </a>
          </div>
        </div>
        <div className="w-layout-grid footer-columns-grid">
          <div className="footer-column">
            <h4 className="footer-title">Menu </h4>
            <ul role="list" className="footer-menu">
              <li className="footer-menu-item">
                <a
                  href="/home"
                  aria-current="page"
                  className="footer-link w--current"
                >
                  Home
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="/doctors-templates/doctors-template-1"
                  className="footer-link"
                >
                  Doctor Template 1
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="/doctors-templates/doctors-template-2"
                  className="footer-link"
                >
                  Doctor Template 2
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/blog/blog-template-1" className="footer-link">
                  Blog Template 1
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/blog/blog-template-2" className="footer-link">
                  Blog Template 2
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Utility Pages</h4>
            <ul role="list" className="footer-menu">
              <li className="footer-menu-item">
                <a href="/utility-pages/styleguide" className="footer-link">
                  Styleguide
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/utility-pages/licenses" className="footer-link">
                  Licenses
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="https://medicatemplate.webflow.io/401"
                  className="footer-link"
                >
                  Password Protected
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="https://medicatemplate.webflow.io/404"
                  className="footer-link"
                >
                  404 Not Found Page
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/utility-pages/start-here" className="footer-link">
                  Start Here
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/utility-pages/changelog" className="footer-link">
                  Changelog
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  href="https://brixtemplates.com/more-webflow-templates"
                  className="footer-link special"
                >
                  More Webflow Templates
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Contact Us</h4>
            <ul role="list" className="footer-contact">
              <li className="footer-menu-item">
                <a
                  href="tel:(404)874-4870"
                  className="footer-link-box w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796d5e61de195_phone-icon-top-bar.svg"
                    width="24"
                    alt="Phone Icon - Medica Webflow Template"
                    className="footer-contact-icon"
                  />
                  <div className="footer-link">(404) 874 - 4870</div>
                </a>
              </li>
              <li className="footer-menu-item">
                <div className="footer-address-block">
                  <img
                    src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e324271338ff1433b9f2338_pin-icon.svg"
                    alt="Location Icon - Medica Webflow Template"
                    className="footer-contact-icon address"
                  />
                  <div className="footer-address">
                    9663 Fulton Drive Carol Stream, IL 60188
                  </div>
                </div>
              </li>
              <li className="footer-menu-item">
                <a
                  href="mailto:info@medica.com"
                  className="footer-link-box w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796f60d1de196_email-icon-top-bar.svg"
                    width="24"
                    alt="Email Icon - Medica Webflow Template"
                    className="footer-contact-icon"
                  />
                  <div className="footer-link">info@medica.com</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Book an Appointment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              maecenas eros elit.
            </p>
            <div className="mg-top-28px">
              <a
                href="tel:(404)874-4870"
                className="button-icon w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/5e30f06b05f79621331ddc25/5e323cdde0a920f306739527_phone-icon.svg"
                  alt="Phone Icon - Medica Webflow Template"
                  className="icon-button primary"
                />
                <div className="button-secondary-text">(404) 874 - 4800</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Medica Template © Copyright | Designed &amp;Developed by{" "}
          <a href="https://brixtemplates.com/" target="_blank">
            BRIX Templates
          </a>
          |  <a href="https://webflow.com/">Powered by Webflow</a>
        </p>
      </div>
    </div>
  );
};
