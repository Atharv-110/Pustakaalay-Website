import React from "react";
import Accordion from "../utils/accordion";
import "../../css/main/faq.css";
import Heading from "../utils/heading";
import HorizontalRule from "../utils/horizontalRule";
import { accordionData } from "../../../assets/data/accordionData";

export default function faq() {
  return (
    <>
      <div className="faq">
        <Heading text="Frequently Asked" main="Questions" />

        <div className="accordion-container">
          {accordionData.map((prop) => {
            return( 
              <Accordion
                question={prop.question}
                answer={prop.answer}
              />
            );
          })}
        </div>

        <HorizontalRule />
      </div>
    </>
  );
}
