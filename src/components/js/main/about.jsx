import React from "react";
import "../../css/main/about.css";
import Heading from "../utils/heading";
import HorizontalRule from "../utils/horizontalRule";

export default function About() {
  return (
    <>
      <div className="about">
        <Heading text="About" main="PUSTAKAALAY" />
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            vel, et asperiores illum voluptas minus deserunt dolor molestias
            perspiciatis consequatur. Dolore architecto perspiciatis natus
            beatae, in vitae rem asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil
            reiciendis expedita nesciunt alias totam placeat beatae sapiente
            incidunt cumque voluptatem itaque magni, eaque atque accusantium
            quia rem minus aliquam.
          </p>
          <p>
            Know more about{" "}
            <a
              className="link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pustakaalay
            </a>
            .
          </p>
        </div>
        <div className="about-link-div">
          <div className="about-link-text">
            <p>Connect With Us</p>
          </div>
          <div className="about-link">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              {" "}
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone="
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              {" "}
              <i className="bx bxl-discord-alt"></i>
            </a>
            <a
              href="mailto:info@pustakaalay.in"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="bx bxs-envelope"></i>
            </a>
          </div>
        </div>
        <HorizontalRule />
      </div>
    </>
  );
}
