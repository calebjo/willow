import React from "react";
import LoginFormContainer from "../form/login_form_container"
import SignupFormContainer from "../form/signup_form_container"

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm(e){
        e.preventDefault();
        this.props.removeSessionErrors();

        let signinForm = e.target.parentNode.parentNode.children[3]
        let signupForm = e.target.parentNode.parentNode.children[4]
        if (e.target.classList[0] === "sign-in-link") {
            if (signinForm.classList.contains("hidden")) {
                signupForm.classList.add("hidden")
                signinForm.classList.remove("hidden")
                e.target.parentNode.children[1].classList.remove("toggled")
                e.target.classList.add("toggled")
            }
        } else {
            if (signupForm.classList.contains("hidden")) {
                signinForm.classList.add("hidden")
                signupForm.classList.remove("hidden")
                e.target.parentNode.children[0].classList.remove("toggled")
                e.target.classList.add("toggled")
            }
        }
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        return (
            <div className="modal-container">
                <div className="modal-cover"></div>
                <div className="welcome-modal">
                    <div className="modal-exit">
                        x
                    </div>
                    <div className="modal-header">
                        Welcome to Willow
                    </div>
                    <div className="modal-switch">
                        <div className="sign-in-link toggled" onClick={this.toggleForm}>
                            Sign in
                        </div>
                        <div className="sign-up-link" onClick={this.toggleForm}>
                            New account
                        </div>
                    </div>
                    <LoginFormContainer hideModal={this.props.hideModal}/>
                    <SignupFormContainer hideModal={this.props.hideModal}/>
                    <div className="modal-lower">
                        <img src={ window.welcomeModalImg } />
                    </div>
                </div>
            </div>
        )
    }
}