import React from "react";
import { 
    Route, 
    Redirect,
    Switch,
    Link,
    HashRouter 
} from "react-router-dom";

import { AuthRoute } from "../util/route_util";
import MapContent from "./property_map/map_content";
import SplashContent from "./splash/splash_content"

const App = () => (
    <Switch>
        <Route exact path="/" component={SplashContent} />
        <Route exact path="/homes" component={MapContent} />
        {/* <Route exact path="/mywillow/savedhomes" component={SplashContent} /> */}
    </Switch>
);

export default App;