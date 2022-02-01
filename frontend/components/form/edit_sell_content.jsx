import React from "react"

import { withRouter } from "react-router-dom"

class EditSellContent extends React.Component {
    constructor(props){
        super(props)

        const id = this.props.currentUser ? this.props.currentUser.id : null

        this.state = {
            user_id: id,
            city: this.props.city,
            state: this.props.state,
            zip_code: this.props.zip_code,
            address: this.props.address,
            price: 0,
            property_type: 'house',
            for_sale: true,
            for_rent: false,
            agent_listing: false,
            bedrooms: 0,
            bathrooms: 0,
            square_feet: 0,
            lot_size: 0,
            year_built: 0,
            hoa_fee: 0,
            has_basement: false,
            num_stories: 0,
            parking_spots: 0,
            heating: 'Contact Manager',
            cooling: 'Contact Manager',
            description: 'This is a placeholder!',
            create: false,
            lat: this.props.lat,
            lng: this.props.lng,
            photoFile: null,
            photoUrl: null
        }

        this.changeLocation = this.changeLocation.bind(this)
        this.changeForm = this.changeForm.bind(this)
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: this.state.lat, lng: this.state.lng }, // this is SF
            zoom: 20
        };
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: { lat: this.state.lat, lng: this.state.lng },
            title: "My property"
        })
        marker.setMap(this.map)
    }

    changeForm(){
        this.setState({
            create: true
        })
    }

    changeLocation(){
        window.location.reload(false);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
            fileReader.onloadend = () => {
            this.setState({ 
                photoFile: file, 
                photoUrl: fileReader.result 
            });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('property[user_id]', this.state.user_id)
        formData.append('property[address]', this.state.address)
        formData.append('property[price]', this.state.price)
        formData.append('property[property_type]', this.state.property_type)
        formData.append('property[for_sale]', this.state.for_sale)
        formData.append('property[for_rent]', this.state.for_rent)
        formData.append('property[agent_listing]', this.state.agent_listing)
        formData.append('property[bedrooms]', this.state.bedrooms)
        formData.append('property[bathrooms]', this.state.bathrooms)
        formData.append('property[square_feet]', this.state.square_feet)
        formData.append('property[lot_size]', this.state.lot_size)
        formData.append('property[year_built]', this.state.year_built)
        formData.append('property[hoa_fee]', this.state.hoa_fee)
        formData.append('property[has_basement]', this.state.has_basement)
        formData.append('property[num_stories]', this.state.num_stories)
        formData.append('property[parking_spots]', this.state.parking_spots)
        formData.append('property[heating]', this.state.heating)
        formData.append('property[cooling]', this.state.cooling)
        formData.append('property[description]', this.state.description)
        // GEOCODED/PARSED DATA
        formData.append('property[lat]', this.state.lat)
        formData.append('property[lng]', this.state.lng)
        formData.append('property[city]', this.state.city)
        formData.append('property[state]', this.state.state)
        formData.append('property[zip_code]', this.state.zip_code)
        if (this.state.photoFile) {
            formData.append('property[photo]', this.state.photoFile);
        }

        if (this.props.currentUser) {
            this.props.createProperty(formData).done( () => {
                this.props.history.push('/mywillow/yourhome')
            })
        } else {
            // console.log("You must be signed in to create a property.")
        }
        
    }

    render(){
        const {
            price,
            property_type,
            for_sale,
            bedrooms,
            bathrooms,
            square_feet,
            lot_size,
            year_built,
            hoa_fee,
            has_basement,
            num_stories,
            parking_spots,
            heating,
            cooling,
            description
        } = this.state

        const preview = this.state.photoUrl ? 
        <img height="200px" width="250px" src={this.state.photoUrl} /> : 
        null;

        const formType = this.state.create ? (
            <div className="create-property-content">
                <div className="create-property-title">
                    <div className="title-upper">
                        <div className="create-property-header">
                            For Sale By Owner Listing
                        </div>
                        <div className="create-property-sub-header">
                            { this.props.address }
                        </div>
                    </div>
                    <div className="create-property-head-copy">
                        Post once and your home will be listed on Willow, reaching buyers on the "largest" real estate network on the web.
                        <br />
                        <span>Disclaimer: actually quite small, don't upload too much stuff...</span>
                    </div>
                </div>
                <div className="create-property-form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-property-price">
                            <div className="create-section-head">
                                Set your price
                            </div>
                            <input
                                type="text"
                                value={price}
                                onChange={this.update("price")}
                                className="property-fact-field"
                            />
                        </div>
                        <div className="create-property-photos">
                            <div className="create-section-head">
                                Photos
                            </div>
                            <div className="property-photos-wrapper">
                                {/* Drag and drop to reorder. Click on a photo to delete. */}
                                <div className="property-photos-inner">
                                    { preview }
                                    <div className="property-photos-button">
                                        <input
                                            type="file"
                                            className="new-property-button"
                                            onChange={this.handleFile.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-property-facts">
                            <div className="create-section-head">
                                Home facts
                            </div>
                            <div className="create-section-input">
                                <label>Home type</label>
                                <select
                                    defaultValue="house"
                                    onChange={this.update("property_type")}
                                    className="property-fact-field" >
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="townhouse">Townhouse</option>
                                    <option value="condo">Condo</option>
                                </select>
                            </div>
                            <div className="create-section-input">
                                <label>For sale?</label>
                                <select
                                    defaultValue="true"
                                    onChange={this.update("for_sale")}
                                    className="property-fact-field" >
                                    <option value="true">For sale</option>
                                    <option value="false">For rent</option>
                                </select>
                            </div>
                            <div className="create-section-input">

                                <label>Beds</label>
                                <input
                                    type="text"
                                    value={bedrooms}
                                    onChange={this.update("bedrooms")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">

                                <label>Baths</label>
                                <input
                                    type="text"
                                    value={bathrooms}
                                    onChange={this.update("bathrooms")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">

                                <label>Finished square feet</label>
                                <input
                                    type="text"
                                    value={square_feet}
                                    onChange={this.update("square_feet")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Lot size</label>
                                <input
                                    type="text"
                                    value={lot_size}
                                    onChange={this.update("lot_size")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Year built</label>
                                <input
                                    type="text"
                                    value={year_built}
                                    onChange={this.update("year_built")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Hoa dues</label>
                                <input
                                    type="text"
                                    value={hoa_fee}
                                    onChange={this.update("hoa_fee")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Does your home have a basement?</label>
                                <select
                                    defaultValue="true"
                                    onChange={this.update("has_basement")}
                                    className="property-fact-field" >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="create-section-input">
                                <label>Number of Stories</label>
                                <input
                                    type="text"
                                    value={num_stories}
                                    onChange={this.update("num_stories")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Parking spots</label>
                                <input
                                    type="text"
                                    value={parking_spots}
                                    onChange={this.update("parking_spots")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Heating</label>
                                <input
                                    type="text"
                                    value={heating}
                                    onChange={this.update("heating")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Cooling</label>
                                <input
                                    type="text"
                                    value={cooling}
                                    onChange={this.update("cooling")}
                                    className="property-fact-field"
                                />
                            </div>
                            <div className="create-section-input">
                                <label>Describe your home</label>
                                <input
                                    type="textarea"
                                    value={description}
                                    onChange={this.update("description")}
                                    className="property-fact-field"
                                />
                            </div>
                        </div>
                        <div className="property-submit">
                            <input
                                type="submit"
                                value="Post for sale by owner"
                                className="new-property-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        ) : (
            <div className="edit-sell-content">
                <div className="edit-sell-title-wrapper">
                    <div className="edit-sell-header">
                        For Sale by Owner Listing
                    </div>
                    <div className="edit-sell-sub-header">
                        {this.state.address}
                    </div>
                </div>
                <div className="edit-sell-mid">
                    <div className="edit-sell-mid-text">
                        Is this an accurate location of your home?
                    </div>
                    <div className="edit-sell-map" ref="map">
                    </div>
                    <div className="edit-sell-buttons">
                        <div className="edit-sell-button" onClick={ this.changeForm }>
                            Yes, it's the correct location
                        </div>
                        <div className="edit-sell-button" onClick={ () => this.changeLocation() }>
                            No, let me change it
                        </div>
                    </div>
                </div>
            </div>
        )
        return(
            formType
        )
    }
}

export default withRouter(EditSellContent);