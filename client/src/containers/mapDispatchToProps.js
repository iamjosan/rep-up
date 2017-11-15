import {
  login,
  logout,
  changeAvatar,
  changePassword,
  changeEmail
} from "../redux-actions";

const mapDispatchToProps = dispatch => {
  return {
    reduxDispatchLogin: userInfo => dispatch(login(userInfo)),
    reduxDispatchLogout: () => dispatch(logout()),
    reduxDispatchChangeAvatar: avatar => dispatch(changeAvatar(avatar)),
    reduxDispatchChangePassword: password => dispatch(changePassword(password)),
    reduxDispatchChangeEmail: email => dispatch(changeEmail(email))
  };
};

export default mapDispatchToProps;
