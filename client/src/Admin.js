import React, { Component } from "react";
import { Card, Icon, Row, Col, CardPanel } from "react-materialize";
import { Link } from "react-router-dom";
import "./admin.css";

class Admin extends Component {
  render() {
    console.log(this.props.reduxState.user);
    return this.props.reduxState.user.admin === 0 ? (
      <CardPanel>
        <Icon>warning</Icon>
        &nbsp;
        <span style={{ position: "relative", top: "-5px" }}>
          You do not have access to this page
        </span>
      </CardPanel>
    ) : (
      <div id="admin">
        <h4>Admin</h4>
        <Row>
          <Col s={12}>
            <Link to="/admin/new-users">
              <Card>
                <Icon>account_circle</Icon>&nbsp;Approve New Users
              </Card>
            </Link>
          </Col>
          <Col s={12}>
            <Link to="/admin/new-reps">
              <Card>
                <Icon>stars</Icon>&nbsp;Approve New Reps
              </Card>
            </Link>
          </Col>
          <Col s={12}>
            <Link to="/admin/view-users">
              <Card>
                <Icon>people</Icon>&nbsp;View All Users
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
