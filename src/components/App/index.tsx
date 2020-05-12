import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Theme";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "components/Login";
import { Home } from "components/Home";
import { Font } from "components/Font";

interface Props {}

export const App: FC<Props> = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
  }

  const [browserTheme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  const theme = {
    ...defaultTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <Font />

      <Switch>
        <Route exact path="/">
          {"" ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={Login} />
      </Switch>
    </ThemeProvider>
  );
};
