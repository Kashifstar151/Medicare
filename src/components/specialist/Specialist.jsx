import React from "react";
import { Container } from "react-bootstrap";
import DocterCard from "./DocterCard";
import "./specialist.css";

const Specialist = () => {
  return (
    <div className="specialist">
      <Container>
        <div className="service-heading">
          <h2>We Have The Best Specialist</h2>
          <p>
            We have a wide experience in experience design and strategy, with
            locally-rooted knowledge.
          </p>
        </div>
        <div className="docter-card-wrapper row">
          <DocterCard data="Dr. Awatif Ali" text="Dental Care"/>
          <DocterCard data="Dr. Filipa Gespar" text="Cradiology"/>
          <DocterCard data="Dr. Sukhmeet Gorae" text="Neurological"/>
          <DocterCard  data="Dr. Siri Jakobsson" text="Prediatrics"/>
        </div>
      </Container>
    </div>
  );
};

export default Specialist;
