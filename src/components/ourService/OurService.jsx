import React from "react";
import { Container } from "react-bootstrap";
import "./ourService.css";
import ServiceCard from "./ServiceCard";
import Shape from "../assets/Shape.svg"
import tooth from "../assets/tooth.svg"
import Shape3 from "../assets/Shape3.svg"
import Shape4 from "../assets/Shape4.svg"

const OurService = (props) => {
  return (
    <div className="our-service">
      <Container>
        <div className="service-heading">
          <h2>Our Services</h2>
          <p>
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
        </div>
        <div className="service-card row">
          <ServiceCard   image={tooth} text="Dental Care"/>
          <ServiceCard image={Shape}  text="Pulmonary"/>
          <ServiceCard image={Shape3} text="Neurological"/>
          <ServiceCard image={Shape4} text="Prediatrics"/>
        </div>
      </Container>
    </div>
  );
};

export default OurService;
