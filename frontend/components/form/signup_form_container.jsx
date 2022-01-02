import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    errors: Object.values(state.errors.session),
    formType: 'Submit',
    className: 'signup-form hidden'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);