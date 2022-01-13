import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { fetchProperties, updateProperty, deleteProperty } from "../../actions/property_actions"
import { updateFilter, resetFilters } from "../../actions/filter_actions"
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
    updateFilter: (filters, value) => dispatch(updateFilter(filters, value)),
    resetFilters: () => dispatch(resetFilters())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchNav));