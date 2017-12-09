import React, { Component } from "react";
import { Card, Icon, Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import "./admin.css";

class Admin extends Component {
  render() {
    return (
      <div id="admin">
        <h2>Admin</h2>
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
