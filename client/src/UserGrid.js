import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import "./user-grid.css";

//show all user avatars on a grid

class UserGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], userGrid: [] };
  }

  setUsers() {
    return new Promise((resolve, reject) => {
      this.setState({ users: this.props.fetchedUsers });
      resolve();
    });
  }

  userImages() {
    let imgAll = this.state.users.map((user, i) => (
      <Col s={4} key={i}>
        <Link to={"./users/" + user.username}>
          <img src={require("./img/" + user.avatar)} alt={user.username} />
        </Link>
      </Col>
    ));
    this.setState({ userGrid: imgAll });
  }

  componentDidMount() {
    this.setUsers().then(() => this.userImages());
  }

  render() {
    return <Row id="user-grid">{this.state.userGrid}</Row>;
  }
}

export default UserGrid;
