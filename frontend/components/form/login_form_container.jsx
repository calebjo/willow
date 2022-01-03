import { connect } from "react-redux";
import { login, removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'Sign in',
    className: 'signin-form',
    hideModal: ownProps.hideModal
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);