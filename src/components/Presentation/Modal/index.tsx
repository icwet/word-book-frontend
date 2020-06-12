import styled, { DefaultTheme } from "styled-components";
import React, { FC } from "react";
import close from "./Icon/close.svg";

type ModalTypes = "default";

interface ModalProps {
  theme?: DefaultTheme;
  type?: ModalTypes;
}

const StyledModal = styled.div<ModalProps>`
  display: grid;
  position: absolute;
  bottom: 0;
  padding: 16px;
  z-index: 100;
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

export const Modal: FC<ModalProps> = ({ theme, type, children }) => {
  return (
    <StyledModal>
      <Close />
      <Mount />
      <Background />
      <Content>{children}</Content>
    </StyledModal>
  );
};
