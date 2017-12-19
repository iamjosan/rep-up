import React, { Component } from "react";
import UploadFile from "./UploadFile.js";
import AdminBreadcrumb from "./AdminBreadcrumb";

class ChangeAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = { saved: false };
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
  updateState(image) {
    //dispatch the redux action
    this.props.reduxDispatchChangeAvatar(image);
  }
  updateSessionStorage(user) {
    //set new sessionStorage with newly updated setState
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps.reduxStore.user);
    if (newProps.reduxStore.user.avatar !== this.props.reduxStore.user.avatar) {
      this.updateSessionStorage(newProps.reduxStore.user);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <UploadFile
          socket={this.props.socket}
          reduxStore={this.props.reduxStore}
          uploadType="CHANGE_AVATAR"
          onSave={this.updateStateAfterSave.bind(this)}
          updateState={this.updateState.bind(this)}
          updateSessionStorage={this.updateSessionStorage.bind(this)}
        />
      </div>
    );
  }
}

export default ChangeAvatar;
