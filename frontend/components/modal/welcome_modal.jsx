import React from "react";

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props)
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        const modalType = this.props.modalType

        if (modalType === 'signin') {
            return(
                <div>
                    Sign in modal
                </div>
            )
        } else { // new account sign up
            return(
                <div>
                    Sign up modal
                </div>
            )
        }
    }
}