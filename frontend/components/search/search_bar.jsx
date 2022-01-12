import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            queryString: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            queryString: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        // On submission, redirects to the map page with a query string
        e.preventDefault()
        if (this.state.queryString.length >= 2) {
            this.props.updateFilter("query", this.state.queryString)
        } else {
            this.props.updateFilter("query", "")
        }

        // regardless of search, redirect
        this.props.history.push(`/homes/${this.state.queryString}`)
    }

    render() {
        const placeholder = this.props.type === "splash" ? (
            "Enter an address, neighborhood, city or ZIP code"
        ) : (
            "Address, neighborhood, or ZIP"
        )
        return(
            <div className="search-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="header-search"
                        value={this.state.queryString}
                        placeholder={ placeholder }
                        onChange={this.update}
                    />
                    <button type="submit" id="search-submit">
                        <FontAwesomeIcon 
                            icon={ faSearch }
                            color="blue" 
                        />
                    </button>
                </form>
            </div>
        );
    }
}