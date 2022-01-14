import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProperties } from "../../actions/property_actions"
import { createSavedHome, deleteSavedHome, fetchSavedHomes } from '../../actions/saved_home_actions';
import PropertyIndex from './property_index';

const mapStateToProps = (state, ownProps) => ({
    properties: Object.values(state.entities.properties),
    getClickedProperty: ownProps.getClickedProperty,
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    fetchSavedHomes: () => dispatch(fetchSavedHomes()),
    createSavedHome: savedHome => dispatch(createSavedHome(savedHome)),
    deleteSavedHome: savedHome => dispatch(deleteSavedHome(savedHome)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyIndex));