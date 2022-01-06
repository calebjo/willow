import React from "react"

export class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false }
    }

    handleClick(e){
        e.currentTarget.classList.toggle("dropdown-active")
    }

    render() {
        return(
            <div className="top-dropdown" onClick={this.handleClick}>
                <div className="dropdown-bar"></div>
                <div className="dropdown-bar"></div>
                <div className="dropdown-bar"></div>
            </div>
        )
    }
}