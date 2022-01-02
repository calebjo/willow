import React from "react";

import TopNavContainer from "../top_nav/top_nav_container";
import Footer from "../footer/footer";
import SplashSearch from "./splash_search";
import LinkCard from "../link/link_card";
import { Dropdown } from "./dropdown";

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
                    <SplashSearch />
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
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
            </div>
        );
    }
}