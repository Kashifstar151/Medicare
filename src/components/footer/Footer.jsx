import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./footer.css";

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#liink">About</Nav.Link>
                <Nav.Link href="#liiiink">Services</Nav.Link>
                <Nav.Link href="#liiiiink">News</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="social-icon">
            <div className="social">
              <img src={Facebook} alt="" />
            </div>
            <div className="social">
              <img src={Google} alt="" />
            </div>
            <div className="social">
              <img src={Twitter} alt="" />
            </div>
          </div>
          <p>©2020 PodPayment - 2020</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
