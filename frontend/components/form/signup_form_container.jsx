import { connect } from "react-redux";
import { signup, removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'Submit',
    className: 'signup-form hidden',
    hideModal: ownProps.hideModal
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);