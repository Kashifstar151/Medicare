import React from "react";
import { Container, Button } from "react-bootstrap";
import "./clinic.css";

import DoctorWoman from "../assets/doctorWoman.svg";

const Clinic = () => {
  return (
    <div className="clinic">
      <Container>
        <div className="clinic-wrapper">
          <div className="clinic-left">
            <h2>Clinic With Innovative</h2>
            <p>
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="clinic-right">
            <div className="float-card-wrapper">
              <div className="float-card-left">
                <div className="float-card">
                  <img src={DoctorWoman} alt="Doctor" />
                  <h6>Qualified Doctors</h6>
                </div>
                <div className="float-card">
                  <img src={DoctorWoman} alt="Doctor" />
                  <h6>Emergency Care</h6>
                </div>
              </div>
              <div className="float-card-right">
                <div className="float-card">
                  <img src={DoctorWoman} alt="Doctor" />
                  <h6>@4 Hours Service</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Clinic;
