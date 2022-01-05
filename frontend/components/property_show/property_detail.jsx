import React from 'react';
import { Link } from 'react-router';

const PropertyDetail = (props) => {
  return (
    <div className="property-item">
        <div className="prop-top">
            <div className="prop-details">
                <div className="prop-age">
                    {/* { props.timeOnWillow } */}
                    2 days on Willow
                </div>
                <div className="prop-saved">
                </div>
            </div>
            <div className="prop-image">
                {/* <img className="index-image" src={property.picture_url}/> */}
            </div>
        </div>
        <div className="prop-bottom">
            <div className="prop-price">${props.property.price}</div>
            <div className="prop-mid-info">
                <div className="prop-bd">{props.property.bedrooms} bd</div>
                <div className="prop-ba">{props.property.bathrooms} ba</div>
                <div className="prop-sqft">{props.property.square_feet} sqft</div>
            </div>
            <div className="prop-address">{props.property.address}</div>
        </div>
    </div>
  );
};

export default PropertyDetail;
