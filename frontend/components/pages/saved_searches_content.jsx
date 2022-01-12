import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

export default class SavedSearchesContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchSavedSearches()
    }

    render(){
        const searches = this.props.savedSearches.map((search, idx) => {
            if (search.id && search.user_id === this.props.state.session.id) {
            }
        })


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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}