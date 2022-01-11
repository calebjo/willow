import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="saved-searches-content">
                <div className="willow-top-container">
                    <TopSubNav />
                </div>
                <div className="saved-searches-lower">
                    <div className="sub-nav-header">
                        Saved searches
                    </div>
                    <div className="saved-searches-list">
                        
                    </div>
                </div>
            </div>
        )
    }
}