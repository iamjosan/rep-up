import React from "react";
import { Row, Col, CollectionItem, Input } from "react-materialize";
import "./for-approval.css";

export default function ForApproval(props) {
  var col3;
  if (props.col3.match(/jpg|png/gi) !== null) {
    col3 = (
      <a href={"/img/" + props.col3} target="_blank">
        Proof
      </a>
    );
  } else {
    col3 = props.col3;
  }
  return (
    <CollectionItem className="for-approval">
      <Row>
        <Col s={2}>
          <Input
            type="checkbox"
            value={props.id}
            onChange={props.onChange}
            label=" "
          />
        </Col>
        <Col s={5}>{props.col2}</Col>
        <Col s={5}>{col3}</Col>
      </Row>
    </CollectionItem>
  );
}
