import { connect } from 'react-redux';

import { createProperty } from '../../actions/property_actions';
import PropertyForm from './property_form';

const mapStateToProps = (state, { location }) => ({
    // lat: new URLSearchParams(location.search).get('lat'),
    lat: "LATPLACEHOLDER",
    // lng: new URLSearchParams(location.search).get('lng')
    lng: "LNGPLACEHOLDER"
});

const mapDispatchToProps = dispatch => ({
    createProperty: property => dispatch(createProperty(property))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyForm);