import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import SearchNavContainer from "../search/search_nav_container"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.state.entities.users[this.props.state.session.id]
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchSavedSearches()
    }

    render(){
        let savedSearches, searches = null;
        if (this.state.currentUser.saved_searches.length >= 1){
            savedSearches = this.state.currentUser.saved_searches

            searches = savedSearches.map((search, idx) =>
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
        } else {
            searches = (
                <div className="user-no-content">
                    <img src={ window.buyHome } />
                    <div className="user-no-content-title">
                        <div className="no-content-header">
                            Save your searches for safe keeping.
                        </div> 
                        <div className="no-content-sub-header">
                            Saving your searches saves you time and you can always come back later.
                        </div>
                    </div>
                    <SearchNavContainer 
                        type="splash"
                    />
                </div>
            )
        }
        // let searchesText = ''
        // // DEBUG -- NEED TO CREATE A STRING C
        // savedSearches.forEach((search) =>{
        //     const parsed = JSON.parse(JSON.stringify(search))
        //     for (const x in parsed){
        //         if (parsed[x] !== null && x !== "created_at" && x !== "updated_at"){
        //             // debugger
        //             searchesText += parsed[x]
        //             console.log(parsed[x])
                    
        //         }
        //     }
        // })
        
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