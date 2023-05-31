import React from "react";
import Heading from "../utils/heading";
import HorizontalRule from "../utils/horizontalRule";
import "../../css/main/services.css";
import { servicesData } from "../../../assets/data/servicesData";

const services = () => {
  return (
    <>
      <div className="service">
        <Heading text="Key Features & Services" main="Our Offerings" />
        <div className="service-container">
          {servicesData.map((event) => {
            return (
              <div className="service-card">
                <div className="service-icon">
                  <i class={event.icon}></i>
                </div>
                <h3 className="service-title">{event.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="service-info">
          <div className="service-left">
            <Heading
              main="4000+ NEW PHYSICAL BOOKS TO BE BROUGHT INTO THE LIBRARY"
            />
          </div>
          <div className="service-right">
            <ul>
                <li>The books will be in physical form and not e-books</li>
                <li>The stock will get replaced every 6 months</li>
                <li>Titles will cover 20+ genres (everything from toddlers to typhoons)</li>
            </ul>
          </div>
        </div>
        <div className="service-info second">
          <div className="service-left">
            <Heading
              main="DIGITIZATION"
            />
          </div>
          <div className="service-right">
            <ul>
                <li>Efficient issuing and submission process </li>
                <li>Digital access to book titles through application</li>
                <li>(Tablet) Screens in library with mind games and 3d visualisation</li>
            </ul>
          </div>
        </div>
        <HorizontalRule />
      </div>
    </>
  );
};

export default services;
