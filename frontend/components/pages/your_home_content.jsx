import React from "react";

import TopNavContainer from "../top_nav/top_nav_container"
import TopSubNav from "../top_nav/top_sub_nav";
import Footer from "../footer/footer"

export default class YourHomeContent extends React.Component {
    constructor(props){
        super(props)
        console.log(this)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchProperties()
    }

    handleDelete(property){
        console.log("Deleting selected property")
        this.props.deleteProperty(property.id)
    }

    handleEdit(property){
        console.log("Editing selected property")
        // this.props.updateProperty()
    }

    render(){
        const properties = this.props.properties.map((property, idx) => {
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
                            <div className="your-home-setting edit" onClick={() => this.handleEdit(property)}>
                                Edit home
                            </div>
                            <div className="your-home-setting delete" onClick={() => this.handleDelete(property)}>
                                Delete your listing
                            </div>
                        </div>
                    </div>
                )
            }
        })
        
        return (
            <div className="your-home-content">
                <div className="willow-top-container">
                    <TopNavContainer />
                    <TopSubNav />
                </div>
                <div className="your-home-lower">
                    <div className="sub-nav-header">
                        Your home
                    </div>
                    <div className="your-home-body">
                        <div className="your-home-data">
                            { properties }
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}