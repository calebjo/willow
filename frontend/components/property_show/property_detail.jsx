import React from 'react';
import { Link } from 'react-router';

const PropertyDetail = ({ property }) => {
    return (
        <div>
            <ul className="property-list"> 
                {/* <img className="index-image" src={property.picture_url}/> */} 
                {/* DEBUG */}
                {/* <li>Description: {property.description}</li>
                <li>Seats: {property.seating}</li> */}
                <div>Property Info Here</div>
            </ul>
        </div>
    );
};

export default PropertyDetail;
