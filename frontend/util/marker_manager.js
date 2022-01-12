
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};

        this.state = {
            type: "sale"
        }
    }

    updateMarkers(properties){
        const propertiesObj = {};
        properties.forEach(property => propertiesObj[property.id] = property);
        // create a marker for each property that satisfies the filters
        properties
            .filter(property => !this.markers[property.id])
            .forEach(newProperty => this.createMarkerFromProperty(newProperty))

        // if any property no longer satisfies each filter, remove its marker
        Object.keys(this.markers)
            .filter(propertyId => !propertiesObj[propertyId])
            .forEach((propertyId) => this.removeMarker(this.markers[propertyId]))
    }

    createMarkerFromProperty(property) {
        const position = new google.maps.LatLng(property.lat, property.lng);
        const symbolColor = this.state.type === 'sale' ? (
            '#FC384A'
        ) : (
            '985DFF'
        )
        const circleSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 1,
            fillColor: symbolColor,
            strokeOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 3,
            scale: 8
        };

        const marker = new google.maps.Marker({
            icon: circleSymbol,
            position,
            map: this.map,
            propertyId: property.id
        });

        // marker.addListener('click', () => this.handleClick(property));
        this.markers[marker.propertyId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.propertyId].setMap(null);
        delete this.markers[marker.propertyId];
    }
}

  