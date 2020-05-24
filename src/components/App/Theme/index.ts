import { DefaultTheme } from "styled-components";
import { IconTheme } from "components/Presentation/Icon/Theme";
import { TextTheme } from "components/Presentation/Text/Theme";
import { InputTheme } from "components/Presentation/Input/Theme";
import { ButtonTheme } from "components/Presentation/Button/Theme";

const defaultTheme: DefaultTheme = {
  ...TextTheme,
  ...IconTheme,
  ...InputTheme,
  ...ButtonTheme,
};

export { defaultTheme };
