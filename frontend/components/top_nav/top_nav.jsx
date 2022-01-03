import React from "react";
import { Link } from "react-router-dom";

import WelcomeModal from "../modal/welcome_modal";
import { SessionDropdown } from "../splash/session_dropdown";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false, dropdown: false }
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = (e) => {
        console.log("in showModal")

        this.setState({ modal: true })

        const modal = document.querySelector(".modal-container")
        if (modal && modal.classList.contains("hidden")) { 
            modal.classList.remove("hidden")
        }

        // const modal = document.querySelector(".modal-container")
        
        document.body.classList.add("modal-open")
        // modal.classList.add("hidden")
        setTimeout(() => {
            const modalCover = document.querySelector(".modal-cover")
            const modalClose = document.querySelector(".modal-exit")
            modalCover.addEventListener("click", this.hideModal)
            modalClose.addEventListener("click", this.hideModal)
        }, 25)
    }

    hideModal = (e) => {
        console.log("in hideModal")

        // const modal = document.querySelector(".modal-container")
        const modalCover = document.querySelector(".modal-cover")
        const modalClose = document.querySelector(".modal-exit")
        modalCover.removeEventListener("click", this.hideModal)
        modalClose.removeEventListener("click", this.hideModal)
        document.body.classList.remove("modal-open")
        this.setState({ modal: false })
    }

    showDropdown = () => {
        this.setState({ dropdown: true })
        setTimeout(() => {
            document.addEventListener("click", this.hideDropdown)
        }, 100)
    }

    hideDropdown = () => {
        const dropdown = document.querySelector(".session-dropdown")
        if (e.target !== dropdown) {
            this.setState({ dropdown: false })
            document.removeEventListener("click", this.hideDropdown)
        }
    }

    render() {
        const loggedIn = this.props.currentUser
        const loginButton = loggedIn ? (
            <SessionDropdown 
                currentUser={this.props.currentUser} 
                logout={this.props.logout}
                onClick={this.showDropdown}
            />
        ) : (
            <div className="sign-in" onClick={this.showModal}>
                Sign in
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
                    <img src={window.willowLogo} />
                </div>
                <div className="top-right">
                    { loginButton }
                </div>
            </div>
        )
    }
}