import React from "react";
import {Router,Route} from "react-router-dom";
import history from "../history";

import Dash from "./Land";

export default function Root() {
    return(
        <Router history={history}>
            <Route exact path="/" component={Dash}/>
        </Router>
    )
}
