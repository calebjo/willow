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
        const profileImg = this.props.currentUser.photo_url
        const popup = (
            <div className="dropdown-popup">
                <div className="dropdown-chip" />
                <div className="session-dropdown">
                    <div className="session-dropdown-link">
                        <Link to="/mywillow/favorites">Saved homes</Link>
                    </div>
                    <div className="session-dropdown-link">
                        <Link to="/mywillow/savedsearches">Saved searches</Link>
                    </div>
                    <div className="session-dropdown-link">
                        <Link to="/mywillow/yourhome">Your home</Link>
                    </div>
                    <div className="session-dropdown-link">
                        <Link to="/mywillow/OffersAndClosings">Offers & Closings</Link>
                    </div>
                    <div className="session-dropdown-link">
                        <Link to="/renting">Renting</Link>
                    </div>
                    <div className="session-dropdown-link">
                        <Link to="/mywillow/account">Account settings</Link>
                    </div>
                    <div className="sign-out-section">
                        <div className="session-dropdown-link">
                            <button onClick={this.props.logout}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        return(
            <div className="session-dropdown-container">
                <div className="profile-icon-container" onClick={this.showDropdown}>
                    <div className="profile-icon">
                        { profileImg && 
                        <img src={ profileImg } />}
                    </div>
                </div>
                {this.state.show && popup }
            </div>
        )
    }
}