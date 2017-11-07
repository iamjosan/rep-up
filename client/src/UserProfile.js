import React, {Component} from 'react';
import {ProfileHeader, ProfileSettings} from './Components';
import {userProfile} from './containers/profileComponents';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {user:null};
		
	}
	
	profileTypeData(type){
		let obj = {
			view: userProfile('fetch', this.props.match.params.username, this.setState.bind(this), this.props.socket),
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