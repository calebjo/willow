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
            savedSearches: this.props.savedSearches,
            currentUser: this.props.state.entities.users[this.props.state.session.id]
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchSavedSearches().then((searches) => {
            this.setState({
                savedSearches: Object.values(searches.savedSearches)
            })
            
        })
    }

    handleEdit(search){
        console.log("Editing the selected search...")
        // this.props.updateSavedSearch(search.id)
    }

    handleDelete(search){
        console.log("Deleting the selected search...")
        this.props.deleteSavedSearch(search.id).then(() => {
            this.props.fetchSavedSearches().then((searches) => {
                this.setState({
                    savedSearches: Object.values(searches.savedSearches)
                })
            })
        })
    }

    render(){
        let savedSearches, searches = null;
        if (this.state.savedSearches && this.state.savedSearches.length >= 1){
            savedSearches = this.state.savedSearches
            console.log(savedSearches)
            searches = savedSearches.map((search, idx) =>
                <div key={idx} className="saved-search-wrapper">
                    <div className="saved-search-inner">
                        <div className="saved-search-left">
                            <div className="saved-search-title">
                                { search.title || "404: TITLE NOT FOUND"}
                            </div>
                            <div className="saved-search-type">
                                {/* { search.for_sale ? ( "For Sale" ) : ( "For Rent" ) } */}
                            </div>
                        </div>
                        <div className="saved-search-right">
                            <div className="saved-search-edit" onClick={ () => this.handleEdit(search) }>
                                <FontAwesomeIcon icon={ faPencilAlt } />
                                Edit
                            </div>
                            <div className="saved-search-delete" onClick={ () => this.handleDelete(search) }>
                                <FontAwesomeIcon icon={ faTrashAlt } />
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
        
        return (
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav 
                        type="savedSearches"/>
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