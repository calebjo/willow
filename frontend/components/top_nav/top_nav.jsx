import React from "react";
import { Link } from "react-router-dom";

import WillowLogo from "assets/images/willow-logo.png";
import WelcomeModal from "../modal/welcome_modal";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state = { show: false }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {
        const loggedIn = this.props.currentUser
        const loginButton = loggedIn ? (
            <div id="login">
                <h1>Hello, {this.props.currentUser.email}.</h1>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        ) : (
            <div id="login">
                <div className="sign-in">
                    <Link to='/login'>Sign in</Link>
                </div>
            </div>
        )

        return (
            <div className="top-nav">
                <WelcomeModal hidden={this.state.hideModal}/>
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