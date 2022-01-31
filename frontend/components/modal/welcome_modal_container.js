import { connect } from "react-redux";
import { removeSessionErrors } from "../../actions/session_actions";
import WelcomeModal from "./welcome_modal";

const mapStateToProps = (state, ownProps) => ({
    hideModal: ownProps.hideModal,
    state
});

const mapDispatchToProps = dispatch => ({
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeModal);