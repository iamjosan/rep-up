import mapDispatchToProps from "./mapDispatchToProps";
import { connect } from "react-redux";
import ChangeProfileInfo from "../ChangeProfileInfo";

const UpdateProfile = connect(null, mapDispatchToProps)(ChangeProfileInfo);

export default UpdateProfile;
