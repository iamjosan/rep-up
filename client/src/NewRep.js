import React, { Component } from 'react';
import UploadFile from './UploadFile';
import { Card } from 'react-materialize';

class NewRep extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div>
				<Card>
					<h5>Guidelines</h5>
					<p>In order for your proof of rep to accepted, it must meet the following guidelines:</p>
					<ul>
						<li>Rule 1</li>
						<li>Rule 2</li>
						<li>Rule 3</li>
					</ul>
				</Card>
				<UploadFile reduxStore={this.props.reduxStore} socket={this.props.socket} />
			</div>
			)
	}
}

export default NewRep;