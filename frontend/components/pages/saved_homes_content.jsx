import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class SavedHomesContent extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="saved-homes-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="saved-homes-lower">
                    <div className="sub-nav-header">
                        Saved homes
                    </div>
                    <div className="saved-homes-filters">

                    </div>
                    <div className="saved-homes-body">

                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}