import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Theme";
import { Login } from "components/Containers/Login";
import { Font } from "components/Presentation/Font";
import { Route, Redirect, Switch, RouteProps } from "react-router-dom";
import { Home } from "components/Containers/Home";

const fakeAuth = false;

const PrivateRoute: FC<RouteProps> = ({ children, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={({ location }) =>
        fakeAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Font />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ThemeProvider>
  );
};
