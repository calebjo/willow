import React from "react"

export class SessionDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick(e){
        e.currentTarget.classList.toggle("hidden")
    }

    render() {
        return(
            <div className="session-dropdown-container">
                <div className="profile-icon" onClick={this.handleClick}>
                </div>
                <div className="session-dropdown">
                    <div className="user-saved-homes">Saved homes</div>
                    <div className="user-saved-searches">Saved searches</div>
                    <div className="user-settings">Account settings</div>
                    <button onClick={this.props.logout}>Sign out</button>
                </div>
            </div>
        )
    }
}