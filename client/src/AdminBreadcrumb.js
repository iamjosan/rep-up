import React, { Component } from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./admin-breadcrumb.css";

class AdminBreadcrumb extends Component {
  render() {
    const crumbs = this.props.paths.map((path, i, arr) => {
      var icon;
      if (i + 1 !== arr.length) {
        icon = <Icon>chevron_right</Icon>;
      } else {
        icon = null;
      }
      return (
        <span key={i}>
          <Link to={path.link}>{path.name}</Link>
          {icon}
        </span>
      );
    });
    return <div className="admin-breadcrumb">{crumbs}</div>;
  }
}

export default AdminBreadcrumb;
