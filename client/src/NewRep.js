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
				<Card header='New Rep Guidelines'>
					In order for your proof of rep to accepted, it must meet the following guidelines:
					<ul>
						<li>Rule 1</li>
						<li>Rule 2</li>
						<li>Rule 3</li>
					</ul>
				</Card>
				<UploadFile reduxStore={this.props.reduxStore} />
			</div>
			)
	}
}

export default NewRep;