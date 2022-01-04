import React from 'react';
import { Link } from 'react-router';

const PropertyDetail = (props) => {
  return (
    <div className="property-item">
        {/* <img className="index-image" src={property.picture_url}/> */}
        <div className="prop-price">${props.property.price}</div>
        <div className="prop-bd">{props.property.bedrooms} bd</div>
        <div className="prop-ba">{props.property.bathrooms} ba</div>
        <div className="prop-sqft">{props.property.square_feet} sqft</div>
        <div className="prop-address">{props.property.address}</div>
    </div>
  );
};

export default PropertyDetail;
