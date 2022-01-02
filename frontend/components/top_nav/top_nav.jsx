import React from "react";
import { Link } from "react-router-dom";

import WillowLogo from "assets/images/willow-logo.png";
import WelcomeModal from "../modal/welcome_modal";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false }
        this.handleClick = this.handleClick.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    handleClick = () => {
        this.showModal()
    }

    showModal = () => {
        console.log("in showmodal")
        this.setState({ modal: true })
    }

    hideModal = () => {
        console.log("in hidemodal")
        this.setState({ modal: false })
        document.removeEventListener("click", this.hideModal, false)
    }

    render() {
        const loggedIn = this.props.currentUser
        const loginButton = loggedIn ? (
            <div id="login">
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        ) : (
            <div id="login">
                <div className="sign-in" onClick={this.handleClick}>
                    Sign in
                </div>
            </div>
        )
        return (
            <div className="top-nav">
                <WelcomeModal show={this.state.modal}/>
                <div className="top-left">
                    <div>Buy</div>
                    <div>Rent</div>
                    <div>Sell</div>
                </div>
                <div className="top-logo">
                    <img src={WillowLogo} />
                </div>
                <div className="top-right">
                    { loginButton }
                </div>
            </div>
        )
    }
}