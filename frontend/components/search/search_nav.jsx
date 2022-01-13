import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./search_bar";

export default class SearchNav extends React.Component {
    constructor(props){
        super(props)

        let saleType
        if (this.props.state.ui.filters.forSale === true) {
            saleType = "forSale"
        } else {
            saleType = "forRent"
        }

        this.state = {
            saleType: saleType,

            priceText: "Price",
            bedText: "Beds & Baths",
            typeText: "Home type",
            moreText: "More",

            saleOpen: false,
            priceOpen: false,
            bedOpen: false,
            typeOpen: false,
            moreOpen: false
        }

        this.openDropdown = this.openDropdown.bind(this)
        this.exitDropdown = this.exitDropdown.bind(this)
        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeBoxText = this.changeBoxText.bind(this)
        this.clearFilters = this.clearFilters.bind(this)
    }

    openDropdown(type) {
        const key = `${type}Open`
        this.setState({
            [key]: true
        })

        setTimeout(() => {
            document.addEventListener("click", this.exitDropdown)
        }, 50)
    }

    exitDropdown(e) {
        const dropdown = document.querySelector(".search-tab-dropdown")
        
        setTimeout(() => {
            if (e.target !== dropdown && 
                e.target.parentNode !== dropdown && 
                e.target.parentNode.parentNode !== dropdown) {
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

    update(e) {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    
    handleChange = (filter, updateFilter) => e => {
        const value = e.target.getAttribute('value')
        updateFilter(filter, parseInt(value))
    }

    changeBoxText(type, value){
        // DEBUG -- TODO
    }

    handleInputClick(e) {
        const input = document.querySelectorAll(".dropdown-price-box")
        setTimeout(() => {
            if (input[0] !== e.target && input[1] !== e.target) {
                // SUBMIT THE FORM
                console.log("Clicked away, submitting the price form.")
            }
        }, 50)
    }

    clearFilters() {
        console.log("Resetting filters to default...")
        this.props.resetFilters()
    }

    render() {
        let saleText, ballColor
        if (this.state.saleType === "forSale"){
            saleText = "For Sale"
            ballColor = "#FF5A50"
        } else if (this.state.saleType === "forRent"){
            saleText = "For Rent"
            ballColor = "#985DFF"
        } else {
            saleText = "Sold"
            ballColor = "#FFD237"
        }

        const search = this.props.type === "splash" ? (
            <SearchBar 
                type="splash"
                updateFilter={this.props.updateFilter}
                history={this.props.history} />
        ) : (
            <div className="search-nav">
                <div className="search-nav-left">
                    <SearchBar 
                        type="nav"
                        updateFilter={this.props.updateFilter}
                        history={this.props.history} />
                </div>
                <div className="search-nav-center">
                    <div className="search-tab sale-dropdown selected"  onClick={() => this.openDropdown("sale")}>
                        <div className="sale-type-ball" style={{backgroundColor: ballColor}}/>
                        <div className="tab-header">
                            { saleText }
                        </div>
                        <div className={ this.state.saleOpen ? "search-tab-dropdown sale-dropdown" : "hidden"}>
                            <div className="sale-dropdown-radio-list">
                                <div className="sale-dropdown-radio">
                                    <input
                                        type="radio"
                                        name="sale-type"
                                        value="for_sale"
                                    />
                                    <div className="sale-dropdown-ball red" />
                                    For Sale
                                </div>
                                <div className="sale-dropdown-radio">
                                    <input
                                        type="radio"
                                        name="sale-type"
                                        value="for_rent"
                                    />
                                    <div className="sale-dropdown-ball purple" />
                                    For Rent
                                </div>
                                <div className="sale-dropdown-radio">
                                    <input
                                        type="radio"
                                        name="sale-type"
                                        value="sold"
                                    />
                                    <div className="sale-dropdown-ball yellow" />
                                    Sold
                                </div>
                            </div>
                            <div className="done-tab">
                                <button onClick={ this.exitDropdown }>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="search-tab price-dropdown" onClick={() => this.openDropdown("price")}>
                        <div className="tab-header">{this.state.priceText}</div>
                        <div className={ this.state.priceOpen ? "search-tab-dropdown price-dropdown" : "hidden"}>
                            <div className="nav-dropdown-header">
                                Price Range
                            </div>
                            <div className="nav-dropdown-price-boxes">
                                <input
                                    type="text"
                                    value={ this.props.filters.priceMin }
                                    className="dropdown-price-box"
                                    placeholder="Min"
                                    onChange={this.update}
                                    onClick={this.handleInputClick}
                                />
                                <div className="dropdown-separator">-</div>
                                <input
                                    type="text"
                                    value={ this.props.filters.priceMax }
                                    className="dropdown-price-box"
                                    placeholder="Max"
                                    onChange={this.update}
                                    onClick={this.handleInputClick}
                                />
                            </div>
                            <div className="nav-dropdown-price-list">
                                <div className="price-list-left">
                                    <div className="price-list-item"
                                        value={ 0 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        $0+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 100000 : 200 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "100,000" : "200"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 200000 : 400 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "200,000" : "400"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 300000 : 600 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "300,000" : "600"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 400000 : 800 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "400,000" : "800"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 500000 : 1000 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "500,000" : "1000"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 600000 : 1200 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "600,000" : "1200"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 700000 : 1400 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "700,000" : "1400"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 800000 : 1600 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "800,000" : "1600"}+
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 900000 : 1800 }
                                        onClick={this.handleChange('minPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "900,000" : "1800"}+
                                    </div>
                                </div>
                                <div className="price-list-right">
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 500000 : 2000 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "500,000" : "2000"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 600000 : 2200 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "600,000" : "2200"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 700000 : 2400 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "700,000" : "2400"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 800000 : 2600 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "800,000" : "2600"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 900000 : 2800 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "900,000" : "2800"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 1000000 : 13000200 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "1M" : "3000"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 1250000 : 3500 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "1.25M" : "3500"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 1500000 : 4000 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "1.5M" : "4000"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ this.state.saleType === "forSale" ? 1750000 : 4500 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        ${ this.state.saleType === "forSale" ? "1.75M" : "4500"}
                                    </div>
                                    <div className="price-list-item"
                                        value={ 999999999 }
                                        onClick={this.handleChange('maxPrice', this.props.updateFilter)}>
                                        Any Price
                                    </div>
                                </div>
                            </div>
                            <div className="done-tab">
                                <button onClick={ this.exitDropdown }>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="search-tab bed-dropdown" onClick={() => this.openDropdown("bed")}>
                        <div className="tab-header">{this.state.bedText}</div>
                        <div className={ this.state.bedOpen ? "search-tab-dropdown bed-dropdown" : "hidden"}>
                            <div className="bed-selection-wrapper">
                                <div className="bed-selection">
                                    <div className="bed-selection-header">
                                        Bedrooms
                                    </div>
                                    <div className="bed-selection-grid">
                                        <div className="bed-selection-grid-tile"
                                            value={0}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            Any
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={1}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            1+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={2}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            2+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={3}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            3+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={4}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            4+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={5}
                                            onClick={this.handleChange('minBeds', this.props.updateFilter)}>
                                            5+
                                        </div>
                                    </div>
                                </div>
                                <div className="bed-selection">
                                    <div className="bed-selection-header">
                                        Bathrooms
                                    </div>
                                    <div className="bed-selection-grid">
                                        <div className="bed-selection-grid-tile"
                                            value={0}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            Any
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={1}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            1+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={2}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            2+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={3}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            3+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={4}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            4+
                                        </div>
                                        <div className="bed-selection-grid-tile"
                                            value={5}
                                            onClick={this.handleChange('minBaths', this.props.updateFilter)}>
                                            5+
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="done-tab">
                                <button onClick={ this.exitDropdown }>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="search-tab type-dropdown"  onClick={() => this.openDropdown("type")}>
                        <div className="tab-header">{this.state.typeText}</div>
                        <div className={ this.state.typeOpen ? "search-tab-dropdown type-dropdown" : "hidden"}>
                            <div className="nav-dropdown-header">
                                Home Type
                            </div>
                            <div className="type-dropdown-checks">
                                <div className="type-dropdown-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    Houses
                                </div>
                                <div className="type-dropdown-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    Apartments
                                </div>
                                <div className="type-dropdown-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    Townhomes
                                </div>
                                <div className="type-dropdown-checkbox">
                                    <input
                                        type="checkbox"
                                    />
                                    Condos
                                </div>
                            </div>
                            <div className="done-tab">
                                <button onClick={ this.exitDropdown }>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="search-expand"  onClick={() => this.openDropdown("more")}>
                        <div className="tab-header">{this.state.moreText}</div>
                        <div className={ this.state.moreOpen ? "search-tab-dropdown expand-dropdown" : "hidden"}>
                            <div className="search-expand-list">
                                <div className="search-expand-item">
                                    Max HOA
                                    <select
                                        defaultValue="999999999">
                                        <option value="999999999">Any</option>
                                        <option value="0">No HOA Fee</option>
                                        <option value="50">$50/month</option>
                                        <option value="100">$100/month</option>
                                        <option value="200">$200/month</option>
                                        <option value="300">$300/month</option>
                                        <option value="400">$400/month</option>
                                        <option value="500">$500/month</option>
                                        <option value="600">$600/month</option>
                                        <option value="700">$700/month</option>
                                        <option value="800">$800/month</option>
                                        <option value="900">$900/month</option>
                                        <option value="1000">$1000/month</option>
                                    </select>
                                </div>
                                <div className="search-expand-item">
                                    Parking Spots
                                    <select
                                        defaultValue="0">
                                        <option value="0">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                                <div className="search-expand-item">
                                    Square Feet
                                    <select
                                        defaultValue="0">
                                        <option value="0">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                                <div className="search-expand-item">
                                    Lot Size
                                    <select
                                        defaultValue="0">
                                        <option value="0">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                                <div className="search-expand-item">
                                    Year Built
                                    <select
                                        defaultValue="0">
                                        <option value="0">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                                <div className="search-expand-item">
                                    Basement
                                    <input
                                        type="checkbox"
                                    />
                                    <label>Has Basement</label>
                                </div>
                                <div className="search-expand-item">
                                    Number Of Stories
                                    <input
                                        type="checkbox"
                                    />
                                    <label>Single-story only</label>
                                </div>
                            </div>
                            <div className="done-tab">
                                <button onClick={ () => this.clearFilters() }>Reset all filters</button>
                                <button onClick={ this.exitDropdown }>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-search">
                        <div className="tab-header">Save search</div>
                    </div>
                </div>
                <div className="search-nav-right">
                    <div className="saved-homes">
                        <Link to="/mywillow/favorites">Saved homes</Link>
                    </div>
                </div>
            </div>
        )
        return(
            search
        );
    }
}