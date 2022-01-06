import React from "react";
import ReactDOM from 'react-dom'
import { 
    Route, 
    Redirect,
    Switch,
    Link,
    HashRouter 
} from "react-router-dom";

import { AuthRoute } from "../util/route_util";

import MapContent from "./property_map/map_content";
import SplashContent from "./pages/splash_content"
import SavedHomesContent from "./pages/saved_homes_content"
import SavedSearchesContent from "./pages/saved_searches_content"
import RentingContent from "./pages/renting_content"
import YourHomeContent from "./pages/your_home_content"
import OffersClosingsContent from "./pages/offers_closings_content"
import ProfileContent from "./pages/profile_content"

const App = () => (
    <Switch>
        <Route exact path="/" component={SplashContent} />
        <Route exact path="/homes" component={MapContent} />
        <Route exact path="/homes/for_rent" component={MapContent} />
        <AuthRoute exact path="/mywillow/favorites" component={SavedHomesContent} />
        <AuthRoute exact path="/mywillow/savedsearches" component={SavedSearchesContent} />
        <AuthRoute exact path="/renting" component={RentingContent} />
        <AuthRoute exact path="/mywillow/yourhome" component={YourHomeContent} />
        <AuthRoute exact path="/mywillow/OffersAndClosings" component={OffersClosingsContent} />
        <AuthRoute exact path="/mywillow/account" component={ProfileContent} />
    </Switch>
);

export default App;