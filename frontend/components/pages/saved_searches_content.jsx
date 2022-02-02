import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import SearchNavContainer from "../search/search_nav_container"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            savedSearches: this.props.savedSearches,
            currentUser: this.props.state.entities.users[this.props.state.session.id]
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.stopEditing = this.stopEditing.bind(this)
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
        this.setState({
            selectedSearch: search,
            updating: true
        })
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const data = { 
            id: this.state.selectedSearch.id,
            title: this.state.title
        }

        this.props.updateSavedSearch(data).then(()=> {
            this.props.fetchSavedSearches().then(()=> {
                this.setState({
                    savedSearches: this.props.savedSearches
                })
            })
        })
        this.stopEditing();
    }

    stopEditing() {
        this.setState({
            selectedSearch: null,
            updating: false
        })
    }

    handleDelete(search){
        this.props.deleteSavedSearch(search.id).then(() => {
            this.props.fetchSavedSearches().then((searches) => {
                this.setState({
                    savedSearches: Object.values(searches.savedSearches)
                })
            })
        })
    }

    render(){
        const {
            title
        } = this.state
        let updateForm = null;
        if (this.state.updating) {
            updateForm = (
                <div className="home-update-form">
                    <div className="cancel-edit">
                        <FontAwesomeIcon 
                            icon={ faTimesCircle } 
                            color="black"
                            size="2x"
                            onClick={this.stopEditing}
                        />
                    </div>
                    <form onSubmit={ this.handleSubmit }>
                        <label>New Title</label>
                        <input
                            type="text"
                            value={ title }
                            onChange={ this.update("title")}
                            className="property-edit-field"
                        />
                        <input
                            type="submit"
                            className="property-edit-submit"
                        />
                    </form>
                </div>
            )
        }

        let savedSearches, searches = null;
        if (this.state.savedSearches && this.state.savedSearches.length >= 1){
            savedSearches = this.state.savedSearches
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
                        { updateForm }
                        <div className="saved-searches-body">
                            { searches }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}