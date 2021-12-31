import React from "react";

import SplashSearch from "./splash_search";
import LinkCard from "../link/link_card";
import Footer from "../footer/footer";

export default class SplashContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="splash-content">
                <SplashSearch />
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