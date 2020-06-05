import styled, { DefaultTheme } from "styled-components";
import React, { FC } from "react";

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
  :before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: rgba(10, 10, 10, 0.4);
    backdrop-filter: blur(4px);
  }
  :after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 14px 14px 0 0;
    z-index: -1;
  }
`;
const Close = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
`;

export const Modal: FC<ModalProps> = ({ theme, type, children }) => {
  return (
    <StyledModal>
      <Close />
      {children}
    </StyledModal>
  );
};
