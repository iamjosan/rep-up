import React, { Component } from "react";
import UploadFile from "./UploadFile.js";

class ChangeAvatar extends Component {
  constructor(props) {
    super(props);
  }
  /*
	* After new avatar image is saved, update redux state to show new file name
	*/
  render() {
    return (
      <div>
        <h5>Change Avatar</h5>
        <UploadFile
          socket={this.props.socket}
          reduxStore={this.props.reduxStore}
        />
      </div>
    );
  }
}

export default ChangeAvatar;
