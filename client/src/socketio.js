import io from 'socket.io-client';
import React, {Component} from 'react';
import {Collection,CollectionItem,Row,Col} from 'react-materialize';

const socket = io();

class SocketComponent extends Component{
	//send data to server
	formSubmit(e){
		e.preventDefault();
		socket.emit('insert name', e.target.firstElementChild.value);
		e.target.firstElementChild.value = '';
	}
	
	render(){
		return(
			<form onSubmit={this.formSubmit.bind(this)}>
				<input type="text" />
				<input type="submit" value="Go" />
			</form>
			);
	}
}

class SocketMsgs extends Component{
	constructor(props){
		super(props);
		
		this.state = {msg:[]};
		this.newMsg();
	}
	componentDidMount(){
		fetch('/db').then(res => res.json()).then(res => this.setState({msg: res}));
	}
	//listen to server to receive data
	newMsg(){
		socket.on('new name', newMsg => {
			this.setState({msg: [...this.state.msg,newMsg]});
		});
	}
	
	render(){
		const allItems = this.state.msg.map((m,i) => {
			return(<CollectionItem key={i}>
				<Row>
					<Col s={2}>{i +1}</Col>
					<Col s={8}>{m.username}</Col>
					<Col s={2}>{m.rep}</Col>
				</Row>
			</CollectionItem>);
		});
		return(
			<Collection>
				<CollectionItem key={0}>
					<Row style={{fontWeight:'bold'}}>
						<Col s={2}>Rank</Col>
						<Col s={8}>User</Col>
						<Col s={2}>Rep</Col>
					</Row>
				</CollectionItem>
				{allItems}
			</Collection>
			);
	}
}
	
export {SocketComponent, SocketMsgs};