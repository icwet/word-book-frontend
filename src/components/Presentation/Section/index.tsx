// Vendor
import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";

interface SectionProps {
  readonly theme?: DefaultTheme;
  readonly layout?:
    | "header"
    | "search"
    | "button"
    | "buttons"
    | "imageText"
    | "popup"
    | "modal"
    | "groupNumber";
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
    case "popup":
      return theme.Section.type.popup[prop];
    case "modal":
      return theme.Section.type.modal[prop];
    case "groupNumber":
      return theme.Section.type.groupNumber[prop];
    default:
      return theme.Section.type.header[prop];
  }
};

const StyledSection = styled.div<SectionProps>`
  display: ${({ theme, layout }) => switchCSSProp(theme, layout, "display")};
  grid: ${({ theme, layout }) => switchCSSProp(theme, layout, "grid")};
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
