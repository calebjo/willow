import React from "react";

import { Link } from "react-router-dom";

export default class TopSubNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="top-sub-nav">
                <div className="sub-nav-links">
                    <div className="sub-nav-link">
                        <Link to="/mywillow/favorites">Saved homes</Link>
                    </div>
                    <div className="sub-nav-link">
                        <Link to="/mywillow/savedsearches">Saved searches</Link>
                    </div>
                    <div className="sub-nav-link">
                        <Link to="/renting">Renting</Link>
                    </div>
                    <div className="sub-nav-link">
                        <Link to="/mywillow/yourhome">Your home</Link>
                    </div>
                    <div className="sub-nav-link">
                        <Link to="/mywillow/account">Account settings</Link>
                    </div>
                </div>
            </div>
        )
    }
}