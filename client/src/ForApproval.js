import React from "react";
import { Row, Col, Collection, CollectionItem, Input } from "react-materialize";

export default function ForApproval(props) {
  return (
    <CollectionItem>
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
        <Col s={5}>{props.col3}</Col>
      </Row>
    </CollectionItem>
  );
}
