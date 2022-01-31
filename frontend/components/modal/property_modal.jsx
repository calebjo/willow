import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faTh } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faParking } from '@fortawesome/free-solid-svg-icons'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

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
        // DEBUG -- REPLACE WITH ACTUAL CALCULATION IF YOU WANT LMAO
        const multiplier = (Math.random() * (1.2 - 0.8) + 0.8)
        const westimate = Math.round((this.props.property.price) * multiplier)
        const rentWestimate = Math.round((this.props.property.price) * multiplier)

      
        const createdDate = new Date(this.props.property.created_at)
        const currentDate = new Date()

        let timeDiff = currentDate.getTime() - createdDate.getTime()
        let timeType;
        if (timeDiff > 86400000) { // 1 day
            timeType = "day"
            timeDiff /= 86400000
        } else if (timeDiff > 3600000) { // 1 hour
            timeType = "hour"
            timeDiff /= 3600000
        } else if (timeDiff > 60000) { // 1 minute
            timeType = "minute"
            timeDiff /= 60000
        } else { // seconds
            timeType = "second"
            timeDiff /= 1000
        }
        timeDiff = Math.floor(timeDiff)
        if (timeDiff !== 1) {
            this.timeOnWillow = `${timeDiff} ${timeType}s`
        } else {
            this.timeOnWillow = `${timeDiff} ${timeType}`
        }

        const original = this.props.property.property_type.toLowerCase()
        const propertyType = original.charAt(0).toUpperCase() + original.slice(1);
        
        return (
            <div className="property-modal-container">
                <div className="modal-cover"></div>
                <div className="property-modal">
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
                                {/* DEBUG -- ADD WESTIMATE LATER */}
                                { this.props.property.for_sale && 
                                <div className="property-lower-westimate">
                                    Westimate: <span>${westimate.toLocaleString()}</span>
                                </div>
                                }
                                { this.props.property.for_rent && 
                                <div className="property-lower-westimate">
                                    Rent Westimate: <span>${rentWestimate.toLocaleString()}</span>
                                </div>
                                }
                            </div>
                            { this.props.property.for_sale && 
                            <div className="property-details-footer">
                                <div className="footer-payment-estimate">
                                    <span>Est. payment: </span>${ Math.floor(this.props.property.price / 251) }/month
                                </div>
                            </div>
                            }
                        </div>
                        <div className="property-small-map">
                        </div>
                        <div className="property-overview">
                            <div className="property-sub-header">
                                Overview
                            </div>
                            <div className="overview-details">
                                <div className="overview-detail">
                                    Time on Willow <span>{this.timeOnWillow}</span>
                                </div>
                                <div className="overview-detail">
                                    Saves <span>{this.props.property.saved_homes.length}</span>
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
                            <div className="property-facts-features">
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faBuilding } />
                                    <div className="facts-text">
                                        { propertyType }
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faBed } />
                                    <div className="facts-text">
                                        {this.props.property.bedrooms } bedrooms
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faBath } />
                                    <div className="facts-text">
                                        { this.props.property.bathrooms } bathrooms
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faCalendarAlt } />
                                    <div className="facts-text">
                                        Built in { this.props.property.year_built }
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faThermometerThreeQuarters } />
                                    <div className="facts-text">
                                        { this.props.property.heating }
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faSnowflake } />
                                    <div className="facts-text">
                                        { this.props.property.cooling }
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faParking } />
                                    <div className="facts-text">
                                        { this.props.property.parking_spots } parking spots
                                    </div>
                                </div>
                                <div className="property-facts-item">
                                    <FontAwesomeIcon icon={ faStreetView } />
                                    <div className="facts-text">
                                        { this.props.property.square_feet.toLocaleString() } sqft
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}