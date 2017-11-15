import mapDispatchToProps from "./mapDispatchToProps";
import { connect } from "react-redux";
import ChangeAvatar from "../ChangeAvatar";

const ChangeAvatarPage = connect(null, mapDispatchToProps)(ChangeAvatar);

export default ChangeAvatarPage;
