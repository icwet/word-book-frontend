import { DefaultTheme } from "styled-components";
import { IconTheme } from "components/Presentation/Icon/Theme";
import { TextTheme } from "components/Presentation/Text/Theme";
import { InputTheme } from "components/Presentation/Input/Theme";
import { ButtonTheme } from "components/Presentation/Button/Theme";
import { LayoutTheme } from "components/Presentation/Layout/Theme";
import { SectionTheme } from "components/Presentation/Section/Theme";

const defaultTheme: DefaultTheme = {
  ...TextTheme,
  ...IconTheme,
  ...InputTheme,
  ...ButtonTheme,
  ...LayoutTheme,
  ...SectionTheme,
};

export { defaultTheme };
