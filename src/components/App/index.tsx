import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Theme";
import { Login } from "components/Login";
import { Font } from "components/Font";

interface Props {}

export const App: FC<Props> = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
  }

  const [browserTheme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Font />

      <Login />
    </ThemeProvider>
  );
};
