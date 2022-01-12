import { connect } from 'react-redux';

import { fetchSavedHomes, updateSavedHome, deleteSavedHome } from "../../actions/saved_home_actions"
import SavedHomesContent from './saved_homes_content';

const mapStateToProps = (state) => ({
    savedHomes: Object.values(state.entities.savedHomes),
    state
});

const mapDispatchToProps = dispatch => ({
    fetchSavedHomes: () => dispatch(fetchSavedHomes()),
    updateSavedHome: (savedHome) => dispatch(updateSavedHome(savedHome)),
    deleteSavedHome: (savedHome) => dispatch(deleteSavedHome(savedHome)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SavedHomesContent);