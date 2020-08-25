import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login, Register } from "../pages";

const UnAuthApp = ({ login }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login login={login} />
        </Route>
        <Route path="/register">
          <Register login={login} />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default UnAuthApp;
