import React from "react";
import "../../css/utils/footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-layer">
          <h3>
            COPYRIGHT &#169; 2023 ALL RIGHTS RESERVED | PUSTAKAALAY{" "}
            <i className="heart bx bxs-heart"></i>
          </h3>
          <p className="credits">
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/atharv-vani110/"
            >
              Atharv Vani
            </a>
          </p>
        </div>
      </div>
    </>
  );
}