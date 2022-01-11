import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./search_bar";

export default class SearchNav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            saleType: "forSale",
            saleOpen: false,
            priceOpen: false,
            bedOpen: false,
            typeOpen: false,
            moreOpen: false
        }

        this.openDropdown = this.openDropdown.bind(this)
        this.exitDropdown = this.exitDropdown.bind(this)
    }

    openDropdown(type) {
        console.log(`Opening ${type} dropdown!`)

        const key = `${type}Open`
        this.setState({
            [key]: true
        })

        setTimeout(() => {
            document.addEventListener("click", this.exitDropdown)
        }, 50)
    }

    exitDropdown(e) {
        console.log(`in exitDropdown!`)
        console.log(e.target)
        const dropdown = document.querySelector(".search-tab-dropdown")
        setTimeout(() => {
            if (e.target.parentNode !== dropdown && e.target !== dropdown && e.target.parentNode.parentNode !== dropdown) {
                document.removeEventListener("click", this.exitDropdown)
                this.setState({
                    saleOpen: false,
                    priceOpen: false,
                    bedOpen: false,
                    typeOpen: false,
                    moreOpen: false
                })
            }
        }, 50)
    }
    
    handleChange = (filter, updateFilter) => e => {
        const value = e.target.getAttribute('value')
        debugger
        updateFilter(filter, parseInt(value))
    }

    render() {
        const search = this.props.type === "splash" ? (
            <SearchBar 
                type="splash"/>
        ) : (
            <div className="search-nav">
                <div className="search-nav-left">
                    <SearchBar 
                        type="nav"/>
                </div>
                <div className="search-nav-center">
                    <div className="search-tab sale-dropdown selected">
                        <div className="sale-type-ball" />
                        <div className="tab-header">For Sale</div>
                        <div className={ this.state.saleOpen ? "search-tab-dropdown sale-dropdown" : "hidden"}>
                            <div className="done-tab">
                                <button value="Done" onClick={ this.exitDropdown } />
                            </div>
                        </div>
                    </div>
                    <div className="search-tab price-dropdown" onClick={() => this.openDropdown("price")}>
                        <div className="tab-header">Price</div>
                        <div className={ this.state.priceOpen ? "search-tab-dropdown price-dropdown" : "hidden"}>
                            <div className="nav-dropdown-header">
                                Price Range
                            </div>
                            <div className="nav-dropdown-header">
                                BOXES GO HERE
                            </div>
                            <div className="nav-dropdown-price-list">
                                <div className="price-list-item"
                                    value={ 0 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    $0+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "100,000" : "200"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "200,000" : "400"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "300,000" : "600"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "400,000" : "800"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "500,000" : "1000"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "600,000" : "1200"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "700,000" : "1400"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "800,000" : "1600"}+
                                </div>
                                <div className="price-list-item"
                                    value={ this.state.saleType === "forSale" ? 300000 : 1200 }
                                    onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                    ${ this.state.saleType === "forSale" ? "900,000" : "1800"}+
                                </div>
                            </div>
                            <div className="done-tab">
                                <button value="Done" onClick={ this.exitDropdown } />
                            </div>
                        </div>
                    </div>
                    <div className="search-tab bed-dropdown">
                        <div className="tab-header">Beds & Baths</div>
                        <div className={ this.state.bedOpen ? "search-tab-dropdown bed-dropdown" : "hidden"}>
                            <div className="done-tab">
                                <button value="Done" onClick={ this.exitDropdown } />
                            </div>
                        </div>
                    </div>
                    <div className="search-tab type-dropdown">
                        <div className="tab-header">Home type</div>
                        <div className={ this.state.typeOpen ? "search-tab-dropdown type-dropdown" : "hidden"}>
                            <div className="done-tab">
                                <button value="Done" onClick={ this.exitDropdown } />
                            </div>
                        </div>
                    </div>
                    <div className="search-expand">
                        <div className="tab-header">More</div>
                        <div className={ this.state.moreOpen ? "search-tab-dropdown expand-dropdown" : "hidden"}>
                            <div className="done-tab">
                                <button value="Done" onClick={ this.exitDropdown } />
                            </div>
                        </div>
                    </div>
                    <div className="save-search">
                        <div className="tab-header">Save search</div>
                    </div>
                </div>
                <div className="search-nav-right">
                    <div className="saved-homes">
                        {/* <Link to="/mywillow/savedhomes">Saved homes</Link> */}
                        Saved homes
                    </div>
                </div>
            </div>
        )
        return(
            search
        );
    }
}