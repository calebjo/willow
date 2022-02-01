import { UPDATE_FILTER, REMOVE_FILTERS } from '../actions/filter_actions';

const veryLarge = 999999999;

const defaultFilters = Object.freeze({
    bounds: {},
    min_price: 0,
    max_price: veryLarge,
    min_beds: 0,
    max_beds: veryLarge,
    min_baths: 0,
    max_baths: veryLarge,
    //home_type: "House",
    max_hoa: veryLarge,
    min_parking_spots: 0,
    max_parking_spots: veryLarge,
    min_square_feet: 0,
    max_square_feet: veryLarge,
    min_lot_size: 0,
    max_lot_size: veryLarge,
    min_year_built: 0,
    max_year_built: veryLarge,
    //has_basement: true,
    //num_stories: 1,
    // DEBUG -- FIGURE OUT HOW TO FIX DEFAULTS
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case REMOVE_FILTERS:
            return Object.assign({}, defaultFilters)
        default:
            return state;
    }
};

export default filtersReducer;
