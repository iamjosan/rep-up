import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collection, CollectionItem, Row, Col } from "react-materialize";

class Ladder extends Component {
  constructor(props) {
    super(props);

    this.state = { row: [] };
  }

  componentDidMount() {
    fetch("/db")
      .then(res => res.json())
      .then(res => this.setState({ row: res }));
  }

  render() {
    const allItems = this.state.row.map((m, i) => {
      return (
        <CollectionItem key={i}>
          <Row>
            <Col s={2}>{i + 1}</Col>
            <Col s={8}>
              <Link to={"/users/" + m.username}>{m.username}</Link>
            </Col>
            <Col s={2}>{m.rep}</Col>
          </Row>
        </CollectionItem>
      );
    });
    return this.state.row.length === 0 ? (
      this.props.loading
    ) : (
      <Collection>
        <CollectionItem key={0}>
          <Row style={{ fontWeight: "bold" }}>
            <Col s={2}>Rank</Col>
            <Col s={8}>User</Col>
            <Col s={2}>Rep</Col>
          </Row>
        </CollectionItem>
        {allItems}
      </Collection>
    );
  }
}

export default Ladder;
