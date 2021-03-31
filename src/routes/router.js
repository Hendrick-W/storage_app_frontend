import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/Profile"

export const Routes = () => {
  return (
      <Router>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/Profile" exact>
                  <Profile />
              </Route>
          </Switch>
      </Router>
  );
};

export default Routes;