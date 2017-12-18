import React, { Component } from "react";
import Profile from "./UserProfile";
import AdminBreadcrumb from "./AdminBreadcrumb";
import { Input, Button, Collection, CollectionItem } from "react-materialize";
import "./view-single-user.css";

class ViewSingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, admin: null, ban: null };
  }
  toggleSwitch = e => {
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.checked });
  };
  componentWillUnmount() {
    //if ban and admin values are different from initial state
    //save the new values to the database
    const banVal = this.state.ban,
      adminVal = this.state.admin,
      { ban, admin, id } = this.state.user;

    if (banVal != ban || adminVal != admin) {
      this.props.socket.emit("update user privileges", {
        admin: ~~adminVal,
        ban: ~~banVal,
        id: id
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <AdminBreadcrumb
          paths={[
            { link: "/admin", name: "Admin" },
            { link: "/admin/view-users", name: "View Users" },
            { link: "#", name: this.props.match.params.username }
          ]}
        />
        <Profile
          profileType="view"
          match={this.props.match}
          socket={this.props.socket}
          loading={this.props.loading}
          extractState={this.setState.bind(this)}
        />
        {this.state.user === null ? null : (
          <div className="admin-user-settings">
            <Collection>
              <CollectionItem>
                Admin
                <Input
                  id="switch-admin"
                  name="admin"
                  checked={this.state.admin}
                  type="switch"
                  label="Admin"
                  value="1"
                  onClick={this.toggleSwitch}
                />
              </CollectionItem>
              <CollectionItem>
                Ban
                <Input
                  id="switch-ban"
                  name="ban"
                  checked={this.state.ban}
                  type="switch"
                  label="Admin"
                  value="1"
                  onClick={this.toggleSwitch}
                />
              </CollectionItem>
            </Collection>
          </div>
        )}
      </div>
    );
  }
}

export default ViewSingleUser;
