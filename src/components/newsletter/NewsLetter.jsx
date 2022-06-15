import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <Container>
        <div className="newsletter-wrapper">
          <h2>Subscribe to Newsletter</h2>
          <p>We have a wide experience in experience design and strategy,</p>
          <div className="email-wrapper">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Now
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
