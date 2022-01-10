import React from "react"

export default class EditSellContent extends React.Component {
    constructor(props){
        super(props)
        // DEBUG -- DEFAULTS TO DEMO USER AS CREATOR
        const id = window.currentUser ? window.currentUser.id : 1
        this.state = {
            user_id: id,
            address: this.props.address,
            price: 0,
            property_type: '',
            for_sale: false,
            for_rent: false,
            agent_listing: false,
            bedrooms: 0,
            bathrooms: 0,
            square_feet: 0,
            lot_size: 0,
            year_built: 0,
            hoa_dues: 0,
            has_basement: false,
            num_stories: 0,
            parking_spots: 0,
            heating: '',
            cooling: '',
            description: '',
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
        formData.append('property[hoa_dues]', this.state.hoa_dues)
        formData.append('property[has_basement]', this.state.has_basement)
        formData.append('property[num_stories]', this.state.num_stories)
        formData.append('property[parking_spots]', this.state.parking_spots)
        formData.append('property[heating]', this.state.heating)
        formData.append('property[cooling]', this.state.cooling)
        formData.append('property[description]', this.state.description)

        if (this.state.photoFile) {
            formData.append('property[photo]', this.state.photoFile);
        }

        if (window.currentUser) {
            this.props.createProperty(formData);
        } else {
            console.log("You must be signed in to create a property.")
        }
        
    }

    render(){
        const {
            property_type,
            for_sale,
            bedrooms,
            bathrooms,
            square_feet,
            lot_size,
            year_built,
            hoa_dues,
            has_basement,
            num_stories,
            parking_spots,
            heating,
            cooling,
            description
        } = this.state

        const preview = this.state.photoUrl ? 
        <img height="200px" width="200px" src={this.state.photoUrl} /> : 
        null;

        const formType = this.state.create ? (
            <div className="create-property-content">
                <div className="create-property-title">
                </div>
                <div className="create-property-form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-property-price">
                            Set your price
                            <input
                                type="text"
                            />
                        </div>
                        <div className="create-property-photos">
                            Photos
                            <div className="property-photos-wrapper">
                                Drag and drop to reorder. Click on a photo to delete.
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
                            Home facts
                            <label>Home type</label>
                            <input
                                type="text"
                                value={property_type}
                                onChange={this.update("property_type")}
                                className="property-fact-field"
                            />
                            <label>For sale?</label>
                            <input
                                type="text"
                                value={for_sale}
                                onChange={this.update("for_sale")}
                                className="property-fact-field"
                            />
                            <label>Beds</label>
                            <input
                                type="text"
                                value={bedrooms}
                                onChange={this.update("bedrooms")}
                                className="property-fact-field"
                            />
                            <label>Baths</label>
                            <input
                                type="text"
                                value={bathrooms}
                                onChange={this.update("bathrooms")}
                                className="property-fact-field"
                            />
                            <label>Finished square feet</label>
                            <input
                                type="text"
                                value={square_feet}
                                onChange={this.update("square_feet")}
                                className="property-fact-field"
                            />
                            <label>Lot size</label>
                            <input
                                type="text"
                                value={lot_size}
                                onChange={this.update("lot_size")}
                                className="property-fact-field"
                            />
                            <label>Year built</label>
                            <input
                                type="text"
                                value={year_built}
                                onChange={this.update("year_built")}
                                className="property-fact-field"
                            />
                            <label>Hoa dues</label>
                            <input
                                type="text"
                                value={hoa_dues}
                                onChange={this.update("hoa_dues")}
                                className="property-fact-field"
                            />
                            <label>Basement?</label>
                            <input
                                type="text"
                                value={has_basement}
                                onChange={this.update("has_basement")}
                                className="property-fact-field"
                            />
                            <label>Number of Stories</label>
                            <input
                                type="text"
                                value={num_stories}
                                onChange={this.update("num_stories")}
                                className="property-fact-field"
                            />
                            <label>Parking spots</label>
                            <input
                                type="text"
                                value={parking_spots}
                                onChange={this.update("parking_spots")}
                                className="property-fact-field"
                            />
                            <label>Heating</label>
                            <input
                                type="text"
                                value={heating}
                                onChange={this.update("heating")}
                                className="property-fact-field"
                            />
                            <label>Cooling</label>
                            <input
                                type="text"
                                value={cooling}
                                onChange={this.update("cooling")}
                                className="property-fact-field"
                            />
                            <label>Describe your home</label>
                            <input
                                type="textarea"
                                value={description}
                                onChange={this.update("description")}
                                className="property-fact-field"
                            />
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
                <div className="edit-sell-header">
                    For Sale by Owner Listing
                </div>
                <div className="edit-sell-sub-header">
                    {this.state.address}
                </div>
                <div className="edit-sell-mid">
                    Is this an accurate location of your home?
                    <div className="edit-sell-map" ref="map">
                    </div>
                    <div className="edit-sell-buttons">
                        <div className="edit-sell-button" onClick={ this.changeForm }>
                            Yes, it's the correct location
                        </div>
                        <div className="edit-sell-button" onClick={ this.changeLocation }>
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