import React, { FC } from "react";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";
import { FieldInputProps } from "formik";

type InputSize = "s" | "m" | "l" | "xl";
type TextWeight = "300" | "400" | "500" | "600" | "800";
type InputIcon = "search";

interface InputProps {
  theme?: DefaultTheme;
  themeSize?: InputSize;
  weight?: TextWeight;
  icon?: InputIcon;
  placeholderText?: string;
  field?: FieldInputProps<any>;
  touched?: boolean;
  error?: string;
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
  font-size: ${({ theme, themeSize }) => {
    switch (themeSize) {
      case "s":
        return theme.Input.sizes.s.fontSize;
      case "m":
        return theme.Input.sizes.m.fontSize;
      case "l":
        return theme.Input.sizes.l.fontSize;
      case "xl":
        return theme.Input.sizes.xl.fontSize;
      default:
        return theme.Input.sizes.s.fontSize;
    }
  }};
  background: ${({ theme, error, touched }) => {
    if (error && touched) {
      return "#f8d7da";
    } else {
      return theme.Input.background;
    }
  }};
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
  border: ${({ error, touched }) => {
    if (error && touched) {
      return "1px solid #721c24";
    } else {
      return "1px solid transparent";
    }
  }};
  outline: none;
`;

const Icon = styled.div<InputProps>`
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

const ErrorField = styled.div<InputProps>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 14px;
  font-family: "Roboto-Regular", sans-serif;
  color: #721c24;
`;

export const Input: FC<Readonly<InputProps>> = ({
  theme,
  themeSize,
  weight,
  icon,
  placeholderText,
  field,
  touched,
  error,
  ...otherProps
}) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledInput
        {...theme}
        {...otherProps}
        {...field}
        error={error}
        touched={touched}
        themeSize={themeSize}
        placeholder={placeholderText}
        weight={weight}
        icon={icon}
      />
      {icon && <Icon {...theme} icon={icon} />}
      {touched && error && <ErrorField>{error}</ErrorField>}
    </div>
  );
};
