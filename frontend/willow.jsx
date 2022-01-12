import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root"
import configureStore from "./store/store"

import { fetchSavedHomes } from "./actions/saved_home_actions"
import { fetchSavedSearches } from "./actions/saved_search_actions"

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // BEGIN TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchSavedHomes = fetchSavedHomes()
    window.fetchSavedSearches = fetchSavedSearches()
    // END TESTING
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})