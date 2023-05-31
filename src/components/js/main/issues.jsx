import React from "react";
import "../../css/main/issues.css";
import Heading from "../utils/heading";
import HorizontalRule from "../utils/horizontalRule";
import { issuesData } from "../../../assets/data/issuesData";

export default function About() {
  return (
    <>
      <div className="issues">
        <Heading text="Issues & Challenges in" main="CURRENT LIBRARIES" />
        <div className="issues-container">
          {issuesData.map((event) => {
            return (
              <div className="issues-card">
                <h1 className="index">{event.index}</h1>
                <h3 className="title">{event.title}</h3>
                <p className="info">
                  {event.info}
                </p>
              </div>
            );
          })}
        </div>
        <HorizontalRule />
      </div>
    </>
  );
}
