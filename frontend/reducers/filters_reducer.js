import { UPDATE_FILTER } from '../actions/filter_actions';

const veryLarge = 9999999999999999999999999999;

const defaultFilters = Object.freeze({
    bounds: {},
    minPrice: 0,
    maxPrice: veryLarge,
    minBeds: 0,
    maxBeds: veryLarge,
    minBaths: 0,
    maxBaths: veryLarge,
    homeType: "House",
    maxHoa: veryLarge,
    minParkingSpots: 0,
    maxParkingSpots: veryLarge,
    minSquareFeet: 0,
    maxSquareFeet: veryLarge,
    minLotSize: 0,
    maxLotSize: veryLarge,
    minYearBuilt: 0,
    maxYearBuilt: veryLarge,
    hasBasement: true,
    numStories: 2,
    // DEBUG -- FIGURE OUT HOW TO FIX DEFAULTS
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
