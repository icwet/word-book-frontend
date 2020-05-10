import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "components/Login";
import { Home } from "components/Home";

interface Props {}

export const App: FC<Props> = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
  }

  return (
    <Switch>
      <Route exact path="/">
        {"" ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
    </Switch>
  );
};
