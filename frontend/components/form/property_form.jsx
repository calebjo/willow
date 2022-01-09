import React from 'react';
import { withRouter } from 'react-router-dom';

class PropertyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            street_address: '',
            unit_num: '',
            city: '',
            state: '',
            zip_code: ''
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        const { street_address, unit_num, city, state, zip_code } = this.state

        return (
            <div className="sell-form-container">
                <div className="sell-form-header">
                    Post a For Sale by Owner Listing
                </div>
                <div className="sell-form-wrapper">
                    <div className="sell-form-sub-header">
                        For Sale by Owner
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={ street_address }
                            onChange={this.update('street_address')}
                            placeholder="Street address"
                            className="property-field"
                        />
                        <input
                            type="text"
                            value={ unit_num }
                            onChange={this.update('unit_num')}
                            placeholder="Unit# (Optional)"
                            className="property-field"
                        />
                        <input
                            type="text"
                            value={ city }
                            onChange={this.update('city')}
                            placeholder="City"
                            className="property-field"
                        />
                        <select 
                            value={ state }
                            onChange={this.update('state')}
                            className="property-field">
                            <option value=""></option>
                            <option value="AK">AK</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                            <option value="AS">AS</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="FM">FM</option>
                            <option value="GA">GA</option>
                            <option value="GU">GU</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MH">MH</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MP">MP</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="PR">PR</option>
                            <option value="PW">PW</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VA">VA</option>
                            <option value="TN">TN</option>
                            <option value="VI">VI</option>
                            <option value="VT">VT</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
                        <input
                            type="text"
                            value={ zip_code }
                            onChange={this.update('zip_code')}
                            placeholder="Zip"
                            className="property-field"
                        />
                        <input
                            type="submit"
                            value="Continue"
                            className="property-form-button"
                        />
                    </form>
                    <div className="sign-in-checker">
                        Sign in to submit this posting
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PropertyForm);
