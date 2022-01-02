import React from "react"

export class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false }
    }

    render() {
        return(
            <div className="top-dropdown">
                <div className="dropdown-bar"></div>
                <div className="dropdown-bar"></div>
                <div className="dropdown-bar"></div>
            </div>
        )
    }
}