import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Theme";
import { Login } from "components/Login";
import { Font } from "components/Font";

interface AppProps {}

export const App: FC<AppProps> = () => {
  /*const [browserTheme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );*/

  return (
    <ThemeProvider theme={defaultTheme}>
      <Font />

      <Login />
    </ThemeProvider>
  );
};
