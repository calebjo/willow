import React from "react";

import LinkCard from "../link/link_card";
import SearchNavContainer from "../search/search_nav_container"

export default class SplashContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return(
            <div className="splash-content">
                <div className="top-container">
                    <div className="splash-search">
                        <div className="splash-header">Change starts here</div>
                        <SearchNavContainer 
                            type="splash" />
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
            </div>
        );
    }
}