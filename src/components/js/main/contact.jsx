import React from "react";
import Heading from "../utils/heading";
import "../../css/main/contact.css";
import eventLogo from "../../../assets/img/logo.png";
// import HorizontalRule from "../utils/horizontalRule";

export default function Contact() {
  return (
    <>
      <div className="contact-div" id="contact">
        {/* <HorizontalRule /> */}
        <Heading text="Any Queries?" main="Contact us" />
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-link">
              <i className="contact-icon bx bxl-whatsapp"></i>
              <div className="contact-link-a">
                <a
                  href="https://api.whatsapp.com/send?phone="
                  target="_blank"
                  rel="noreferrer"
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>
            <div className="contact-link">
              <i className="contact-icon bx bx-envelope"></i>
              <div className="contact-link-a">
                <a
                  href="mailto:info@pustakaalay.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@pustakaalay.in
                </a>
              </div>
            </div>
            <div className="contact-link">
              <i className="contact-icon bx bxs-map"></i>
              <div className="contact-link-a">
                <a
                  href="https://g.page/medi-caps-university-indore?share"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <img src={eventLogo} alt="event" />
            <div className="contact-social">
              <a
                href="https://instagram.com/"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="mailto:info@pustakaalay.in"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-envelope"></i>
              </a>
              <a
                href="/"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-discord-alt"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone="
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}