import React from "react";
import LoginFormContainer from "../form/login_form_container"
import SignupFormContainer from "../form/signup_form_container"

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
    }

    onClickForm(e){
        let signinForm = e.target.parentNode.parentNode.children[2]
        let signupForm= e.target.parentNode.parentNode.children[3]
        if (e.target.classList[0] === "sign-in-link") {
            console.log("in signinlink case")
            if (signinForm.classList.contains("hidden")) {
                signinForm.classList.remove("hidden")
                signupForm.classList.add("hidden")
            }
        } else {
            console.log("in signuplink case")
            if (signupForm.classList.contains("hidden")) {
                signinForm.classList.add("hidden")
                signupForm.classList.remove("hidden")
            }
        }
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        return (
            <div className="welcome-modal hidden">
                <div className="modal-header">
                    Welcome to Willow
                </div>
                <div className="modal-switch">
                    <div className="sign-in-link" onClick={this.onClickForm}>
                        Sign in
                    </div>
                    <div className="sign-up-link" onClick={this.onClickForm}>
                        New account
                    </div>
                </div>
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
        )
    }
}