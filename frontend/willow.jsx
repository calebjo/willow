import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root"
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    // BEGIN TESTING
    const store = configureStore()
    window.getState = store.getState
    window.dispatch = store.dispatch
    // END TESTING
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})