import React from "react";
import PropertyDetail from "../property_detail/property_detail";

export default class PropertyShow extends React.Component {
    constructor(props){
        super(props)
        console.log("Component is constructing....")
    }

    componentDidMount(){
        this.props.fetchProperties()
        console.log("Component has mounted!")
    }

    render() {
        console.log("Component is rendering....")
        console.log(this.props)
        const properties = this.props.properties.map((property, idx) => {
            if (property.id) {
                return (
                    <PropertyDetail property={property} key={idx} />
                )
            }
        })
        return(
            <div className="properties">
                { properties }
            </div>
        );
    }
}