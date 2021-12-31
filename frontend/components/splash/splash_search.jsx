import React from "react";

import SearchBar from "../search/search_bar"

export default class SplashSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="splash-search">
                <div className="splash-header">Change starts here</div>
                <SearchBar type="splash" />
            </div>
        );
    }
}