import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./top_nav/top_nav_container";
import SignupFormContainer from "./form/signup_form_container";
import LoginFormContainer from "./form/login_form_container";

const App = () => (
  <div className="app">
    <div className="top-bar">
      <header>
        <h1>Willow</h1>
      </header>
      <GreetingContainer />
    </div>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;