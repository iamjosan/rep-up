import React, { Component } from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ForApproval from "./ForApproval";
import { onChange } from "./containers/checkboxOnChange";

class GetNewExp extends Component {
  constructor(props) {
    super(props);
    this.state = { exp: "loading", checked: [] };
    this.onChange = onChange.bind(this);
  }

  componentDidMount() {
    //fetch new experiences from database
    fetch("/get-new-exp")
      .then(res => res.json())
      .then(res => this.setState({ exp: res }));
  }
  render() {
    const expAll = this.state.exp.map((exp, i) => {
      return (
        <ForApproval
          key={i + 1}
          id={exp.id}
          col2={exp.username}
          col3={exp.image}
          onChange={this.onChange}
        />
      );
    });
    return this.state.exp === "loading" ? (
      this.props.loading
    ) : (
      <Collection>
        <CollectionItem>
          <Row>
            <Col s={2} />
            <Col s={5}>Username</Col>
            <Col s={5}>Image</Col>
          </Row>
        </CollectionItem>
        {expAll}
      </Collection>
    );
  }
}

export default GetNewExp;
