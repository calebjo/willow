import * as APIUtil from '../util/saved_search_api_util';

export const RECEIVE_SAVED_SEARCHES = 'RECEIVE_SAVED_SEARCHES';
export const RECEIVE_SAVED_SEARCH = 'RECEIVE_SAVED_SEARCH';
export const REMOVE_SAVED_SEARCH = 'REMOVE_SAVED_SEARCH';

export const receiveSavedSearches = savedSearches => ({
    type: RECEIVE_SAVED_SEARCHES,
    savedSearches,
});

export const receiveSavedSearch = savedSearch => ({
    type: RECEIVE_SAVED_SEARCH,
    savedSearch,
});

const removeSavedSearch = id => ({
    type: REMOVE_SAVED_SEARCH,
    id
})

export const fetchSavedSearches = filters => dispatch => (
    APIUtil.fetchSavedSearches(filters).then(savedSearches => (
        dispatch(receiveSavedSearches(savedSearches))
    ))
);

export const fetchSavedSearch = id => dispatch => (
    APIUtil.fetchSavedSearch(id).then(savedSearch => (
        dispatch(receiveSavedSearch(savedSearch))
    ))
);

export const createSavedSearch = savedSearch => dispatch => (
    APIUtil.createSavedSearch(savedSearch).then(savedSearch => (
        dispatch(receiveSavedSearch(savedSearch))
    ))
);

export const updateSavedSearch = (savedSearch) => dispatch => (
    APIUtil.updateSavedSearch(savedSearch).then( savedSearch => (
        dispatch (receiveSavedSearch(savedSearch))))
);

export const deleteSavedSearch = (id) => dispatch => (
    APIUtil.deleteSavedSearch(id).then( () => (
        dispatch (removeSavedSearch(id))))
);
