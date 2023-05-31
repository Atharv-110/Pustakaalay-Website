import React from "react";
import "../../css/main/hero.css";
import introLogo from "../../../assets/img/logo.png";
// import uniLogo from "../images/medicaps_logo.png"
// import clubLogo from "../images/sahityik_logo.png"
// import years25 from "../images/Logo_25.png"
import Heading from "../utils/heading";

export default function Home() {
  return (
    <>
      <div className="home-div" id="home">
        <div className="home-container">
        <img src={introLogo} alt="brand" className="intro" />
        <Heading main="PUSTAKAALAY" />
        <h2>preserving the past, opening the future</h2>
        </div>
      </div>
    </>
  );
}
