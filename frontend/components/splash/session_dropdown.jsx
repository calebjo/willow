import React from "react"

import { Link } from 'react-router-dom';

export class SessionDropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { show: false }

        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
    }

    showDropdown = () => {
        this.setState({ show: true })
        setTimeout(() => {
            document.addEventListener("click", this.hideDropdown)
        }, 50)
    }

    hideDropdown = (e) => {
        const dropdown = document.querySelector(".session-dropdown")
        setTimeout(() => {
            if (e.target.parentNode !== dropdown && e.target !== dropdown) {
                this.setState({ show: false })
                document.removeEventListener("click", this.hideDropdown)
            }
        }, 50)
        
    }

    render() {
        const popup = (
            <div className="dropdown-popup">
                <div className="dropdown-chip" />
                <div className="session-dropdown">
                    <div className="session-dropdown-link">Saved homes</div>
                    <div className="session-dropdown-link">Saved searches</div>
                    <div className="session-dropdown-link">Your home</div>
                    <div className="session-dropdown-link">Offers & Closing</div>
                    <div className="session-dropdown-link">Renting</div>
                    <div className="session-dropdown-link">Account settings</div>
                    <div className="session-dropdown-link">
                        <button onClick={this.props.logout}>Sign out</button>
                    </div>
                </div>
            </div>
        )
        return(
            <div className="session-dropdown-container">
                <div className="profile-icon-container" onClick={this.showDropdown}>
                    <div className="profile-icon">
                    </div>
                </div>
                {this.state.show && popup }
            </div>
        )
    }
}