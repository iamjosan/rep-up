import React, { Component } from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ForApproval from "./ForApproval";
import { onChange } from "./containers/checkboxOnChange";
import ApprovalSideNav from "./ApprovalSideNav";

class GetNewRep extends Component {
  constructor(props) {
    super(props);
    this.state = { exp: [], checked: [] };
    this.onChange = onChange;
  }

  componentDidMount() {
    //fetch new experiences from database
    fetch("/get-new-rep")
      .then(res => res.json())
      .then(res => this.setState({ exp: res }));
  }
  render() {
    console.log(this.state.checked);
    const expAll = this.state.exp.map((exp, i) => {
      return (
        <ForApproval
          key={i + 1}
          id={exp.id.toString()}
          col2={exp.username}
          col3={exp.proof}
          onChange={this.onChange().bind(this)}
        />
      );
    });
    return this.state.exp.length === 0 ? (
      this.props.loading
    ) : (
      <Collection>
        <CollectionItem>
          <Row>
            <Col s={2}>
              <ApprovalSideNav />
            </Col>
            <Col s={5}>Username</Col>
            <Col s={5}>Image</Col>
          </Row>
        </CollectionItem>
        {expAll}
      </Collection>
    );
  }
}

export default GetNewRep;
