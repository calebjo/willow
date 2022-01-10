import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"
import PropertyDetailContainer from "../property_show/property_detail_container";

export default class YourHomeContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
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
                        <div className="your-home-data">
                            <PropertyDetailContainer />
                        </div>
                        <div className="your-home-lower">
                            <div className="your-home-setting">
                                Edit home
                            </div>
                            <div className="your-home-setting">
                                Delete your listing
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}