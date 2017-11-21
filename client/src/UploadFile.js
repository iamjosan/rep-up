import React, { Component } from "react";
import { Input, Button, ProgressBar } from "react-materialize";
const SocketIOFileUpload = require("socketio-file-upload");

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.reduxStore.user;
    this.state = { progress: 0, saved: false };
  }

  componentDidMount() {
    const uploader = new SocketIOFileUpload(this.props.socket);
    uploader.listenOnSubmit(
      document.querySelector("#file-upload-btn"),
      document.querySelector("#file-upload-input")
    );

    uploader.addEventListener("start", event => {
      console.log("starting");
      //pass upload type to meta
      event.file.meta.uploadType = this.props.uploadType;
      event.file.meta.userId = this.user.id;
    });
    uploader.addEventListener("submit", event => {
      console.log("submit even has been dispatched");
    });
    //set progress state to zero on file choose
    uploader.addEventListener("choose", event => {
      console.log(event);
      this.setState({ progress: 0, saved: false });
    });
    uploader.addEventListener("progress", event =>
      this.setState({ progress: event.bytesLoaded / event.file.size * 100 })
    );

    this.props.socket.on("upload file done", msg => {
      let obj = {
        CHANGE_AVATAR: () => {
          this.props.onSave({ saved: true, image: msg }).then(() => {
            this.props.updateState(msg);
            this.setState({ saved: true });
          });
        },
        NEW_REP: () => this.setState({ saved: true })
      };

      obj[this.props.uploadType]();
    });
  }

  render() {
    return (
      <div>
        <Input id="file-upload-input" type="file" />
        <ProgressBar progress={this.state.progress} />
        <Button id="file-upload-btn" children="Upload" />
        <span style={{ marginLeft: "15px", color: "#2bbbad" }}>
          {this.state.saved ? "Saved!" : ""}
        </span>
      </div>
    );
  }
}

export default UploadFile;
