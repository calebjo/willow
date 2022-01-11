import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    bounds: {},
    minBedrooms: 1,
    minBathrooms: 1
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default filtersReducer;
