import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class YourHomeContent extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="your-home-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="your-home-lower">
                    <div className="sub-nav-header">
                        Your home
                    </div>
                    <div className="your-home-body">
                        <div className="your-home-title">
                            <div className="your-home-image" />
                            <div className="your-home-header">
                                Put your home here
                            </div>
                            <div className="your-home-copy">
                                Keep up-to-date on your home's estimated value so you can track your investment, plan your next purchase, view similar homes, and more.
                            </div>
                        </div>
                        <div className="your-home-search">
                            HOME ADDRESS BAR HERE AA 
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}