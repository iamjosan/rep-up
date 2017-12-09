import React, { Component } from "react";
import AdminBreadcrumb from "./AdminBreadcrumb";
import SearchBar from "./SearchBar";

class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.props.socket.emit("fetch users all", null);
    this.props.socket.on("fetch users all", res => {
      this.setState({ users: res });
    });
  }
  render() {
    return (
      <div>
        <AdminBreadcrumb
          paths={[
            { link: "/admin", name: "Admin" },
            { link: "#", name: "View Users" }
          ]}
        />
        {this.state.users.length === 0 ? (
          this.props.loading
        ) : (
          <SearchBar
            history={this.props.history}
            fetchedUsers={this.state.users}
            path="/admin/view-users/"
          />
        )}
      </div>
    );
  }
}

export default ViewUsers;
