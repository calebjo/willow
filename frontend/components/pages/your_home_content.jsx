import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";
import SearchNavContainer from "../search/search_nav_container"

export default class YourHomeContent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            properties: this.props.properties
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        // DEBUG -- RETURNS NO PROPERTIES (MAYBE AN ISSUE WITH FILTERING)
        this.props.fetchProperties().then(({ properties }) => {
            this.setState({
                properties: Object.values(properties)
            })
        })
    }

    handleDelete(property){
        console.log("Deleting selected property")
        this.props.deleteProperty(property.id).then(() => {
            this.setState({
                properties: this.props.state.properties
            })
            
        })
    }

    handleEdit(property, data){
        console.log("Editing selected property")
        // this.props.updateProperty(property, data)
    }

    render(){

        if (this.state.properties.length === 0){
            return null
        }

        let properties = this.state.properties.map((property, idx) => {
            if (property.id && property.user_id === this.props.state.session.id) {
                return (
                    <div className="user-property-item" key={idx}>
                        <div className="user-prop-image">
                            <img src={property.photo_url} />
                        </div>
                        <div className="prop-bottom">
                            <div className="prop-price">${property.price.toLocaleString()}</div>
                            <div className="prop-mid-info">
                                <div className="prop-bd">{property.bedrooms} bd</div>
                                <div className="prop-ba">{property.bathrooms} ba</div>
                                <div className="prop-sqft">{property.square_feet.toLocaleString()} sqft</div>
                            </div>
                            <div className="prop-address">{property.address}</div>
                        </div>
                        <div className="your-home-lower">
                            <button className="your-home-setting edit" onClick={() => this.handleEdit(property)}>
                                Edit home
                            </button>
                            <button className="your-home-setting delete" onClick={() => this.handleDelete(property)}>
                                Delete your listing
                            </button>
                        </div>
                    </div>
                )
            }
        })
        let anyProperties = false
        properties.forEach((property)=> {
            if (property) { anyProperties = true }
        })
        if (!anyProperties) {
            properties = (
                <div className="user-no-content">
                    <img src={ window.buyHome } />
                    <div className="user-no-content-title">
                        <div className="no-content-header">
                            Put your home here
                        </div> 
                        <div className="no-content-sub-header">
                            List your home on Willow for others to see, ponder, and generally admire. This is real copy text, I am a professional.
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
                    <TopSubNav />
                </div>
                <div className="your-home-content account-page">
                    <div className="your-home-main">
                        <div className="sub-nav-header">
                            Your home
                        </div>
                        <div className="your-home-body">
                            <div className="your-home-data">
                                { properties }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}