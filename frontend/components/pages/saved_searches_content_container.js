import { connect } from 'react-redux';

import { fetchSavedSearches, updateSavedSearch, deleteSavedSearch } from "../../actions/saved_search_actions"
import SavedSearchesContent from './saved_searches_content';

const mapStateToProps = (state) => ({
    savedSearches: Object.values(state.entities.savedSearches),
    state
});

const mapDispatchToProps = dispatch => ({
    fetchSavedSearches: () => dispatch(fetchSavedSearches()),
    updateSavedSearch: (savedSearch) => dispatch(updateSavedSearch(savedSearch)),
    deleteSavedSearch: (savedSearch) => dispatch(deleteSavedSearch(savedSearch)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SavedSearchesContent);