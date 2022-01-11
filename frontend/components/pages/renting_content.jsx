import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

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
                </div>
            </div>
        )
    }
}