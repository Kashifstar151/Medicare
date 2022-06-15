import React from "react";
import "./ourService.css";

import Dental from "../assets/tooth.svg";
import Shape from "../assets/Shape.svg";

const ServiceCard = (props) => {
  return (
    <div className="product-card col">
      <img src={props.image} alt="teeth" />
      <h6>{props.text}</h6>
      <div className="learn-more">
        <span>LEARN MORE</span>
        <i className="las la-angle-right"></i>
      </div>
    </div>
  );
};

export default ServiceCard;
