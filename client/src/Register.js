import React, { Component } from 'react';
import { Input, Button, Row } from 'react-materialize';

class Register extends Component{
	constructor(props){
		super(props);
		this.state = {msg: '', msgColor: 'red', username: '', gllName: '', email: '', password: ''};
		this.register();
	}
	
	onChange(e){
		//set state for input data
		const k = e.target.id,
		v = e.target.value;
		
		this.setState({[k]: v});
	}
	
	formSubmit(e){
		e.preventDefault();
		const { username, gllName, email, password } = this.state;
		//if any fields are empty
		//highlight them red and show error message
		if([username, gllName, email, password].includes('')){
			document.querySelectorAll('form input').forEach(elem => {
				if(elem.value.length === 0){
					elem.style.borderBottom = '1px solid red';
				}
				else{
					elem.style.borderBottom = '1px solid #9e9e9e';
				}
			});
			return this.setState({msg: 'Fill out all fields', msgColor: 'red'});
		}
		//send to server if all fields have been entered
		this.props.socket.emit('user register', { username, gllName, email, password });
	}
	
	register(){
		this.props.socket.on('user register', response => {
			this.setState(response);
			console.log(response);
		});
	}
	
	render(){
		//console.log(this.state);
		return(
			<div>
				<h2>Register</h2>
				<Row>
					<form onSubmit={this.formSubmit.bind(this)}>
						<Input ref="username" id="username" type="text" label="username" s={12} onChange={this.onChange.bind(this)}/>
						<Input id="gllName" type="text" label="GLL username" s={12} onChange={this.onChange.bind(this)}/>
						<Input id="email" type="email" label="email" s={12} onChange={this.onChange.bind(this)}/>
						<Input id="password" type="password" label="password" s={12} onChange={this.onChange.bind(this)}/>
						<Button waves="light">Register</Button>
						<span style={{marginLeft: '15px', color: this.state.msgColor}}>{ this.state.msg }</span>
					</form>
				</Row>
			</div>
		)
	}
}

export default Register;