import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.state.entities.users[1]
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchSavedSearches()
    }

    render(){
        const savedSearches = this.state.currentUser.saved_searches
        let searchesText = ''
        // DEBUG -- NEED TO CREATE A STRING C
        savedSearches.forEach((search) =>{
            const parsed = JSON.parse(JSON.stringify(search))
            for (const x in parsed){
                if (parsed[x] !== null && x !== "created_at" && x !== "updated_at"){
                    // debugger
                    searchesText += parsed[x]
                    console.log(parsed[x])
                    
                }
            }
        })
        console.log(searchesText)
        const searches = savedSearches.map((search, idx) =>
            <div key={idx} className="saved-search-wrapper">
                <div className="saved-search-inner">
                    <div className="saved-search-left">
                        <div className="saved-search-title">
                            My Saved Search
                        </div>
                        <div className="saved-search-content">
                            INSERT CONTENT HERE
                        </div>
                    </div>
                    <div className="saved-search-right">
                        <div className="saved-search-edit">
                            <FontAwesomeIcon icon={ faTrashAlt } />
                            Edit
                        </div>
                        <div className="saved-search-delete">
                            <FontAwesomeIcon icon={ faPencilAlt } />
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav />
                </div>
                <div className="saved-searches-content account-page">
                    <div className="saved-searches-lower">
                        <div className="sub-nav-header">
                            Saved searches
                        </div>
                        <div className="saved-searches-filters">

                        </div>
                        <div className="saved-searches-body">
                            { searches }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}