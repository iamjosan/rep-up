import {createStore} from 'redux';
import {sessionReducer, sessionService} from 'redux-react-session';

const reducer = {session: sessionReducer};
const store = createStore(reducer);

sessionService.initSessionService(store);

console.log(sessionService);