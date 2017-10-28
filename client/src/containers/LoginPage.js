import mapDispatchToProps from './mapDispatchToProps';
import {connect} from 'react-redux';
import Login from '../Login';

const LoginPage = connect(null, mapDispatchToProps)(Login);

export default LoginPage;