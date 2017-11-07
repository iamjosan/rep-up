import React, { Component } from 'react';
import './App.css';
import {Ladder} from './Ladder';
import {Navbar} from 'react-materialize';
import {Route,Switch,Redirect, Link} from 'react-router-dom';
import Profile from './UserProfile';
import LoginPage from './containers/LoginPage';
import LogOutLink from './containers/LogOutLink';
import Footer from './Footer';
import UsersAll from './UsersAll';
import NewRep from './NewRep';
import Register from './Register';
import io from 'socket.io-client';

const socket = io();

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {match:null};
	}
	
	render(){
		return(
			<main className="container">
			{Object.keys(this.props.userSession.user).length === 0
			? 	<Switch>
					<Route path="/register" render={(obj) => <Register socket={socket} />} /> 
					<Route path="/login" render={(obj) => <LoginPage socket={socket} history={obj.history} />} />
					<Redirect to="/login" />
				</Switch>
			: <Switch>
				<Route exact path="/" component={Ladder} />
				<Route exact path="/users" render={(obj) => <UsersAll history={obj.history} socket={socket} />} />
				<Route path="/users/:username" render={(obj) => <Profile reduxStore={this.props.userSession} match={obj.match} profileType="view" socket={socket} />} />
				<Route path="/profile" render={(obj) => <Profile profileType="edit" match={obj.match} reduxStore={this.props.userSession} socket={socket} /> } />
				<Route path="/new-rep" render={(ob) => <NewRep reduxStore={this.props.userSession} socket={socket} />} />
				<Route path="/login">
					<Redirect to="/" />
				</Route>
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
			}
			</main>
			)
	}
}

class App extends Component {
	constructor(props){
		super(props);
	}
	
  render() {
	  const watchStore = this.props.reduxState.subscribe(() => console.log(this.props.reduxState.getState()));
    return (
      <div>
		<Navbar brand='RepUp' href="#" right options={{closeOnClick: true}}>
			<li><Link to="/">Ladder</Link></li>
			<li><Link to="/profile">Profile</Link></li>
			<li><Link to="/new-rep">New Rep</Link></li>
			<li><LogOutLink /></li>
		</Navbar>
		<Main userSession={this.props.reduxState.getState()} />
		<Footer />
      </div>
    );
  }
}

export default App;
