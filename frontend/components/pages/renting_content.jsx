import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import SearchNavContainer from "../search/search_nav_container"

export default class RentingContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav 
                        type="renting"/>
                </div>
                <div className="renting-content account-page">
                    <div className="renting-lower">
                        <div className="sub-nav-header">
                            Renting
                        </div>
                        <div className="user-no-content">
                            <img src={ window.sellHome } />
                            <div className="user-no-content-title">
                                <div className="no-content-header">
                                    Renting made easy
                                </div> 
                                <div className="no-content-sub-header">
                                    Search through our extensive listings to find the right rental for you.
                                </div>
                            </div>
                            <SearchNavContainer 
                                type="splash"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}