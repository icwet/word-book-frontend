import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";

interface LayoutProps {
  readonly theme?: DefaultTheme;
  readonly layout?:
    | "main"
    | "words"
    | "collections"
    | "profile"
    | "addWords"
    | "password"
    | "popup"
    | "modal";
}

const switchCSSProp: Function = (
  theme: DefaultTheme,
  layout: string,
  prop: keyof typeof theme.Layout.type.main
) => {
  switch (layout) {
    case "main":
      return theme.Layout.type.main[prop];
    case "words":
      return theme.Layout.type.words[prop];
    case "collections":
      return theme.Layout.type.collections[prop];
    case "profile":
      return theme.Layout.type.profile[prop];
    case "addWords":
      return theme.Layout.type.addWords[prop];
    case "password":
      return theme.Layout.type.password[prop];
    case "popup":
      return theme.Layout.type.popup[prop];
    case "modal":
      return theme.Layout.type.modal[prop];
    default:
      return theme.Layout.type.main[prop];
  }
};

const StyledSection = styled.main<LayoutProps>`
  display: ${({ theme, layout }) => switchCSSProp(theme, layout, "display")};
  grid: ${({ theme, layout }) => switchCSSProp(theme, layout, "grid")};
  height: ${({ theme, layout }) => switchCSSProp(theme, layout, "height")};
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

export const Layout: FC<LayoutProps> = ({ theme, layout, children }) => {
  return (
    <StyledSection theme={theme} layout={layout}>
      {children}
    </StyledSection>
  );
};
