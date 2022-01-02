import React from "react";

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
        this.state = { type: "signin" }
        this.form = <LoginFormContainer />
    }

    componentDidUpdate(){
        switch (this.state.type) {
            case "signin":
                this.form = <LoginFormContainer />
            case "signup":
                this.form = <SignupFormContainer />
            default:
                console.log("Something went wrong in the welcome modal.")
        }
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        return (
            <div className="welcome-modal">
                <div className="modal-header">
                    Welcome to Zillow
                </div>
                <div className="modal-switch">
                    <div className="sign-in-link" onClick={this.setState({[type]:"signin"})}>
                        Sign in
                    </div>
                    <div className="sign-up-link" onClick={this.setState({[type]:"signup"})}>
                        New account
                    </div>
                </div>
                { this.form }
            </div>
        )
    }
}