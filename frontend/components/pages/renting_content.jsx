import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class RentingContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="renting-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="renting-lower">
                    <div className="sub-nav-header">
                        Renting
                    </div>
                    <div className="favorite-rentals">

                    </div>
                    <div className="browse-rentals">
                        <div className="browse-rentals-header">
                            Browse rentals
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}