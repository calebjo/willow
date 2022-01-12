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
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav />
                </div>
                <div className="renting-content account-page">
                    <div className="renting-lower">
                        <div className="sub-nav-header">
                            Renting
                        </div>
                        <div className="renting-filters">

                        </div>
                        <div className="renting-body">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}