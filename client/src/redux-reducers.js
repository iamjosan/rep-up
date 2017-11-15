import { combineReducers } from "redux";

function user(state = null, action) {
  let obj = {
    LOG_IN: Object.assign({}, state, action.user),
    LOG_OUT: {},
    CHANGE_AVATAR: Object.assign({}, state, action.avatar),
    CHANGE_PASSWORD: Object.assign({}, state, action.password),
    CHANGE_EMAIL: Object.assign({}, state, action.email)
  };

  return obj[action.type] || state;
}

const userSession = combineReducers({
  user
});

export default userSession;
