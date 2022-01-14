import React from "react";

import { Link } from "react-router-dom";

export default class TopSubNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const notSelected = "sub-nav-link"
        const selected = "sub-nav-link selected"
        return (
            <div className="top-sub-nav">
                <div className="sub-nav-links">
                    <div className={ this.props.type === "savedHomes" ? (selected) : (notSelected) }>
                        <Link to="/mywillow/favorites">Saved homes</Link>
                    </div>
                    <div className={ this.props.type === "savedSearches" ? (selected) : (notSelected) }>
                        <Link to="/mywillow/savedsearches">Saved searches</Link>
                    </div>
                    <div className={ this.props.type === "renting" ? (selected) : (notSelected) }>
                        <Link to="/renting">Renting</Link>
                    </div>
                    <div className={ this.props.type === "yourHome" ? (selected) : (notSelected) }>
                        <Link to="/mywillow/yourhome">Your home</Link>
                    </div>
                    {/* <div className={ this.props.type === "profile" ? (selected) : (notSelected) }>
                        <Link to="/mywillow/account">Account settings</Link>
                    </div> */}
                </div>
            </div>
        )
    }
}