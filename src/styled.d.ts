import "styled-components";
import { TextTheme } from "components/Presentation/Text/Theme";
import { SectionTheme } from "components/Presentation/Section/Theme";
import { IconTheme } from "components/Presentation/Icon/Theme";
import { InputTheme } from "components/Presentation/Input/Theme";
import { ButtonTheme } from "components/Presentation/Button/Theme";
import { LayoutTheme } from "components/Presentation/Layout/Theme";
import { PopupTheme } from "components/Presentation/Popup/Theme";
import { ModalTheme } from "components/Presentation/Modal/Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Text: TextTheme;
    Icon: IconTheme;
    Input: InputTheme;
    Button: ButtonTheme;
    Layout: LayoutTheme;
    Section: SectionTheme;
    Popup: PopupTheme;
    Modal: ModalTheme;
  }
}
