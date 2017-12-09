import React, { Component } from "react";
import Profile from "./UserProfile";
import AdminBreadcrumb from "./AdminBreadcrumb";
import { Input, Button, Collection, CollectionItem } from "react-materialize";
import "./view-single-user.css";

class ViewSingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = { admin: true, ban: false };
  }
  toggleSwitch = e => {
    console.log(e.target.checked);
  };
  save(e) {
    e.preventDefault();
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
        <div className="admin-user-settings">
          <Collection>
            <CollectionItem>
              Admin
              <Input
                id="switch-admin"
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
                type="switch"
                label="Admin"
                value="1"
                onClick={this.toggleSwitch}
              />
            </CollectionItem>
          </Collection>
          <Button waves="light">Save</Button>
        </div>
      </div>
    );
  }
}

export default ViewSingleUser;
