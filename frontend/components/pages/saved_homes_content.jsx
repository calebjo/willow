import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import PropertyDetail from "../property_index/property_detail"
import SearchNavContainer from "../search/search_nav_container"

export default class SavedHomesContent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            properties: this.props.properties,
            currentUser: this.props.state.entities.users[this.props.state.session.id]
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchProperties().then(({ properties }) => {
            this.setState({
                properties: Object.values(properties)
            })
        })

        this.props.fetchSavedHomes().then(({ savedHomes }) => {
            this.setState({
                savedHomes: Object.values(savedHomes)
            })
        })
    }

    render(){
        let saveIds, savedHomes, userSaves
        if (this.state.properties.length >= 1) {
            if (this.state.currentUser.saved_homes.length >= 1) {
                saveIds = this.state.currentUser.saved_homes.map(
                    (save) => (save.property_id)
                )
        
                savedHomes = this.state.properties.filter( property => 
                    saveIds.includes(property.id)
                )
        
                userSaves = savedHomes.map((home, idx) => 
                    <PropertyDetail 
                        key={idx}
                        property={home}
                        state={this.props.state} 
                        createSavedHome={this.props.createSavedHome}
                        deleteSavedHome={this.props.deleteSavedHome}
                    />
                )
            } else {
                userSaves = (
                    <div className="user-no-content">
                        <img src={ window.rentHome } />
                        <div className="user-no-content-title">
                            <div className="no-content-header">
                                Save Homes for safe keeping.
                            </div> 
                            <div className="no-content-sub-header">
                                Whenever you find homes you like, select the heart to save them here.
                            </div>
                        </div>
                        <SearchNavContainer 
                            type="splash"
                        />
                    </div>
                )
            }
        }

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
                            { userSaves }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}