import React from "react";
import { Link } from "react-router-dom";

import { SessionDropdown } from "./session_dropdown";
import { Dropdown } from "../top_nav/dropdown";
import WelcomeModalContainer from "../modal/welcome_modal_container";

// Renders the top left links, logo, top right links, user info (or sign in)
export default class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false }
    
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = (e) => {
        this.setState({ modal: true })

        const modal = document.querySelector(".modal-container")
        if (modal && modal.classList.contains("hidden")) { 
            modal.classList.remove("hidden")
        }

        document.body.classList.add("modal-open")
        setTimeout(() => {
            const modalCover = document.querySelector(".modal-cover")
            const modalClose = document.querySelector(".modal-exit")
            modalCover.addEventListener("click", this.hideModal)
            modalClose.addEventListener("click", this.hideModal)
        }, 25)
    }

    hideModal = (e) => {
        const modalCover = document.querySelector(".modal-cover")
        const modalClose = document.querySelector(".modal-exit")
        modalCover.removeEventListener("click", this.hideModal)
        modalClose.removeEventListener("click", this.hideModal)
        document.body.classList.remove("modal-open")
        this.setState({ modal: false })
    }

    render() {
        const loggedIn = this.props.currentUser
        const userButton = loggedIn ? (
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
                { this.state.modal && 
                    <WelcomeModalContainer 
                        hideModal={this.hideModal}/>
                }
                <Dropdown />
                <div className="top-left">
                    <div>
                        <Link to="/homes">
                            Buy
                        </Link>
                    </div>
                    <div>
                        <Link to="/homes/for_rent">
                            Rent
                        </Link>
                    </div>
                    <div>
                        <Link to="/sell">
                            Sell
                        </Link>
                    </div>
                </div>
                <div className="top-logo">
                    <Link to="/">
                        <img src={window.willowLogo} />
                    </Link>
                </div>
                <div className="top-right">
                    { userButton }
                </div>
            </div>
        )
    }
}