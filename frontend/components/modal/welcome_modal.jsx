import React from "react";
import LoginFormContainer from "../form/login_form_container"
import SignupFormContainer from "../form/signup_form_container"

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
    }

    onClickForm(e){
        e.preventDefault();
        let signinForm = e.target.parentNode.parentNode.children[3]
        let signupForm= e.target.parentNode.parentNode.children[4]
        if (e.target.classList[0] === "sign-in-link") {
            // console.log("in signinlink case")
            if (signinForm.classList.contains("hidden")) {
                signupForm.classList.add("hidden")
                signinForm.classList.remove("hidden")
                e.target.parentNode.children[1].classList.remove("toggled")
                e.target.classList.add("toggled")
            }
        } else {
            // console.log("in signuplink case")
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
                        X
                    </div>
                    <div className="modal-header">
                        Welcome to Willow
                    </div>
                    <div className="modal-switch">
                        <div className="sign-in-link toggled" onClick={this.onClickForm}>
                            Sign in
                        </div>
                        <div className="sign-up-link" onClick={this.onClickForm}>
                            New account
                        </div>
                    </div>
                    <LoginFormContainer />
                    <SignupFormContainer />
                    <div className="modal-lower">
                    </div>
                </div>
            </div>
        )
    }
}