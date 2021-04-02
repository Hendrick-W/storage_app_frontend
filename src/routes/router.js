import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/Profile"
import Receptionist from "../pages/Receptionist"
import DeptHead from "../pages/DeptHead";

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
        <Route path="/depthead" exact>
          <DeptHead />
        </Route>
        <Route path="/receptionist" exact>
          <Receptionist />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;