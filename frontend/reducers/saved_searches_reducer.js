import { RECEIVE_SAVED_SEARCHES, RECEIVE_SAVED_SEARCH } from '../actions/saved_search_actions';
  
const savedSearchesReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch(action.type) {
        case RECEIVE_SAVED_SEARCHES:
            return action.savedSearches;
        case RECEIVE_SAVED_SEARCH:
            const newSavedSearch = { [action.savedSearch.id]: action.savedSearch };
            return Object.assign({}, state, newSavedSearch);
        default:
            return state;
    }
};
  
export default savedSearchesReducer;
  