import React from "react";

import SearchNav from "../search/search_nav";
import TopNavContainer from "../top_nav/top_nav_container";
import { Dropdown } from "../splash/dropdown";
import PropertyMap from "./property_map";
import PropertyShow from "../property_show/property_show";

export default class MapContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="map-content">
                <Dropdown />
                <TopNavContainer />
                <SearchNav />
                <PropertyMap />
                <PropertyShow />
                {/* DEBUG -- REPLACE WITH PROPERTY SHOW CONTAINER WHEN READY */}
            </div>
        );
    }
}