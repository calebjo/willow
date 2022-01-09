import React from "react";
import { Link } from "react-router-dom";

import TopNavContainer from "../top_nav/top_nav_container"
import Footer from "../footer/footer"
import PropertyFormContainer from "../form/property_form_container";

export default class SellFormContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="sell-form-content">
                <TopNavContainer />
                <div className="sell-form-banner">
                    <PropertyFormContainer />
                </div>
                <div className="sell-form-mid">
                    <div className="sell-form-header">
                        Why post on Willow?
                    </div>
                    <div className="sell-form-cards">
                        <div className="sell-form-card">
                            <img src={window.sellFormHouse} />
                            <div className="sell-form-card-copy">
                                Post a listing for free, including up to eight photos.
                            </div>
                        </div>
                        <div className="sell-form-card">
                            <img src={window.sellFormVolume} />
                            <div className="sell-form-card-copy">
                                Your home will be listed on Willow, reaching the largest audience of shoppers on the Web.
                            </div>
                        </div>
                        <div className="sell-form-card">
                            <img src={window.sellFormCheck} />
                            <div className="sell-form-card-copy">
                                Home shoppers can search for your new listing on Willow.
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}