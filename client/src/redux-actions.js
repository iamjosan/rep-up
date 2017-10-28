/*
export function login(status){
	return {type: 'LOGGED_IN', status}
}
*/
export function login(user){
	return {type: 'LOG_IN', user}
}

export function logout(){
	return {type: 'LOG_OUT'}
}