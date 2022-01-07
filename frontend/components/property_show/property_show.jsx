import React from "react";
import PropertyDetail from "./property_detail";

export default class PropertyShow extends React.Component {
    constructor(props){
        super(props)
        // debugger
    }

    calcTimeOnWillow() {
        // change time on willow text based on actual time on willow
    }

    componentDidMount() {
        this.props.fetchProperties()
    }

    render() {
        // debugger
        const properties = this.props.properties.map((property, idx) => {
            if (property.id) {
                return (
                    <PropertyDetail 
                        property={property}
                        getClickedProperty={this.props.getClickedProperty} 
                        key={idx} />
                )
            }
        })
        return(
            <div className="property-list-wrapper">
                <div className="property-list-container">
                    <div className="property-header">
                        {/* check if rental or for sale, render accordingly */}
                        <div className="property-header-top">
                            Real Estate & Homes For Sale
                        </div>
                        <div className="property-header-bottom">
                            { this.props.properties.length } results
                        </div>
                    </div>
                    <div className="property-list">
                        { properties }
                    </div>
                </div>
            </div>
        );
    }
}