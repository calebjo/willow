import React from 'react';
import { Link } from 'react-router-dom';

// A single listing of a property, which can be opened into a detailed modal
export default class PropertyDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false }
        this.setTimeOnWillow = this.setTimeOnWillow.bind(this)
        this.setTimeOnWillow()
    }

    setTimeOnWillow() {
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
        console.log(timeDiff)
        if (timeDiff !== 1) {
            this.timeOnWillow = `${timeDiff} ${timeType}s on Willow`
        } else {
            this.timeOnWillow = `${timeDiff} ${timeType} on Willow`
        }
        
    }

    render(){
        const property = this.props.property
        return (
            <div className="property-item" onClick={ () => this.props.getClickedProperty(property) }>
                <div className="prop-saved">
                        <img src={ window.saveIcon } />
                </div>
                <div className="prop-top">
                    <div className="prop-details">
                        <div className="prop-age">
                            { this.timeOnWillow }
                        </div>
                    </div>
                    <div className="prop-image">
                        <img src={property.photo_url} />
                    </div>
                </div>
                <div className="prop-bottom">
                    <div className="prop-price">${property.price.toLocaleString()}</div>
                    <div className="prop-mid-info">
                        <div className="prop-bd">{property.bedrooms} bd</div>
                        <div className="prop-ba">{property.bathrooms} ba</div>
                        <div className="prop-sqft">{property.square_feet.toLocaleString()} sqft</div>
                    </div>
                    <div className="prop-address">{property.address}</div>
                </div>
            </div>
        );
    }
}
