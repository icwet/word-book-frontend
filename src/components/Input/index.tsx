import React, { FC } from "react";
import { DefaultTheme } from "styled-components";
import styled from "styled-components";

interface InputProps {
  theme?: DefaultTheme;
  themeSize?: string;
  type?: string;
  icon?: string;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.width;
      case "m":
        return theme.Input.sizes.m.width;
      case "l":
        return theme.Input.sizes.l.width;
      case "xl":
        return theme.Input.sizes.xl.width;
      default:
        return "initial";
    }
  }};
  height: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.height;
      case "m":
        return theme.Input.sizes.m.height;
      case "l":
        return theme.Input.sizes.l.height;
      case "xl":
        return theme.Input.sizes.xl.height;
      default:
        return "initial";
    }
  }};
  border: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.width;
      case "m":
        return theme.Input.sizes.m.width;
      case "l":
        return theme.Input.sizes.l.width;
      case "xl":
        return theme.Input.sizes.xl.width;
      default:
        return theme.Input.sizes.s.borderRadius;
    }
  }};
`;

export const Input: FC<InputProps> = ({ theme, children, themeSize }) => {
  return (
    <StyledInput {...theme} themeSize={themeSize}>
      {children}
    </StyledInput>
  );
};
