import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="saved-searches-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="saved-searches-lower">
                    <div className="sub-nav-header">
                        Saved searches
                    </div>
                    <div className="saved-searches-list">
                        
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}