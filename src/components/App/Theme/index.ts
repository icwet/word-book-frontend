import { DefaultTheme } from "styled-components";
import { IconTheme } from "components/Icon/Theme";
import { TextTheme } from "components/Text/Theme";

const defaultTheme: DefaultTheme = {
  ...TextTheme,
  ...IconTheme,
};

export { defaultTheme };
