import React, { Component } from "react";
import UploadFile from "./UploadFile.js";
import InputForProfileChange from "./InputForProfileChange";

class ChangeProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { saved: false };
  }
  componentDidMount() {
    this.data(this.props.changeType);
  }
  data(type) {
    const obj = {
      CHANGE_AVATAR: () => {
        this.setState({
          title: "Change Avatar",
          reduxDispatch: "reduxDispatchChangeAvatar",
          propToChange: "avatar"
        });
      },
      CHANGE_EMAIL: () => {
        this.setState({
          title: "Change Email",
          reduxDispatch: "reduxDispatchChangeEmail",
          propToChange: "email"
        });
      },
      CHANGE_PASSWORD: () => {
        this.setState({
          title: "Change Password",
          reduxDispatch: "reduxDispatchChangePassword",
          propToChange: "password"
        });
      }
    };
    return obj[type]();
  }
  UI(type) {
    const obj = {
      CHANGE_AVATAR: (
        <UploadFile
          socket={this.props.socket}
          reduxStore={this.props.reduxStore}
          uploadType="CHANGE_AVATAR"
          onSave={this.updateStateAfterSave.bind(this)}
          updateState={this.updateState.bind(this)}
          updateSessionStorage={this.updateSessionStorage.bind(this)}
        />
      ),
      CHANGE_EMAIL: (
        <InputForProfileChange
          socket={this.props.socket}
          type="email"
          userID={this.props.reduxStore.user.id}
        />
      ),
      CHANGE_PASSWORD: (
        <InputForProfileChange
          socket={this.props.socket}
          type="password"
          userID={this.props.reduxStore.user.id}
        />
      )
    };
    return obj[type];
  }
  /*
  * After new avatar image is saved, update redux state to show new file name
  * Then delete sessionStorage and create new one with  current state
  */
  updateStateAfterSave(childData) {
    return new Promise((resolve, reject) => {
      this.setState(childData);
      resolve();
    });
  }
  updateState(data) {
    //dispatch the redux action
    this.props[this.state.reduxDispatch](data);
  }
  updateSessionStorage(user) {
    //set new sessionStorage with newly updated setState
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (
      newProps.reduxStore.user[this.state.propToChange] !==
      this.props.reduxStore.user[this.state.propToChange]
    ) {
      this.updateSessionStorage(newProps.reduxStore.user);
    }
    if (newProps.changeType !== this.props.changeType) {
      this.data(newProps.changeType);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h5>{this.state.title}</h5>
        {this.UI(this.props.changeType)}
      </div>
    );
  }
}

export default ChangeProfileInfo;
