import React from "react";
import ReactDOM from 'react-dom'
import { 
    Route, 
    Redirect,
    Switch,
    Link,
    withRouter,
    BrowserRouter
} from "react-router-dom";

import { AuthRoute } from "../util/route_util";

import MapContentContainer from "./property_map/map_content_container";
import SplashContent from "./pages/splash_content"
import SavedHomesContent from "./pages/saved_homes_content"
import SavedSearchesContent from "./pages/saved_searches_content"
import RentingContent from "./pages/renting_content"
import YourHomeContentContainer from "./pages/your_home_content_container";
import ProfileContent from "./pages/profile_content"
import SellContent from "./pages/sell_content";
import SellFormContent from "./form/sell_form_content";
import TopNavContainer from "./top_nav/top_nav_container";
import Footer from "./footer/footer";

const App = (props) => (
    <div id="app">
        {!props.location.pathname.includes('/homes') ? <TopNavContainer />:null}
        <Switch>
            <Route exact path="/" component={SplashContent} />
            <Route exact path="/sell" component={SellContent} />
            <Route path="/homes" component={MapContentContainer} />
            {/* DEBUG -- REPLACE TO HANDLE QUERY */}
            <Route path="/homes/for_rent" component={MapContentContainer} />
            <AuthRoute exact path="/for-sale-by-owner" component={SellFormContent} />
            <AuthRoute exact path="/mywillow/favorites" component={SavedHomesContent} />
            <AuthRoute exact path="/mywillow/savedsearches" component={SavedSearchesContent} />
            <AuthRoute exact path="/renting" component={RentingContent} />
            <AuthRoute exact path="/mywillow/yourhome" component={YourHomeContentContainer} />
            <AuthRoute exact path="/mywillow/account" component={ProfileContent} />
        </Switch>
        {!props.location.pathname.includes('/homes') ? <Footer />:null}
    </div>
);

export default withRouter(App);