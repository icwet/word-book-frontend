// Vendor
import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";

export type SectionLayout =
  | "header"
  | "search"
  | "button"
  | "buttons"
  | "imageText"
  | "popup"
  | "modal"
  | "groupNumber"
  | "inputs"
  | "titlePh"
  | "labelButton";

interface SectionProps {
  readonly theme?: DefaultTheme;
  readonly layout?: SectionLayout;
}

const switchCSSProp: Function = (
  theme: DefaultTheme,
  layout: string,
  prop: keyof typeof theme.Section.type.header
) => {
  switch (layout) {
    case "header":
      return theme.Section.type.header[prop];
    case "search":
      return theme.Section.type.search[prop];
    case "button":
      return theme.Section.type.button[prop];
    case "buttons":
      return theme.Section.type.buttons[prop];
    case "imageText":
      return theme.Section.type.imageText[prop];
    case "titlePh":
      return theme.Section.type.titlePh[prop];
    case "popup":
      return theme.Section.type.popup[prop];
    case "modal":
      return theme.Section.type.modal[prop];
    case "groupNumber":
      return theme.Section.type.groupNumber[prop];
    case "inputs":
      return theme.Section.type.inputs[prop];
    case "labelButton":
      return theme.Section.type.labelButton[prop];
    default:
      return theme.Section.type.header[prop];
  }
};

const StyledSection = styled.div<SectionProps>`
  display: ${({ theme, layout }) => switchCSSProp(theme, layout, "display")};
  grid: ${({ theme, layout }) => switchCSSProp(theme, layout, "grid")};
  gap: ${({ theme, layout }) => switchCSSProp(theme, layout, "gap")};
  padding: ${({ theme, layout }) => switchCSSProp(theme, layout, "padding")};
  justify-content: ${({ theme, layout }) =>
    switchCSSProp(theme, layout, "justifyContent")};
  justify-items: ${({ theme, layout }) =>
    switchCSSProp(theme, layout, "justifyItems")};
  align-content: ${({ theme, layout }) =>
    switchCSSProp(theme, layout, "alignContent")};
  align-items: ${({ theme, layout }) =>
    switchCSSProp(theme, layout, "alignItems")};
  background: ${({ theme, layout }) =>
    switchCSSProp(theme, layout, "background")};
`;

export const Section: FC<SectionProps> = ({ theme, layout, children }) => {
  return (
    <StyledSection theme={theme} layout={layout}>
      {children}
    </StyledSection>
  );
};
