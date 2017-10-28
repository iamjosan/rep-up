/*
//fetch user from database
function fetchUser(saveState){
	//send data to server
	socket.emit('fetch user', this.props.match.params.username);
	//listen to server to receive data
	socket.on('send user', userInfo => {
		saveState({user: userInfo[0]});
	});
}
//set user from redux store
function storeUser(saveState, stateUser){
	saveState({user: stateUser});
}
*/
export function userProfile(type, prop, stateSetter, socket = null){
	const obj = {
		fetch: () => {
			//send data to server
			//prop will be the match.params.username from Router
			socket.emit('fetch user', prop);
			//listen to server to receive data
			socket.on('send user', userInfo => {
				stateSetter({user: userInfo[0]});
			});
		},
		store: () => {
			//prop will be the state from the redux store
			stateSetter({user: prop.user});
		}
	};
	
	return obj[type];
}