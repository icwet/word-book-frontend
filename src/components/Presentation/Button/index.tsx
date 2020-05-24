import styled, { DefaultTheme } from "styled-components";

interface ButtonProps {
  readonly theme: DefaultTheme;
  readonly buttonTheme?: string;
  readonly size?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.width;
      case "m":
        return theme.Button.sizes.m.width;
      case "l":
        return theme.Button.sizes.l.width;
      default:
        return theme.Button.sizes.s.width;
    }
  }};
  height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.height;
      case "m":
        return theme.Button.sizes.m.height;
      case "l":
        return theme.Button.sizes.l.height;
      default:
        return theme.Button.sizes.s.height;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.padding;
      case "m":
        return theme.Button.sizes.m.padding;
      case "l":
        return theme.Button.sizes.l.padding;
      default:
        return theme.Button.sizes.s.padding;
    }
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.fontSize;
      case "m":
        return theme.Button.sizes.m.fontSize;
      case "l":
        return theme.Button.sizes.l.fontSize;
      default:
        return theme.Button.sizes.s.fontSize;
    }
  }};
  line-height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.lineHeight;
      case "m":
        return theme.Button.sizes.m.lineHeight;
      case "l":
        return theme.Button.sizes.l.lineHeight;
      default:
        return theme.Button.sizes.s.lineHeight;
    }
  }};
  border-radius: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Button.sizes.s.borderRadius;
      case "m":
        return theme.Button.sizes.m.borderRadius;
      case "l":
        return theme.Button.sizes.l.borderRadius;
      default:
        return theme.Button.sizes.s.borderRadius;
    }
  }};
  color: ${({ theme, buttonTheme }) => {
    switch (buttonTheme) {
      case "main":
        return theme.Button.theme.main;
      case "alt":
        return theme.Button.theme.alt;
      case "disabled":
        return theme.Button.theme.disabled;
      case "warning":
        return theme.Button.theme.warning;
      default:
        return theme.Button.theme.main;
    }
  }};
  background: ${({ theme, buttonTheme }) => {
    switch (buttonTheme) {
      case "main":
        return theme.Button.theme.main.background;
      case "alt":
        return theme.Button.theme.alt.background;
      case "disabled":
        return theme.Button.theme.disabled.background;
      case "warning":
        return theme.Button.theme.warning.background;
      default:
        return theme.Button.theme.main.background;
    }
  }};
  outline: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;
