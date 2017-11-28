import React, { Component } from "react";
import { SideNav, SideNavItem, Icon, Button } from "react-materialize";

class ApprovalSideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SideNav
        id="approval-sideNav"
        trigger={
          <span>
            <Icon>settings</Icon>
          </span>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem href="#" onClick={this.props.selectAll}>
          Select All
        </SideNavItem>
        <SideNavItem href="#" onClick={this.props.selectNone}>
          Select None
        </SideNavItem>
        <SideNavItem>
          <Button waves="light" onclick={this.props.approve}>
            Approve
          </Button>
        </SideNavItem>
        <SideNavItem>
          <Button waves="light" className="red" onClick={this.props.reject}>
            Reject
          </Button>
        </SideNavItem>
      </SideNav>
    );
  }
}

export default ApprovalSideNav;
