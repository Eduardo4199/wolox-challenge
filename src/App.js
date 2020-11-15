import React, {useState} from "react";
import {UserContext} from "./context/user.context";
import "./App.css";
import * as Pages from "./pages";
import {Route, BrowserRouter as Router, Redirect, Switch, BrowserRouter} from 'react-router-dom'; // eslint-disable-line
import {PrivateRoute} from "./helpers/PrivateRoute";

/**
 * App function.
 * @return {string}app view.
 */
function App() {
    const [user, setUser] = useState();
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/Home" component={Pages.Home}/>
                    <Route exact path="/Register" component={Pages.Register} />
                    <UserContext.Provider value={{user, setUser}}>
                        <Route exact path="/Login" component={Pages.Login}/>
                        <PrivateRoute exact path="/Technologies" component={Pages.Technologies}/>
                    </UserContext.Provider>
                    <Redirect from="/" to="/Home" />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default App;
