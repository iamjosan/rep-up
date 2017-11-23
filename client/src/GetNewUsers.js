import React, { Component } from "react";
import { onChange } from "./containers/checkboxOnChange";

class GetNewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: "loading", checked: [] };
    this.onChange = onChange.bind(this);
  }

  componentDidMount() {
    //fetch new users from database
    fetch("/get-new-users")
      .then(res => res.json())
      .then(res => this.setState({ users: res }));
  }

  render() {
    return this.state.users === "loading" ? this.props.loading : null;
  }
}

export default GetNewUsers;
