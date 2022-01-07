import React from "react";
import { Link } from "react-router-dom";

import TopNavContainer from "../top_nav/top_nav_container"
import Footer from "../footer/footer"

export default class SellFormContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="sell-form-content">
                <TopNavContainer />
                <Footer />
            </div>
        )
    }
}