import React, { Component } from 'react';
import SearchBar from './SearchBar';
import UserGrid from './UserGrid';
import io from 'socket.io-client';

const socket = io();

class UsersAll extends Component{
	constructor(props){
		super(props);
		this.state = {users: []};
	}
	
	//fetch all users from database
	//pass data to autocomplete component
	
	fetchUsersAll(){
		socket.emit('fetch users all', null);
		socket.on('fetch users all', usersAll => {
			this.setState({users: usersAll});
		});
	}
	
	componentDidMount(){
		this.fetchUsersAll();
	}
	
	render(){
		return(
		this.state.users.length === 0
		? <p>Loading...</p>
		:	<div>
				<SearchBar history={this.props.history} fetchedUsers={this.state.users} />
				<UserGrid fetchedUsers={this.state.users} />
			</div>
			)
	}
}

export default UsersAll;