import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import PropertyDetail from "../property_index/property_detail"

export default class SavedHomesContent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            properties: this.props.properties
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
        
        if (this.state.properties.length === 0) {
            return null;
        } 

        const saveIds = this.props.state.entities.users[1].saved_homes.map(
            (save) => (save.property_id)
        )

        const savedHomes = this.state.properties.filter( property => 
            saveIds.includes(property.id)
        )

        const userSaves = savedHomes.map((home, idx) => 
            <PropertyDetail 
                key={idx}
                property={home}
            />
        )

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