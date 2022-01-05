import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="prop-heart">
                    </div>
                </div>
            </div>
            <div className="prop-image">
                <img src={props.property.photo_url} />
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
