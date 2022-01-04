import React from 'react';
import { Link } from 'react-router';

const PropertyDetail = (props) => {
  return (
    <div>
      <ul className="property-item">
        {/* <img className="index-image" src={property.picture_url}/> */}
        <li>${props.property.price}</li>
        <li>{props.property.bedrooms} bd</li>
        <li>{props.property.bathrooms} ba</li>
        <li>{props.property.square_feet} sqft</li>
        <li>{props.property.address}</li>
      </ul>
    </div>
  );
};

export default PropertyDetail;
