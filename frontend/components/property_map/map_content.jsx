import React from "react";

import SearchNav from "../search/search_nav";
import TopNavContainer from "../top_nav/top_nav_container";
import { Dropdown } from "../top_nav/dropdown";
import PropertyMap from "./property_map";
import PropertyShowContainer from "../property_show/property_show_container";
import PropertyModal from "../modal/property_modal";

export default class MapContent extends React.Component {
    constructor(props){
        super(props)

        this.state = { modal: false }
        
        this.getClickedProperty = this.getClickedProperty.bind(this)
        this.showPropModal = this.showPropModal.bind(this)
        this.hidePropModal = this.hidePropModal.bind(this)
    }

    getClickedProperty(property){
        this.setState({ property: property })
        this.showPropModal()
    }

    showPropModal = () => {
        this.setState({ modal: true })

        const modal = document.querySelector(".modal-container")
        if (modal && modal.classList.contains("hidden")) { 
            modal.classList.remove("hidden")
        }

        document.body.classList.add("modal-open")
        setTimeout(() => {
            const modalCover = document.querySelector(".modal-cover")
            const modalClose = document.querySelector(".modal-exit")
            modalCover.addEventListener("click", this.hidePropModal)
            modalClose.addEventListener("click", this.hidePropModal)
        }, 25)
    }

    hidePropModal = (e) => {
        const modalCover = document.querySelector(".modal-cover")
        const modalClose = document.querySelector(".modal-exit")
        modalCover.removeEventListener("click", this.hidePropModal)
        modalClose.removeEventListener("click", this.hidePropModal)
        document.body.classList.remove("modal-open")
        this.setState({ modal: false })
    }

    render() {
        return(
            <div className="map-content">
                { this.state.modal && 
                    <PropertyModal 
                        property={this.state.property}
                        hideModal={this.hidePropModal}/>}
                <Dropdown />
                <TopNavContainer />
                <SearchNav />
                <div className="properties-container">
                    <PropertyMap />
                    <PropertyShowContainer 
                        getClickedProperty={this.getClickedProperty}/>
                </div>
            </div>
        );
    }
}