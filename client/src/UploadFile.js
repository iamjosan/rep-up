import React, { Component } from 'react';
import io from 'socket.io-client';
import { Input, Button, ProgressBar, Preloader } from 'react-materialize';
const SocketIOFileUpload = require('socketio-file-upload');

const socket = io();

class UploadFile extends Component{
	constructor(props){
		super(props);
		this.user = this.props.reduxStore.user;
		this.state = {progress: 0, saved: false};
	}
	
	componentDidMount(){
		const uploader = new SocketIOFileUpload(socket);
		uploader.listenOnSubmit(document.querySelector('#file-upload-btn'), document.querySelector('#file-upload-input'));
		uploader.addEventListener('start', event => {
			event.file.meta.userId = this.user.id;
		});
		
		//set progress state to zero on file choose
		uploader.addEventListener('choose', event => this.setState({progress: 0, saved: false }));
		uploader.addEventListener('progress', event => this.setState({progress: (event.bytesLoaded / event.file.size) * 100}));
		
		socket.on('upload file done', (msg) => this.setState({saved: true}));
	}
		
	
	render(){
		return(
			<div>
				<Input id="file-upload-input" type="file" />
				<ProgressBar progress={this.state.progress} />
				<Button id="file-upload-btn" children="Upload" />
				<span style={{marginLeft: '15px', color: '#2bbbad'}}>{this.state.saved ? 'Saved!' : ''}</span>
			</div>
			)
	}
}

export default UploadFile;