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
import Storage from "../pages/Storage";
import Dispatch from "../pages/Dispatch";

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
        <Route path="/employees/depthead" exact>
          <DeptHead />
        </Route>
        <Route path="/employees/receptionist" exact>
          <Receptionist />
        </Route>
        <Route path="/employees/storage" exact>
          <Storage />
        </Route>
        <Route path="/employees/dispatch" exact>
          <Dispatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;