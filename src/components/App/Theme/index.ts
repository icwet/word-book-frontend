import { DefaultTheme } from "styled-components";
import { IconTheme } from "components/Icon/Theme";
import { TextTheme } from "components/Text/Theme";
import { InputTheme } from "components/Input/Theme";

const defaultTheme: DefaultTheme = {
  ...TextTheme,
  ...IconTheme,
  ...InputTheme,
};

export { defaultTheme };
