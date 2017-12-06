import React, { Component } from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ForApproval from "./ForApproval";
import { onChange } from "./containers/checkboxOnChange";
import ApprovalSideNav from "./ApprovalSideNav";
import { selectAll, approval } from "./ForApprovalMethods";
import "./fade-away.css";

class GetNewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], checked: [] };
    this.onChange = onChange;
    this.selectAll = selectAll(true);
    this.selectNone = selectAll(false);
  }

  componentDidMount() {
    //fetch new users from database
    fetch("/get-new-users")
      .then(res => res.json())
      .then(res => {
        this.setState({ users: res });
        this.approve = approval(
          "approve",
          "users",
          this.props.socket,
          this.state.users
        );
        this.reject = approval(
          "reject",
          "users",
          this.props.socket,
          this.state.users
        );
      });
  }
  render() {
    //console.log(this.state.user);
    const userAll = this.state.users.map((user, i) => {
      return (
        <ForApproval
          key={i + 1}
          id={user.id.toString()}
          col2={user.username}
          col3={user.gll_name}
          onChange={this.onChange().bind(this)}
        />
      );
    });
    return this.state.users.length === 0 ? (
      this.props.loading
    ) : (
      <Collection>
        <CollectionItem>
          <Row>
            <Col s={2}>
              <ApprovalSideNav
                selectAll={this.selectAll}
                selectNone={this.selectNone}
                approve={this.approve}
                reject={this.reject}
              />
            </Col>
            <Col s={5}>Username</Col>
            <Col s={5}>GLL Name</Col>
          </Row>
        </CollectionItem>
        {userAll}
      </Collection>
    );
  }
}

export default GetNewUsers;
