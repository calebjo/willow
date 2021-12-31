import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";

import TopNavContainer from "./top_nav/top_nav_container";
import SignupFormContainer from "./form/signup_form_container";
import LoginFormContainer from "./form/login_form_container";
import SplashContent from "./splash/splash_content";

const App = () => (
  <div className="app">
    <TopNavContainer />
    <SplashContent />
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;