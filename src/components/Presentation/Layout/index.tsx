import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";

interface LayoutProps {
  readonly theme: DefaultTheme;
  readonly layout?: string;
}

const StyledSection = styled.section<LayoutProps>`
  display: ${({ theme, layout }) => {
    switch (layout) {
      case "main":
        return theme.Layout.type.main.display;
      case "words":
        return theme.Layout.type.words.display;
      case "collections":
        return theme.Layout.type.collections.display;
      case "profile":
        return theme.Layout.type.profile.display;
      case "addWords":
        return theme.Layout.type.addWords.display;
      case "password":
        return theme.Layout.type.password.display;
      case "popup":
        return theme.Layout.type.popup.display;
      case "modal":
        return theme.Layout.type.modal.display;
      default:
        return theme.Layout.type.main.display;
    }
  }};
  grid: ${({ theme, layout }) => {
    switch (layout) {
      case "main":
        return theme.Layout.type.main.grid;
      case "words":
        return theme.Layout.type.words.grid;
      case "collections":
        return theme.Layout.type.collections.grid;
      case "profile":
        return theme.Layout.type.profile.grid;
      case "addWords":
        return theme.Layout.type.addWords.grid;
      case "password":
        return theme.Layout.type.password.grid;
      case "popup":
        return theme.Layout.type.popup.grid;
      case "modal":
        return theme.Layout.type.modal.grid;
      default:
        return theme.Layout.type.main.grid;
    }
  }};
  background: ${({ theme, layout }) => {
    switch (layout) {
      case "main":
        return theme.Layout.type.main.background;
      case "words":
        return theme.Layout.type.words.background;
      case "collections":
        return theme.Layout.type.collections.background;
      case "profile":
        return theme.Layout.type.profile.background;
      case "addWords":
        return theme.Layout.type.addWords.background;
      case "password":
        return theme.Layout.type.password.background;
      case "popup":
        return theme.Layout.type.popup.background;
      case "modal":
        return theme.Layout.type.modal.background;
      default:
        return "initial";
    }
  }};
`;

export const Layout: FC<LayoutProps> = ({ theme, layout, children }) => {
  return (
    <StyledSection theme={theme} layout={layout}>
      {children}
    </StyledSection>
  );
};
