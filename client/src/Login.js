import io from 'socket.io-client';
import React,{Component} from 'react';
import {Row,Input,Button} from 'react-materialize';

const socket = io();

class Login extends Component{
	constructor(props){
		super(props);
		this.login();
	}
	
	formSubmit(e){
		e.preventDefault();
		socket.emit('user login', {username: e.target.querySelector('[type="text"]').value , password: e.target.querySelector('[type="password"]').value});
	}
	
	login(){
		socket.on('user login', res => {
			if(!res) throw new Error('Incorrect login');
			console.log(res[0]);
			//save session in state
			//and in browser cache
			this.props.reduxDispatchLogin(res[0]);
			sessionStorage.setItem('user', JSON.stringify(res[0]));
			//redirect to homepage
			this.props.history.push('/');
		});
	}
	
	render(){
		return(
			<div>
				<h1>Login Page</h1>
				<Row>
					<form onSubmit={this.formSubmit.bind(this)}>
						<Input type="text" label="username" s={12} />
						<Input type="password" label="password" s={12} />
						<Button waves="light">Login</Button>
					</form>
				</Row>
			</div>
			);
	}
}

export default Login;