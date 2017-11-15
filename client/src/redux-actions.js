/*
export function login(status){
	return {type: 'LOGGED_IN', status}
}
*/
export function login(user) {
  return { type: "LOG_IN", user };
}

export function logout() {
  return { type: "LOG_OUT" };
}

export function changeAvatar(newAvatar) {
  return { type: "CHANGE_AVATAR", avatar: { avatar: newAvatar } };
}

export function changePassword(newPassword) {
  return { type: "CHANGE_PASSWORD", password: { password: newPassword } };
}

export function changeEmail(newEmail) {
  return { type: "CHANGE_EMAIL", email: { email: newEmail } };
}
