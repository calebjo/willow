import React from 'react';
import { Link } from 'react-router-dom';

import PropertyModal from "../modal/property_modal"

// A single listing of a property, which can be opened into a detailed modal
export default class PropertyDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = { modal: false }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = (e) => {
        this.setState({ modal: true })

        const modal = document.querySelector(".modal-container")
        if (modal && modal.classList.contains("hidden")) { 
            modal.classList.remove("hidden")
        }

        document.body.classList.add("modal-open")
        setTimeout(() => {
            const modalCover = document.querySelector(".modal-cover")
            const modalClose = document.querySelector(".modal-exit")
            modalCover.addEventListener("click", this.hideModal)
            modalClose.addEventListener("click", this.hideModal)
        }, 25)
    }

    hideModal = (e) => {
        const modalCover = document.querySelector(".modal-cover")
        const modalClose = document.querySelector(".modal-exit")
        modalCover.removeEventListener("click", this.hideModal)
        modalClose.removeEventListener("click", this.hideModal)
        document.body.classList.remove("modal-open")
        this.setState({ modal: false })
    }

    render(){
        return (
            <div className="property-item" onClick={ this.showModal }>
                { this.state.modal && <PropertyModal property={this.props.property}/>}
                <div className="prop-top">
                    <div className="prop-details">
                        <div className="prop-age">
                            {/* { props.timeOnWillow } */}
                            2 days on Willow
                        </div>
                        <div className="prop-saved">
                            <div className="prop-heart">
                            </div>
                        </div>
                    </div>
                    <div className="prop-image">
                        <img src={this.props.property.photo_url} />
                    </div>
                </div>
                <div className="prop-bottom">
                    <div className="prop-price">${this.props.property.price}</div>
                    <div className="prop-mid-info">
                        <div className="prop-bd">{this.props.property.bedrooms} bd</div>
                        <div className="prop-ba">{this.props.property.bathrooms} ba</div>
                        <div className="prop-sqft">{this.props.property.square_feet} sqft</div>
                    </div>
                    <div className="prop-address">{this.props.property.address}</div>
                </div>
            </div>
        );
    }
}
