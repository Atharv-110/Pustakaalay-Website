import React from "react";
import Accordian from '../utils/accordian';
import "../../css/main/faq.css";
import Heading from "../utils/heading";
import HorizontalRule from "../utils/horizontalRule";

export default function About() {
  return (
    <>
      <div className="faq">
        <Heading text="Frequently Asked Questions" main="FAQ" />
        
        <div className="container">
            <Accordian
            />
        </div>
        
        

        <HorizontalRule />
      </div>
    </>
  );
}