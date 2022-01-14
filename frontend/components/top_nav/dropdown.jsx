import React from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log("in handleClick")
        if (this.state.open) {
            this.setState({
                open: false
            })
        } else {
            this.setState({
                open: true
            })
        }
    }

    render() {
        const dropdownContent = this.state.open ? (
            <div className="top-dropdown-wrapper">
                <div className="top-dropdown-top">
                    <div className="top-dropdown-icon-set" onClick={ this.handleClick }>
                        <FontAwesomeIcon icon= { faTimes } size="lg"/>
                    </div>
                    <img src={ window.willowLogo } className="filtered-blue" />
                </div>
                <div className="top-dropdown-items">
                    <div className="top-dropdown-item">
                        <Link to="/homes">Buy</Link>
                    </div>
                    <div className="top-dropdown-item">
                        <Link to="/homes/for_rent">Rent</Link>
                    </div>
                    <div className="top-dropdown-item">
                        <Link to="/sell">Sell</Link>
                    </div>
                    <div className="top-dropdown-item">
                        <a href="https://www.linkedin.com/in/caleb-jones-928521126/">Connect</a>
                    </div>
                </div>
            </div>
        ) : (
            <div className="top-dropdown-icon" onClick={ this.handleClick }>
                <FontAwesomeIcon icon={ faBars } size="lg"/>
            </div>
        )
        return(
            dropdownContent
        )
    }
}