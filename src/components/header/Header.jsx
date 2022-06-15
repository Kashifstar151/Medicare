import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
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
              <Nav.Link href="#liiink">Services</Nav.Link>
              <Nav.Link href="#liiiink">News</Nav.Link>
              <Nav.Link href="#lijink">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
