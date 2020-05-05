import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "components/Login";
import { Home } from "components/Home";

export const App = () => {
  return (
    <>
      <Route exact path="/">
        {"" ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
    </>
  );
};
