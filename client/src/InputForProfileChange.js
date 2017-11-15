import React, { Component } from "react";
import { Input, Button } from "react-materialize";

class InputForProfileChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      msgColor: "",
      password: "",
      newpassword: "",
      newemail: "",
      label: "",
      id: "",
      userID: this.props.userID
    };
  }
  componentDidMount() {
    this.data(this.props.type);
    this.changed();
  }
  data(type) {
    const obj = {
      email: () => {
        this.setState({
          label: "New Email",
          id: "newemail"
        });
      },
      password: () => {
        this.setState({
          label: "New Password",
          id: "newpassword"
        });
      }
    };
    obj[type]();
  }
  onChange(e) {
    //store input data in state
    let k = e.target.id,
      v = e.target.value;
    this.setState({ [k]: v, msg: "" });
  }
  formSubmit(e) {
    e.preventDefault();
    let newData = this.state.id,
      password = this.state.password;
    //check if any fields are emtpy
    //and highlight them if they are
    if ([newData, password].includes("")) {
      document.querySelectorAll("form input").forEach(elem => {
        if (elem.value.length === 0) {
          elem.style.borderBottom = "1px solid red";
        } else {
          elem.style.borderBottom = "1px solid #9e9e9e";
        }
      });
      return this.setState({ msg: "Fill out all fields", msgColor: "red" });
    }
    //send to server if all fields have been entered
    this.props.socket.emit("change profile info", {
      userID: this.state.userID,
      newDataType: this.props.type,
      newData: this.state[this.state.id],
      password: this.state.password
    });
  }
  changed() {
    this.props.socket.on("change profile info", response => {
      this.setState(response);
      console.log(response);
    });
  }
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.formSubmit.bind(this)}>
        <Input
          id={"new" + this.props.type}
          type={this.props.type}
          label={this.state.label}
          onChange={this.onChange.bind(this)}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          onChange={this.onChange.bind(this)}
        />
        <Button waves="light">Save</Button>
        <span style={{ marginLeft: "15px", color: this.state.msgColor }}>
          {this.state.msg}
        </span>
      </form>
    );
  }
}

export default InputForProfileChange;
