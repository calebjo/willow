import React from "react";

// SKELETON
export default class PropertyMap extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        const map = this.refs.map;
        
        this.map = new google.maps.Map(map, mapOptions);
    }

    render() {
        return(
            <div className="property-map" ref="map">
            </div>
        );
    }
}