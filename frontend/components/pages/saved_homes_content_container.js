import { connect } from 'react-redux';

import { fetchSavedHomes, createSavedHome, updateSavedHome, deleteSavedHome } from "../../actions/saved_home_actions"
import { fetchProperties } from "../../actions/property_actions"
import SavedHomesContent from './saved_homes_content';

const mapStateToProps = (state) => ({
    properties: Object.values(state.entities.properties),
    savedHomes: Object.values(state.entities.savedHomes),
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    fetchSavedHomes: () => dispatch(fetchSavedHomes()),
    createSavedHome: savedHome => dispatch(createSavedHome(savedHome)),
    updateSavedHome: (savedHome) => dispatch(updateSavedHome(savedHome)),
    deleteSavedHome: (savedHome) => dispatch(deleteSavedHome(savedHome)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SavedHomesContent);