import React from "react";

import SearchIcon from "assets/images/search-icon.png"

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="search-container">
                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Enter an address, neighborhood, city or ZIP code"
                        name="s"
                    />
                    <button type="submit" id="search-submit"><img src={SearchIcon} /></button>
                </form>
            </div>
        );
    }
}