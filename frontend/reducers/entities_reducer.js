import { combineReducers } from "redux";

import properties from "./properties_reducer";
import users from "./users_reducer";

const entitiesReducer = combineReducers({
    users,
    properties
});

export default entitiesReducer;