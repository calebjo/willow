import React from "react";
import MarkerManager from "../../util/marker_manager"
import PropertyIndexContainer from "../property_index/property_index_container";

export default class PropertyMap extends React.Component {
    constructor(props){
        super(props)
        this.registerListeners = this.registerListeners.bind(this)
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.8631657, lng: -122.2419483 },
            zoom: 12
        };
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        if (this.props.singleProperty) {
            this.props.fetchProperty(this.props.propertyId);
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.properties);
        }
    }

    componentDidUpdate() {
        if (this.props.singleProperty) {
            const targetPropertyKey = Object.keys(this.props.properties)[0];
            const targetProperty = this.props.properties[targetPropertyKey];
            this.MarkerManager.updateMarkers([targetProperty]);
        } else {
            this.MarkerManager.updateMarkers(this.props.properties); 
        }

        if (this.props.location.pathname === "/homes") {
            this.MarkerManager.type = "sale"
            this.MarkerManager.changeColor('#FC384A')
        } else if (this.props.location.pathname === "/homes/for_rent") {
            this.MarkerManager.type = "rent"
            this.MarkerManager.changeColor('#985DFF')
        } else {
            this.MarkerManager.type = "sold"
            this.MarkerManager.changeColor('#FFD237')
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west } 
            };
            
            this.props.updateFilter('bounds', bounds);
        });
    }

    render() {
        return(
            <div className="properties-container">
                <div className="property-map" ref="map">
                </div>
                <PropertyIndexContainer
                    getClickedProperty={this.props.getClickedProperty}/>
            </div>
        );
    }
}