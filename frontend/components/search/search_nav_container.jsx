import { connect } from 'react-redux';

import { fetchProperties, updateProperty, deleteProperty } from "../../actions/property_actions"
import { updateFilter } from "../../actions/filter_actions"
import SearchNav from './search_nav';

const mapStateToProps = (state, ownProps) => ({
    type: ownProps.type,
    properties: Object.values(state.entities.properties),
    filters: state.ui.filters,
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    updateProperty: (property) => dispatch(updateProperty(property)),
    deleteProperty: (property) => dispatch(deleteProperty(property)),
    updateFilter: (filters, value) => dispatch(updateFilter(filters, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchNav);