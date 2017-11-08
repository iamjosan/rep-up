import mapDispatchToProps from "./mapDispatchToProps";
import { connect } from "react-redux";
import LogOut from "./LogOut";

const LogOutLink = connect(null, mapDispatchToProps)(LogOut);

export default LogOutLink;
