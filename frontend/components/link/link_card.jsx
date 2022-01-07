import React from "react";
import { Link } from "react-router-dom";

export default class LinkCard extends React.Component {
    constructor(props){
        super(props)
        this.state = { type: null }
        this.linkUrl = "/";
        this.image = null;
        this.title = null;
        this.copy = null;
        this.buttonText = null;

        this.setCardContent = this.setCardContent.bind(this)
        this.setCardContent()
    }
    
    setCardContent(){
        if (this.props.type === "buy") {
            this.linkUrl = "/homes"
            this.image = window.buyHome
            this.title = "Buy a home"
            this.copy = "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            this.buttonText = "Search homes"
        } else if (this.props.type === "sell") {
            this.linkUrl = "/sell"
            this.image = window.sellHome
            this.title = "Sell a home"
            this.copy = "No matter what path you take to sell your home, we can help you navigate a successful sale."
            this.buttonText = "See your options"
        } else if (this.props.type === "rent") {
            this.linkUrl = "/homes/for_rent"
            this.image = window.rentHome
            this.title = "Rent a home"
            this.copy = "We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent."
            this.buttonText = "Find rentals"
        }
    }

    render() {
        return(
            <Link to={ this.linkUrl } >
                <div className="card-image">
                    <img src={this.image} />
                </div>
                <div className="card-title">
                    {this.title}
                </div>
                <div className="card-copy">
                    {this.copy}
                </div>
                <div className="card-button">
                    {this.buttonText}
                </div>
            </Link>
        );
    }
}