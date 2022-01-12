import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

export default class SavedHomesContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchSavedHomes()
    }

    render(){
        return (
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav />
                </div>
                <div className="saved-homes-content account-page">
                    <div className="saved-homes-lower">
                        <div className="sub-nav-header">
                            Saved homes
                        </div>
                        <div className="saved-homes-filters">

                        </div>
                        <div className="saved-homes-body">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}