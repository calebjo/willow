import { connect } from 'react-redux';

import { fetchProperty } from "../../actions/property_actions"
import PropertyDetail from './property_detail';

const mapStateToProps = (state) => ({
    properties: Object.values(state.entities.properties)
});

const mapDispatchToProps = dispatch => ({
    fetchProperty: (property) => dispatch(fetchProperty(property))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyDetail);