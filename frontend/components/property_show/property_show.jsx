import React from "react";
import PropertyDetail from "../property_detail/property_detail";

export default class PropertyShow extends React.Component {
    constructor(props){
        super(props)
        debugger
    }

    componentDidMount(){
        this.props.fetchProperties()
        debugger
    }

    render() {
        const properties = this.props.properties.map((property, idx) => {
            <PropertyDetail property={property} key={idx} />
        })
        return(
            <div className="properties">
                { properties }
            </div>
        );
    }
}