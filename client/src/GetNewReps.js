import React, { Component } from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ForApproval from "./ForApproval";
import { onChange } from "./containers/checkboxOnChange";
import ApprovalSideNav from "./ApprovalSideNav";
import { selectAll, approval } from "./ForApprovalMethods";
import "./fade-away.css";
import AdminBreadcrumb from "./AdminBreadcrumb";

class GetNewReps extends Component {
  constructor(props) {
    super(props);
    this.state = { rep: [], checked: [] };
    this.onChange = onChange;
    this.selectAll = selectAll(true);
    this.selectNone = selectAll(false);
  }

  componentDidMount() {
    //fetch new reps from database
    fetch("/get-new-reps")
      .then(res => res.json())
      .then(res => {
        var userState;
        if (res.length === 0) {
          userState = [
            { id: "null", username: "No New Reps", proof: "At This Time" }
          ];
        } else {
          userState = res;
        }
        this.setState({ rep: userState });
        this.approve = approval(
          "approve",
          "rep",
          this.props.socket,
          this.state.rep
        );
        this.reject = approval(
          "reject",
          "rep",
          this.props.socket,
          this.state.rep
        );
      });
  }
  render() {
    console.log(this.state.rep);
    const repAll = this.state.rep.map((rep, i) => {
      return (
        <ForApproval
          key={i + 1}
          id={rep.id.toString()}
          col2={rep.username}
          col3={rep.proof}
          onChange={this.onChange().bind(this)}
        />
      );
    });
    return (
      <div>
        <AdminBreadcrumb
          paths={[
            { link: "/admin", name: "Admin" },
            { link: "#", name: "New Reps" }
          ]}
        />
        {this.state.rep.length === 0 ? (
          this.props.loading
        ) : (
          <Collection style={{ marginBottom: 0 }}>
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
                <Col s={5}>Image</Col>
              </Row>
            </CollectionItem>
            {repAll}
          </Collection>
        )}
      </div>
    );
  }
}

export default GetNewReps;
