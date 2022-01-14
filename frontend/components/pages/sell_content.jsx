import React from "react";
import { Link } from "react-router-dom";

export default class SellContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="sell-content">
                <div className="sell-banner">
                    <div className="sell-banner-header">
                        Sell your home with confidence
                    </div>
                    <div className="sell-banner-sub-header">
                        Willow is making it simpler to sell your home and move forward.
                    </div>
                </div>
                <div className="sell-cta">
                    <div className="sell-cta-img">
                        <img src ={ window.sellCTA } />
                    </div>
                    <div className="sell-cta-lower">
                        <div className="sell-cta-header">
                            Sell your home yourself
                        </div>
                        <div className="sell-cta-copy">
                            Deciding to sell your home yourself is referred to as for-sale-by-owner (FSBO). The FSBO process is similar to traditional selling, but without the help of a real estate agent. In this case, you're responsible for the home prep, marketing, showings, and negotiations.
                        </div>
                        <Link to="/for-sale-by-owner" className="sell-cta-button">
                            Post your home for sale
                        </Link>
                    </div>
                </div>
                <div className="sell-lower-line"></div>
                {/* <div className="sell-value-check">
                    <div className="sell-value-check-header">
                        Explore your home's value
                    </div>
                    <div className="sell-value-check-sub-header">
                        Enter your address to get your free Westimate.
                    </div>
                    <div className="sell-value-check-form">
                        Enter your address
                    </div>
                </div> */}
            </div>
        )
    }
}