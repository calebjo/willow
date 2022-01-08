import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={ faBars } />
            </div>
        )
    }
}