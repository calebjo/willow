import * as APIUtil from '../util/property_api_util';

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';

export const receiveProperties = properties => ({
    type: RECEIVE_PROPERTIES,
    properties,
});

export const receiveProperty = property => ({
    type: RECEIVE_PROPERTY,
    property,
});

const removeProperty = id => ({
    type: REMOVE_PROPERTY,
    id
})

export const fetchProperties = filters => dispatch => (
    APIUtil.fetchProperties(filters).then(properties => (
        dispatch(receiveProperties(properties))
    ))
);

export const fetchProperty = id => dispatch => (
    APIUtil.fetchProperty(id).then(property => (
        dispatch(receiveProperty(property))
    ))
);

export const createProperty = property => dispatch => (
    APIUtil.createProperty(property).then(property => (
        dispatch(receiveProperty(property))
    ))
);

export const updateProperty = (property) => dispatch => (
    APIUtil.updateProperty(property).then( property => (
        dispatch (receiveProperty(property))))
);

export const deleteProperty = (id) => dispatch => (
    APIUtil.deleteProperty(id).then( () => (
        dispatch (removeProperty(id))))
);
