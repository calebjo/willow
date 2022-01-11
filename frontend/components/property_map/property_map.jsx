import React from "react";
import MarkerManager from "../../util/marker_manager"
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
        this.MarkerManager = new MarkerManager(this.map);
    }

    componentDidUpdate() {
        if (this.props.singleBench) {
            const targetBenchKey = Object.keys(this.props.benches)[0];
            const targetBench = this.props.benches[targetBenchKey];
            this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
        } else {
            this.MarkerManager.updateMarkers(this.props.benches); 
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
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    render() {
        return(
            <div className="property-map" ref="map">
            </div>
        );
    }
}