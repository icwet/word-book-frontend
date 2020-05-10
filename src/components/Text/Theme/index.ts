import { TextThemeTypes } from "styled-components";

export const TextDefaultTheme: TextThemeTypes = {
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#000",
};

export const TextDarkTheme: TextThemeTypes = {
  ...TextDefaultTheme,
  color: "#fff",
};
