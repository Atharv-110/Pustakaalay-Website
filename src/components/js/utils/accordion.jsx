import React, { useState, useEffect, useRef } from "react";
import "../../css/utils/accordion.css";
import Chevron from "../../../assets/img/chevron.svg";

export default function Accordion(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
      <div className="accordion">
        <button onClick={toggleState} className="accordion-visible">
          <span>{props.question}</span>
          <img className={toggle && "active"} src={Chevron} alt=""/>
        </button>

        <div
          className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
          style={{ height: toggle ? `${heightEl}` : "0px" }}
          ref={refHeight}
        >
          <p aria-hidden={toggle ? "true" : "false"}>
            {props.answer}
          </p>
        </div>
      </div>
  );
}
