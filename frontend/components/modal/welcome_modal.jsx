import React from "react";
import FormSwitch from "../form/form_switch";

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    setFormType(type){
        this.state.type = type
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        return (
            <div className="welcome-modal">
                <div className="modal-header">
                    Welcome to Zillow
                </div>
                <div className="modal-switch">
                    <div className="sign-in-link" onClick={this.setFormType("signin")}>
                        Sign in
                    </div>
                    <div className="sign-up-link" onClick={this.setFormType("signup")}>
                        New account
                    </div>
                </div>
                <FormSwitch type={this.state.type}/>
            </div>
        )
    }
}