import { connect } from "react-redux";
import TopNav from "./top_nav";
import { logout } from "../../actions/session_actions.js";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);