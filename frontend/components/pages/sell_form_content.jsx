import React from "react";
import { Link } from "react-router-dom";

import PropertyFormContainer from "../form/property_form_container";
import PropertyForm from "../form/property_form";

export default class SellFormContent extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            redirect: false,
            address: null,
            lat: null, 
            lng: null
        }
        this.redirect = this.redirect.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    redirect(address, lat, lng){
        this.setState({
            redirect: true,
            address: address,
            lat: lat,
            lng: lng
        })
    }

    render(){
        const formContent = this.state.redirect ? (
            <PropertyFormContainer 
                redirect={this.redirect}
                address={this.state.address}
                lat={this.state.lat}
                lng={this.state.lng}
            />
        ) : (
            <div className="sell-form-wrapper">
                <div className="sell-form-banner">
                    <PropertyForm 
                        redirect={this.redirect}
                    />
                </div>
                <div className="sell-form-mid">
                    <div className="sell-form-header">
                        Why post on Willow?
                    </div>
                    <div className="sell-form-cards">
                        <div className="sell-form-card">
                            <img src={window.sellFormHouse} />
                            <div className="sell-form-card-copy">
                                Post a listing for free, including up to eight photos.
                            </div>
                        </div>
                        <div className="sell-form-card">
                            <img src={window.sellFormVolume} />
                            <div className="sell-form-card-copy">
                                Your home will be listed on Willow, reaching the largest audience of shoppers on the Web.
                            </div>
                        </div>
                        <div className="sell-form-card">
                            <img src={window.sellFormCheck} />
                            <div className="sell-form-card-copy">
                                Home shoppers can search for your new listing on Willow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="sell-form-content">
                { formContent }
            </div>
        )
    }
}