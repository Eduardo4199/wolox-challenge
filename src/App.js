import React from "react";
import "./App.css";
import * as Pages from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"; // eslint-disable-line

/**
 * App function.
 * @return {string}app view.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home" component={Pages.Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
