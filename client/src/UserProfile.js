import io from 'socket.io-client';
import React, {Component} from 'react';
//import {Collection,CollectionItem,Row,Col} from 'react-materialize';
import {ProfileHeader, ProfileSettings} from './Components';
import {userProfile} from './containers/profileComponents';

const socket = io();

class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {user:null};
		
	}
	
	profileTypeData(type){
		let obj = {
			view: userProfile('fetch', this.props.match.params.username, this.setState.bind(this), socket),
			edit: userProfile('store', this.props.reduxStore, this.setState.bind(this))
		};
		return obj[type];
	}
	
	profileTypeUI(type){
		let obj = {
			view: null,
			edit: <ProfileSettings />
		}
		
		return obj[type];
	}
	
	componentDidMount(){
		this.profileTypeData(this.props.profileType)();
	}
	
	componentWillReceiveProps(newProps){
		if(newProps.profileType !== this.props.profileType){
			this.profileTypeData(newProps.profileType)();
		}
	}
	
	render(){
		return(
		this.state.user === null
		? <p>Loading...</p>
		: <div>
				<ProfileHeader user={this.state.user} />
					{this.profileTypeUI(this.props.profileType)}
			</div>
		
			)
	}
}

export default Profile;