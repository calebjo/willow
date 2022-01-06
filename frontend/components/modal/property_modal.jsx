import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

import TopNavContainer from "../top_nav/top_nav_container"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default class PropertyModal extends React.Component {
    constructor(props){
        super(props)
    }

    // renders the appropriate form within the modal (sign in or sign up)
    render(){
        let saleType, ballStyle
        if (this.props.property.for_sale) { 
            saleType = "For sale"
            ballStyle = { background: "rgb(255,90,80)" }
        } else if (this.props.property.for_rent) { 
            saleType = "For rent"
            ballStyle = { background: "rgb(152,93,255)" }
        } else {
            saleType = "Sold"
            ballStyle = { background: "rgb(255,210,55)" }
        }
        // DEBUG -- REPLACE WITH ACTUAL CALCULATION
        const westimate = (this.props.property.price) * .95
        return (
            <div className="property-modal-container">
                <div className="modal-cover"></div>
                <div className="property-modal">
                    <TopNavContainer />
                    <div className="property-item">
                        <div className="property-modal-top">
                            <div className="modal-exit" onClick={this.props.hidePropModal}>
                                <FontAwesomeIcon icon={ faChevronLeft } />
                            </div>
                            <div className="property-modal-like"></div>
                            <div className="property-modal-share"></div>
                            <div className="property-modal-like"></div>
                        </div>
                        <div className="property-carousel">
                            <div className="property-image">
                                <img src={this.props.property.photo_url} />
                            </div>
                        </div>
                        <div className="property-details">
                            <div className="property-main-details">
                                <div className="property-details-price">
                                    ${this.props.property.price.toLocaleString()}
                                </div>
                                <div className="property-details-smaller">
                                    <div className="property-smaller-bedrooms">
                                        <span>{this.props.property.bedrooms}</span> bd
                                    </div>
                                    <div className="property-smaller-bathrooms">
                                        <span>{this.props.property.bathrooms}</span> ba
                                    </div>
                                    <div className="property-smaller-footage">
                                        <span>{this.props.property.square_feet.toLocaleString()}</span> sqft
                                    </div>
                                </div>
                            </div>
                            <div className="property-address">
                                {this.props.property.address}
                            </div>
                            <div className="property-lower-details">
                                <div className="property-lower-sale">
                                    <div className="property-sale-ball" style={ ballStyle }></div>
                                    <div className="property-sale-type">{ saleType }</div>
                                </div>
                                <div className="property-lower-westimate">
                                    {/* DEBUG -- ADD WESTIMATE LATER */}
                                    Westimate: <span>${westimate.toLocaleString()}</span>
                                </div>
                            </div>
                            <div className="property-details-footer">
                                <div className="footer-payment-estimate">
                                    {/* DEBUG -- ADD PROPER PAYMENT ESTIMATE LATER */}
                                    <span>Est. payment: </span>$WHOLEWALLET
                                </div>
                            </div>
                        </div>
                        {/*  DEBUG -- DONT USE HASH LINKS */}
                        <div className="property-nav-bar">
                            <div className="property-nav-link">
                                <HashLink to="home-page#property-small-map">Overview</HashLink>
                            </div>
                            <div className="property-nav-link">
                                <HashLink to="home-page#property-facts-features">Facts and features</HashLink>
                            </div>HashLink
                            <div className="property-nav-link">
                                <HashLink to="home-page#property-cost-calculator">Monthly cost</HashLink>
                            </div>
                            <div className="property-nav-link">
                                <HashLink to="home-page#property-rent-westimate">Rent Westimate</HashLink>
                            </div>
                            <div className="property-nav-link">
                                <HashLink to="home-page#property-homes-for-you">Homes for you</HashLink>
                            </div>
                        </div>
                        <div className="property-small-map">
                        </div>
                        <div className="property-overview">
                            <div className="property-sub-header">
                            </div>
                            <div className="overview-details">
                                <div className="overview-detail">
                                    Time on Willow <span>2 days</span>
                                </div>
                                <div className="overview-detail">
                                    Saves <span>31</span>
                                </div>
                            </div>
                            <div className="overview-description">
                                { this.props.property.description }
                            </div>
                        </div>
                        <div className="property-facts-features">
                            <div className="property-sub-header">
                                Facts and features
                            </div>
                            <div className="property-dropdowns">
                            </div>
                        </div>
                        <div className="property-cost-calculator">
                            <div className="property-sub-header">
                                Monthly cost
                            </div>
                        </div>
                        <div className="property-rent-westimate">
                            <div className="property-sub-header">
                                Rent Westimate
                            </div>
                        </div>
                        <div className="property-homes-for-you">
                            <div className="property-sub-header">
                                Homes for you
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}