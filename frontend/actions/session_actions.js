import * as ApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

export const login = user => dispatch => {
    return ApiUtil.login(user)
    .then(response => dispatch(receiveCurrentUser(response)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const logout = () => dispatch => {
    return ApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
};

export const signup = user => dispatch => {
    return ApiUtil.signup(user)
    .then(response => dispatch(receiveCurrentUser(response)),
    err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
}; 

