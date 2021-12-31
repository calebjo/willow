import React from "react";
import { Link } from "react-router-dom";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const loggedIn = this.props.currentUser

        if (loggedIn){
            return (
                <div id="top-nav">
                    <h1>Hello, {this.props.currentUser.email}.</h1>
                    <button onClick={this.props.logout}>Sign Out</button>
                </div>
            );
        } else {
            return (
            <div id="top-nav">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
            );
        }
    }
}