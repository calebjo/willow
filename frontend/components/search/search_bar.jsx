import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        const placeholder = this.props.type === "splash" ? (
            "Enter an address, neighborhood, city or ZIP code"
        ) : (
            "Address, neighborhood, or ZIP"
        )
        return(
            <div className="search-container">
                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder={ placeholder }
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