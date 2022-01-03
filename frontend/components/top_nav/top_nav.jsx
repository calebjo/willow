import React from "react";
import { Link } from "react-router-dom";

import WillowLogo from "assets/images/willow-logo.png";
import WelcomeModal from "../modal/welcome_modal";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false}
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({ modal: true })
        document.body.classList.add("modal-open")
        setTimeout(() => {
            document.addEventListener("click", this.hideModal)
        }, 100)
    }

    hideModal = (e) => {
        const modalCover = document.querySelector(".modal-cover")
        const modalClose = document.querySelector(".modal-exit")
        if (e.target === modalCover || e.target === modalClose) {
            this.setState({ modal: false })
            document.body.classList.remove("modal-open")
            document.removeEventListener("click", this.hideModal)
        }
    }

    render() {
        const loggedIn = this.props.currentUser
        const loginButton = loggedIn ? (
            <div id="login">
                <h3>Hello, {this.props.currentUser.email}.</h3>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        ) : (
            <div id="login">
                <div className="sign-in" onClick={this.showModal}>
                    Sign in
                </div>
            </div>
        )
        return (
            <div className="top-nav">
                {this.state.modal && 
                    <WelcomeModal />
                }
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