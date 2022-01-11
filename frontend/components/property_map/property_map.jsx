import React from "react";
import MarkerManager from "../../util/marker_manager"
// SKELETON
export default class PropertyMap extends React.Component {
    constructor(props){
        super(props)
        this.registerListeners = this.registerListeners.bind(this)
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
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
            <div className="property-map" ref="map">
            </div>
        );
    }
}