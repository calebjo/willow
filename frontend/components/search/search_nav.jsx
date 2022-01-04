import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./search_bar";
import SearchTab from "./search_tab";

export default class SearchNav extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="search-nav">
                <div className="search-nav-left">
                    <SearchBar />
                </div>
                <div className="search-nav-center">
                    <SearchTab type="forSale"/>
                    <SearchTab type="price"/>
                    <SearchTab type="bedBaths"/>
                    <SearchTab type="homeType"/>
                    <div className="search-expand">
                        More
                    </div>
                    <div className="save-search">
                        Save search
                    </div>
                </div>
                <div className="search-nav-right">
                    <div className="saved-homes">
                        {/* <Link to="/mywillow/savedhomes">Saved homes</Link> */}
                        Saved homes
                    </div>
                </div>
            </div>
        );
    }
}