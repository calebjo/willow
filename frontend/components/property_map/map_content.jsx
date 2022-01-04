import React from "react";

import SearchNav from "../search/search_nav";
import TopNavContainer from "../top_nav/top_nav_container";
import { Dropdown } from "./dropdown";

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
            </div>
        );
    }
}