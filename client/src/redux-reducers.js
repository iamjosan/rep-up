import { combineReducers } from "redux";
/*
{
	user: {
		id: 4,
		username: josan,
		rep: 51
	}
}

const initialState = {login: false, user: null};

function userSession(state = {}, action){
	return {
		login: login(state.login, action),
		user: user(state.user, action)
		}
}

function login(state = false, action){
	let obj = {
		LOGGED_IN: Object.assign({}, state, action.status)
	};

	return obj[action.type] || state
}
*/

function user(state = null, action) {
  let obj = {
    LOG_IN: Object.assign({}, state, action.user),
    LOG_OUT: {}
  };

  return obj[action.type] || state;
}

const userSession = combineReducers({
  user
});

export default userSession;
