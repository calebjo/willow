import * as APIUtil from '../util/saved_home_api_util';

export const RECEIVE_SAVED_HOMES = 'RECEIVE_SAVED_HOMES';
export const RECEIVE_SAVED_HOME = 'RECEIVE_SAVED_HOME';
export const REMOVE_SAVED_HOME = 'REMOVE_SAVED_HOME';

export const receiveSavedHomes = savedHomes => ({
    type: RECEIVE_SAVED_HOMES,
    savedHomes,
});

export const receiveSavedHome = savedHome => ({
    type: RECEIVE_SAVED_HOME,
    savedHome,
});

const removeSavedHome = id => ({
    type: REMOVE_SAVED_HOME,
    id
})

export const fetchSavedHomes = filters => dispatch => (
    APIUtil.fetchSavedHomes(filters).then(savedHomes => (
        dispatch(receiveSavedHomes(savedHomes))
    ))
);

export const fetchSavedHome = id => dispatch => (
    APIUtil.fetchSavedHome(id).then(savedHome => (
        dispatch(receiveSavedHome(savedHome))
    ))
);

export const createSavedHome = savedHome => dispatch => (
    APIUtil.createSavedHome(savedHome).then(savedHome => (
        dispatch(receiveSavedHome(savedHome))
    ))
);

export const updateSavedHome = (savedHome) => dispatch => (
    APIUtil.updateSavedHome(savedHome).then( savedHome => (
        dispatch (receiveSavedHome(savedHome))))
);

export const deleteSavedHome = (id) => dispatch => (
    APIUtil.deleteSavedHome(id).then( () => (
        dispatch (removeSavedHome(id))))
);
