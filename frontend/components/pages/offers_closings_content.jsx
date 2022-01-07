import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class OffersClosingsContet extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="offers-closings-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="offers-closings-lower">
                    <div className="sub-nav-header">
                        Offers & Closings
                    </div>
                    <div className="offers-closings-body">
                        <div className="offers-closings-title">
                            <div className="offers-closings-image" />
                            <div className="offers-closings-header">
                                Sell to Willow. We'll handle the rest.
                            </div>
                            <div className="offers-closings-copy">
                                Looking to sell? Upload a few images of your property and set a price. No showings, no staging, no actual sale at all!
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}