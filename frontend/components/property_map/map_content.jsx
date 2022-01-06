import React from "react";

import SearchNav from "../search/search_nav";
import TopNavContainer from "../top_nav/top_nav_container";
import { Dropdown } from "../top_nav/dropdown";
import PropertyMap from "./property_map";
import PropertyShowContainer from "../property_show/property_show_container";

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
                <div className="properties-container">
                    <PropertyMap />
                    <PropertyShowContainer />
                </div>
            </div>
        );
    }
}