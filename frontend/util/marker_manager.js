export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
        this.type = "sale"
    }

    changeColor(color) {
        Object.values(this.markers).forEach((marker) =>{
            marker.fillColor = color
        })
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

        let symbolColor
        if (this.type === "sale") {
            symbolColor = '#FC384A'
        } else if (this.type === "rent") {
            symbolColor = '985DFF'
        } else {
            symbolColor = 'FFD237'
        }

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

  