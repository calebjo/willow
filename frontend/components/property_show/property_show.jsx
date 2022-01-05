import React from "react";
import PropertyDetail from "./property_detail";

export default class PropertyShow extends React.Component {
    constructor(props){
        super(props)
    }

    calcTimeOnWillow() {
        // change time on willow text based on actual time on willow
    }

    componentDidMount() {
        this.props.fetchProperties()
    }

    render() {
        const properties = this.props.properties.map((property, idx) => {
            if (property.id) {
                return (
                    <PropertyDetail property={property} key={idx} />
                )
            }
        })
        return(
            <div className="property-list-wrapper">
                <div className="property-list-container">
                    <div className="property-header">
                        {/* check if rental or for sale, render accordingly */}
                    </div>
                    <div className="property-list">
                        { properties }
                    </div>
                </div>
            </div>
        );
    }
}