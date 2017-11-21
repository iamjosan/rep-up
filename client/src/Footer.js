import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, Row, Col } from "react-materialize";
import "./footer.css";

class NavButtonRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ render: true });
  }

  render() {
    return (
      <Route
        exact
        path={this.props.at}
        children={obj => (
          <NavButton
            icon={this.props.icon}
            routeMatch={obj.match}
            pathTo={this.props.to}
            history={obj.history}
          />
        )}
      />
    );
  }
}

class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  navigateTo(e) {
    e.preventDefault();
    this.props.history.push(this.props.pathTo);
  }

  toggleClass() {
    if (this.props.routeMatch) {
      return (
        <Button
          floating
          large
          icon={this.props.icon}
          className="active-footer"
          onClick={this.navigateTo.bind(this)}
        />
      );
    }
    return (
      <Button
        floating
        large
        icon={this.props.icon}
        onClick={this.navigateTo.bind(this)}
      />
    );
  }

  render() {
    return this.toggleClass();
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { render: false };
  }

  render() {
    return (
      <Row id="footer">
        <Col s={3}>
          <NavButtonRoute at="/" to="/" icon="list" />
        </Col>
        <Col s={3}>
          <NavButtonRoute at="/users*" to="/users" icon="search" />
        </Col>
        <Col s={3}>
          <NavButtonRoute at="/new-rep" to="/new-rep" icon="add" />
        </Col>
        <Col s={3}>
          <NavButtonRoute at="/profile*" to="/profile" icon="settings" />
        </Col>
      </Row>
    );
  }
}

export default Footer;
