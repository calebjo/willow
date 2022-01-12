import { RECEIVE_SAVED_HOMES, RECEIVE_SAVED_HOME } from '../actions/saved_home_actions';
  
const savedHomesReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch(action.type) {
        case RECEIVE_SAVED_HOMES:
            return action.savedHomes;
        case RECEIVE_SAVED_HOME:
            const newSavedHome = { [action.savedHome.id]: action.savedHome };
            return Object.assign({}, state, newSavedHome);
        default:
            return state;
    }
};
  
export default savedHomesReducer;
  