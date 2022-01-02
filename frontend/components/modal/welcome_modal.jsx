import React from "react";
import LoginFormContainer from "../form/login_form_container"
import SignupFormContainer from "../form/signup_form_container"

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick(e){
        let targetForm;
        switch (e.target.classList[0]) {
            case "sign-in-link":
                targetForm = e.target.parentNode.parentNode.children[2]
                targetForm.classList.toggle("hidden")
            case "sign-up-link":
                targetForm = e.target.parentNode.parentNode.children[3]
                targetForm.classList.toggle("hidden")
                targetForm = e.target.parentNode.parentNode.children[2]
                targetForm.classList.toggle("hidden")
            default:
        }
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        return (
            <div className="welcome-modal">
                <div className="modal-header">
                    Welcome to Willow
                </div>
                <div className="modal-switch">
                    <div className="sign-in-link" onClick={this.handleClick}>
                        Sign in
                    </div>
                    <div className="sign-up-link" onClick={this.handleClick}>
                        New account
                    </div>
                </div>
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
        )
    }
}