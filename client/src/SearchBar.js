import React, { Component } from "react";
import { Row, Autocomplete } from "react-materialize";
import "./search-bar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { users: {} };
  }

  //fetch all users from database
  //pass data to autocomplete component

  setUsersAll(usersProp) {
    let userData = {};
    usersProp.forEach(user => {
      userData[user.username] = null;
    });
    this.setState({ users: userData });
  }

  componentDidMount() {
    this.setUsersAll(this.props.fetchedUsers);
  }

  render() {
    return (
      <Row className="search-bar">
        <Autocomplete
          s={12}
          placeholder="Search Users"
          icon="search"
          limit={10}
          data={this.state.users}
          onAutocomplete={val => {
            this.props.history.push(this.props.path + val);
          }}
        />
      </Row>
    );
  }
}

export default SearchBar;
