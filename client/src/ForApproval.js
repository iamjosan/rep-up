import React from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";

export default function ForApproval(props) {
  return (
    <CollectionItem>
      <Row>
        <Col s={2}>
          //id refers to number ID that corresponds to that row in the MySQL
          //table
          <input type="checkbox" value={props.id} onChange={props.onChange} />
        </Col>
        <Col s={5}>props.col2</Col>
        <Col s={5}>props.col3</Col>
      </Row>
    </CollectionItem>
  );
}
