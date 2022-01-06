import React from "react";

import TopNavContainer from "../top_nav/top_nav_container";
import Footer from "../footer/footer";
import LinkCard from "../link/link_card";
import { Dropdown } from "../top_nav/dropdown";
import SearchBar from "../search/search_bar"

export default class SplashContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="splash-content">
                <div className="top-container">
                    <Dropdown />
                    <TopNavContainer />
                    <div className="splash-search">
                        <div className="splash-header">Change starts here</div>
                        <SearchBar type="splash" />
                    </div>
                </div>
                <div className="splash-lower-tag">
                    Whether you're buying, selling or renting, we can help you move forward.
                </div>
                <div className="cards">
                    <LinkCard type="buy" />
                    <LinkCard type="sell" />
                    <LinkCard type="rent" />
                </div>
                <Footer />
            </div>
        );
    }
}