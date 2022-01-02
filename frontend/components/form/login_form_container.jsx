import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    errors: Object.values(state.errors.session),
    formType: 'Sign in',
    className: 'signin-form'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);