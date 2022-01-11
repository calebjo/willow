import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./search_bar";

export default class SearchNav extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (filter, updateFilter) => e => (
        updateFilter(filter, parseInt(e.currentTarget.value))
    )

    // <div>
    //     <input
    //         type="number"
    //         value={props.filters.minPrice}
    //         onChange={handleChange('minSeating', props.updateFilter)}
    //     />
    //     <input
    //         type="number"
    //         value={props.filters.maxPrice}
    //         onChange={handleChange('maxSeating', props.updateFilter)}
    //     />
    // </div>

    render() {
        const search = this.props.type === "splash" ? (
            <SearchBar 
                type="splash"/>
        ) : (
            <div className="search-nav">
                <div className="search-nav-left">
                    <SearchBar 
                        type="nav"/>
                </div>
                <div className="search-nav-center">
                    <div className="search-tab">
                        <div className="sale-type-ball" />
                        For Sale
                    </div>
                    <div className="search-tab">
                        Price
                    </div>
                    <div className="search-tab">
                        Beds & Baths
                    </div>
                    <div className="search-tab">
                        Home type
                    </div>
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
        )
        return(
            search
        );
    }
}