import React, { FC } from "react";
import { DefaultTheme } from "styled-components";
import styled from "styled-components";

interface InputProps {
  theme?: DefaultTheme;
  themeSize?: string;
  type?: string;
  icon?: string;
  placeholderText?: string;
}

const StyledInput = styled.input<InputProps>`
  position: relative;
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
  padding: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.padding;
      case "m":
        return theme.Input.sizes.m.padding;
      case "l":
        return theme.Input.sizes.l.padding;
      case "xl":
        return theme.Input.sizes.xl.padding;
      default:
        return theme.Input.sizes.s.padding;
    }
  }};
  padding-left: ${({ icon }) => {
    if (icon) {
      return "36px";
    }
  }};
  background: ${({ theme }) => theme.Input.background || "initial"};
  border-radius: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.borderRadius;
      case "m":
        return theme.Input.sizes.m.borderRadius;
      case "l":
        return theme.Input.sizes.l.borderRadius;
      case "xl":
        return theme.Input.sizes.xl.borderRadius;
      default:
        return theme.Input.sizes.s.borderRadius;
    }
  }};
  border: none;
  outline: none;
`;

const StyledInputIcon = styled.div<InputProps>`
  content: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;
  width: ${({ theme, icon }) => {
    switch (icon) {
      case "search":
        return theme.Input.icon.search.width;
      default:
        return "";
    }
  }};
  height: ${({ theme, icon }) => {
    switch (icon) {
      case "search":
        return theme.Input.icon.search.height;
      default:
        return "";
    }
  }};
  background: ${({ theme, icon }) => {
    switch (icon) {
      case "search":
        return theme.Input.icon.search.background;
      default:
        return "";
    }
  }};
`;

const StyledDiv = styled.div`
  position: relative;
`;

export const Input: FC<Readonly<InputProps>> = ({
  theme,
  themeSize,
  type,
  icon,
  placeholderText,
}) => {
  return (
    <StyledDiv>
      <StyledInput
        {...theme}
        themeSize={themeSize}
        placeholder={placeholderText}
        type={type}
        icon={icon}
      />
      {icon && <StyledInputIcon {...theme} icon={icon} />}
    </StyledDiv>
  );
};
