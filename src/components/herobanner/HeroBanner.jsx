import React from "react";
import { Button, Container } from "react-bootstrap";
import Header from "../header/Header";
import "./herobanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Header />
      <Container>
        <div className="bnr-cntnt">
          <div className="banner-left">
            <h5>Welcome to MediCare+ Clinic</h5>
            <h1>Best Specialists</h1>
            <p>
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <div className="banner-btn">
              <Button>Make an Appointment</Button>
              <Button>Departments</Button>
            </div>
          </div>
          <div className="banner-right">
            <div className="img-holder"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
