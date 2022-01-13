import { fetchProperties } from './property_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const removeFilters = () => {
    return {
      type: REMOVE_FILTERS,
    };
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchProperties(getState().ui.filters)(dispatch);
};

export const resetFilters = () => (dispatch, getState) => {
    dispatch(removeFilters());
    return fetchProperties(getState().ui.filters)(dispatch);
};
