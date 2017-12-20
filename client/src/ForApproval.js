import React from "react";
import { Row, Col, CollectionItem, Input } from "react-materialize";
import "./for-approval.css";

export default function ForApproval(props) {
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
        <Col s={5}>
          <a href={"/img/" + props.col3} targe="_blank">
            Proof
          </a>
        </Col>
      </Row>
    </CollectionItem>
  );
}
