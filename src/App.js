import React from "react";
import "./App.css";
import * as Pages from "./pages";
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'; // eslint-disable-line

/**
 * App function.
 * @return {string}app view.
 */
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/Register" component={Pages.Register} />
                    <Route exact path="/Technologies" component={Pages.Technologies}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
