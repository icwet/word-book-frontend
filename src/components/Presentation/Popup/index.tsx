import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
// Components
import { Text } from "../Text";
import { Button } from "../Button";

type PopupSizes = "default";
type PopupTypes = "login";

interface PopupProps {
  readonly theme?: DefaultTheme;
  readonly type?: PopupTypes;
  readonly size?: PopupSizes;
}

const LoginPopup = styled.div<PopupProps>`
  position: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.position;
      default:
        return theme.Popup.size.default.position;
    }
  }};
  display: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.display;
      default:
        return theme.Popup.size.default.display;
    }
  }};
  grid: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.grid;
      default:
        return theme.Popup.size.default.grid;
    }
  }};
  top: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.top;
      default:
        return theme.Popup.size.default.top;
    }
  }};
  bottom: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.bottom;
      default:
        return theme.Popup.size.default.bottom;
    }
  }};
  left: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.left;
      default:
        return theme.Popup.size.default.left;
    }
  }};
  right: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.right;
      default:
        return theme.Popup.size.default.right;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.padding;
      default:
        return theme.Popup.size.default.padding;
    }
  }};
  box-shadow: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.boxShadow;
      default:
        return theme.Popup.size.default.boxShadow;
    }
  }};
  background: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default.background;
      default:
        return theme.Popup.size.default.background;
    }
  }};
  z-index: ${({ theme, size }) => {
    switch (size) {
      case "default":
        return theme.Popup.size.default["z-index"];
      default:
        return theme.Popup.size.default["z-index"];
    }
  }};
`;

export const Popup: FC<PopupProps> = ({ type, theme, size }) => {
  switch (type) {
    case "login":
      return (
        <LoginPopup theme={theme} size={size}>
          <div>
            <Text size="m">Free to learn words</Text>
          </div>
          <div>
            <Text size="m" color="disabled">
              append your words to the dictionary or choose from categories
            </Text>
          </div>
          <div>
            <Button size="m" buttonTheme="alt">
              Sign in
            </Button>
            <Button size="m">Sign up</Button>
          </div>
        </LoginPopup>
      );
    default:
      return <LoginPopup theme={theme} size={size}></LoginPopup>;
  }
};
