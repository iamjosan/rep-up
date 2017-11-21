import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LogOut extends Component {
  constructor(props) {
    super(props);
  }

  onClick(e) {
    e.preventDefault();
    //delete session
    sessionStorage.clear();
    //update redux state
    this.props.reduxDispatchLogout();
    //redirect to login page
    this.props.history.push("/login");
  }

  render() {
    return (
      <Link to="#" onClick={this.onClick.bind(this)}>
        Log Out
      </Link>
    );
  }
}

export default withRouter(LogOut);
