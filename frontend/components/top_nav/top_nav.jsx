import React from "react";
import { Link } from "react-router-dom";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
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
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
        )

        return (
            <div className="top-nav">
                <div className="top-left">
                    <div>Buy</div>
                    <div>Rent</div>
                    <div>Sell</div>
                </div>
                <div className="top-logo">
                </div>
                <div className="top-right">
                    { loginButton }
                </div>
            </div>
        )
    }
}