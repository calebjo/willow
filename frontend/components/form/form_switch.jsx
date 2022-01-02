import React from "react";

import LoginFormContainer from "../form/login_form_container"
import SignupFormContainer from "../form/signup_form_container"

export default class FormSwitch extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.type === "signin"){
            return(
                <LoginFormContainer />
            )
        } else {
            return(
                <SignupFormContainer />
            )
        }
    }
}