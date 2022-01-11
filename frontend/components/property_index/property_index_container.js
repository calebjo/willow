import { connect } from 'react-redux';

import { fetchProperties } from "../../actions/property_actions"
import PropertyIndex from './property_index';

const mapStateToProps = (state, ownProps) => ({
    properties: Object.values(state.entities.properties),
    getClickedProperty: ownProps.getClickedProperty
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyIndex);