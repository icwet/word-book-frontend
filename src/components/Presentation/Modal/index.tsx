import styled, { DefaultTheme } from "styled-components";
import React, { FC } from "react";
import close from "./Icon/close.svg";

type ModalTypes = "default";

interface ModalProps {
  theme?: DefaultTheme;
  type?: ModalTypes;
  onClose?: Function;
}

const StyledModal = styled.div<ModalProps>`
  display: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return theme.Modal.type.default.display;
      default:
        return theme.Modal.type.default.display;
    }
  }};
  position: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return theme.Modal.type.default.position;
      default:
        return theme.Modal.type.default.position;
    }
  }};
  bottom: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return theme.Modal.type.default.bottom;
      default:
        return theme.Modal.type.default.bottom;
    }
  }};
  padding: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return theme.Modal.type.default.padding;
      default:
        return theme.Modal.type.default.padding;
    }
  }};
  z-index: ${({ theme, type }) => {
    switch (type) {
      case "default":
        return theme.Modal.type.default["z-index"];
      default:
        return theme.Modal.type.default["z-index"];
    }
  }};
`;
const Background = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(4px);
`;
const Mount = styled.div<ModalProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  border-radius: 14px 14px 0 0;
  z-index: 1;
`;
const Content = styled.div<ModalProps>`
  position: relative;
  z-index: 10;
`;
const Close = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: url("${close}") center/cover no-repeat;
`;

export const Modal: FC<ModalProps> = ({ theme, type, children, onClose }) => {
  return (
    <StyledModal>
      <Close onClick={() => (onClose ? onClose() : null)} />
      <Mount />
      <Background />
      <Content>{children}</Content>
    </StyledModal>
  );
};
