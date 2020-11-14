import React from "react";
import "./App.css";
import * as Pages from "./pages";
import {Route, BrowserRouter as Router, Redirect, Switch, BrowserRouter} from 'react-router-dom'; // eslint-disable-line
import {PrivateRoute} from "./helpers/PrivateRoute";

/**
 * App function.
 * @return {string}app view.
 */
function App() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/Home" component={Pages.Home}/>
                    <Route exact path="/Login" component={Pages.Login}/>
                    <Route exact path="/Register" component={Pages.Register} />
                    <PrivateRoute exact path="/Technologies" component={Pages.Technologies}/>
                    <Redirect from="/" to="/Home" />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default App;
