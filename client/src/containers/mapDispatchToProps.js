import { login, logout } from "../redux-actions";

const mapDispatchToProps = dispatch => {
  return {
    reduxDispatchLogin: userInfo => dispatch(login(userInfo)),
    reduxDispatchLogout: () => dispatch(logout())
  };
};

export default mapDispatchToProps;
