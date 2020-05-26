import styled, { DefaultTheme } from "styled-components";

interface ButtonProps {
  readonly theme: DefaultTheme;
  readonly buttonTheme?: "main" | "alt" | "disabled" | "warning";
  readonly size?: "s" | "m" | "l";
}

const switchCSSProp: Function = (
  theme: DefaultTheme,
  size: string,
  prop: keyof typeof theme.Button.sizes.s
) => {
  switch (size) {
    case "s":
      return theme.Button.sizes.s[prop];
    case "m":
      return theme.Button.sizes.m[prop];
    case "l":
      return theme.Button.sizes.l[prop];
    default:
      return theme.Button.sizes.s[prop];
  }
};

export const Button = styled.button<ButtonProps>`
  width: ${({ theme, size }) => switchCSSProp(theme, size, "width")};
  height: ${({ theme, size }) => switchCSSProp(theme, size, "height")};
  padding: ${({ theme, size }) => switchCSSProp(theme, size, "padding")};
  font-size: ${({ theme, size }) => switchCSSProp(theme, size, "fontSize")};
  line-height: ${({ theme, size }) => switchCSSProp(theme, size, "lineHeight")};
  border-radius: ${({ theme, size }) =>
    switchCSSProp(theme, size, "borderRadius")};
  color: ${({ theme, buttonTheme }) => {
    switch (buttonTheme) {
      case "main":
        return theme.Button.theme.main.color;
      case "alt":
        return theme.Button.theme.alt.color;
      case "disabled":
        return theme.Button.theme.disabled.color;
      case "warning":
        return theme.Button.theme.warning.color;
      default:
        return theme.Button.theme.main.color;
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
