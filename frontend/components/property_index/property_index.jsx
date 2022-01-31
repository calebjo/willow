import React from "react";
import PropertyDetail from "./property_detail";

export default class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     properties: this.props.properties
        // }
        // debugger
    }

    componentDidMount() {
        this.props.fetchProperties(this.props.state.ui.filters).then(() => {
            // this.setState({
            //     properties: this.props.state.entities.properties
            // })
        })
        this.props.fetchSavedHomes()
    }

    render() {
        const properties = this.props.properties.map((property, idx) => {
            if (property.id) {
                return (
                    <PropertyDetail 
                        property={property}
                        getClickedProperty={this.props.getClickedProperty}
                        state={this.props.state} 
                        createSavedHome={this.props.createSavedHome}
                        deleteSavedHome={this.props.deleteSavedHome}
                        key={idx} />
                )
            }
        })
        return(
            <div className="property-list-wrapper">
                <div className="property-list-container">
                    <div className="property-header">
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