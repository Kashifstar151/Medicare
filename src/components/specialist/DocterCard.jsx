import React from "react";
import { Card } from "react-bootstrap";
import "./specialist.css";

const DocterCard = (props) => {
  return (
    <div className="doc-card-body col">
      <Card style={{ width: "274px" }}>
        <div className="doct-card-img"></div>
        <Card.Body>
          <Card.Title>{props.data}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocterCard;
