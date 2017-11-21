import React, { Component } from "react";
import SearchBar from "./SearchBar";
import UserGrid from "./UserGrid";

class UsersAll extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  //fetch all users from database
  //pass data to autocomplete component

  fetchUsersAll() {
    this.props.socket.emit("fetch users all", null);
    this.props.socket.on("fetch users all", usersAll => {
      this.setState({ users: usersAll });
    });
  }

  componentDidMount() {
    this.fetchUsersAll();
  }

  render() {
    return this.state.users.length === 0 ? (
      this.props.loading
    ) : (
      <div>
        <SearchBar
          history={this.props.history}
          fetchedUsers={this.state.users}
        />
        <UserGrid fetchedUsers={this.state.users} />
      </div>
    );
  }
}

export default UsersAll;
