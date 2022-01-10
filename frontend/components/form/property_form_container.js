import { connect } from 'react-redux';

import { createProperty } from '../../actions/property_actions';
import EditSellContent from '../pages/edit_sell_content';
import PropertyForm from './property_form';

const mapStateToProps = (state, ownProps) => ({
    // lat: new URLSearchParams(location.search).get('lat'),
    test: "aaa",
    redirect: ownProps.redirect
    // lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
    createProperty: property => dispatch(createProperty(property))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSellContent);