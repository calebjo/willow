import React from 'react';
import { Link } from 'react-router-dom';

// A single listing of a property, which can be opened into a detailed modal
export default class PropertyDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false }
    }

    render(){
        const property = this.props.property
        return (
            <div className="property-item" onClick={ () => this.props.getClickedProperty(property) }>
                <div className="prop-top">
                    <div className="prop-details">
                        <div className="prop-age">
                            {/* DEBUG */}
                            {/* { this.props.timeOnWillow } */}
                            2 days on Willow
                        </div>
                        <div className="prop-saved">
                            <img src={ window.saveIcon } />
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
