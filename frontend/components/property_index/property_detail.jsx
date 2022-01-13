import React from 'react';
import { Link } from 'react-router-dom';

// A single listing of a property, which can be opened 
// into a detailed modal (when on the map)
export default class PropertyDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            modal: false,
            currentUser: this.props.state.entities.users[this.props.state.session.id],
        }

        this.setTimeOnWillow = this.setTimeOnWillow.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleSaveUnsave = this.handleSaveUnsave.bind(this)
        this.setTimeOnWillow()
    }

    componentDidMount(){
        // if this property is a saved home of the current user, set state
        if (this.state.currentUser){
            let savedHomes = Object.values(this.props.state.entities.savedHomes)
            let id = this.props.property.id
            let saved = false
            savedHomes.forEach((home) =>{
                if (home.property_id === id){
                    saved = true
                }
            })
            if (saved){
                this.setState({
                    saved: true
                })
            } else {
                this.setState({
                    saved: false
                })
            }
        } else {
            this.setState({
                saved: false
            })
        }
    }

    setTimeOnWillow() {
        const createdDate = new Date(this.props.property.created_at)
        const currentDate = new Date()

        let timeDiff = currentDate.getTime() - createdDate.getTime()

        let timeType;
        if (timeDiff > 86400000) { // 1 day
            timeType = "day"
            timeDiff /= 86400000
        } else if (timeDiff > 3600000) { // 1 hour
            timeType = "hour"
            timeDiff /= 3600000
        } else if (timeDiff > 60000) { // 1 minute
            timeType = "minute"
            timeDiff /= 60000
        } else { // seconds
            timeType = "second"
            timeDiff /= 1000
        }
        timeDiff = Math.floor(timeDiff)
        if (timeDiff !== 1) {
            this.timeOnWillow = `${timeDiff} ${timeType}s on Willow`
        } else {
            this.timeOnWillow = `${timeDiff} ${timeType} on Willow`
        }
        
    }

    handleModalOpen(e){
        if (this.props.getClickedProperty){
            this.props.getClickedProperty(this.props.property)
        }
    }

    handleSaveUnsave(e){
        e.stopPropagation()
        if (this.state.currentUser){
            if (this.state.saved){
                // find the save and delete it
                let homes = Object.values(this.props.state.entities.savedHomes)
                let thisSaveId
                let that = this
                homes.forEach((home) => {
                    if (home.property_id === that.props.property.id){
                        // debugger
                        thisSaveId = home.id
                    }
                })

                this.props.deleteSavedHome(thisSaveId).then(
                    this.setState({
                        saved: false
                    })
                );

            } else {
                // save the property
                const formData = new FormData();
                formData.append('saved_home[user_id]', this.state.currentUser.id)
                formData.append('saved_home[property_id]', this.props.property.id)
                this.props.createSavedHome(formData).then(
                    this.setState({
                        saved: true
                    })
                );
                
            }
            
        } else {
            // OPEN SIGN IN MODAL
        }
    }

    render(){
        const property = this.props.property
        const heartImg = this.state.saved ? (
            window.saveIconFilled
        ) : (
            window.saveIcon
        )
        return (
            <div className="property-item" onClick={ this.handleModalOpen }>
                <div className="prop-saved"  onClick={ this.handleSaveUnsave }>
                    <img src={ heartImg } />
                </div>
                <div className="prop-top">
                    <div className="prop-details">
                        <div className="prop-age">
                            { this.timeOnWillow }
                        </div>
                    </div>
                    <div className="prop-image">
                        <img src={property.photo_url} />
                    </div>
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
            </div>
        );
    }
}
