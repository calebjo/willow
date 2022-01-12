import { combineReducers } from "redux";

import properties from "./properties_reducer";
import users from "./users_reducer";
import savedHomes from "./saved_homes_reducer"
import savedSearches from "./saved_searches_reducer"

const entitiesReducer = combineReducers({
    users,
    properties,
    savedHomes,
    savedSearches
});

export default entitiesReducer;