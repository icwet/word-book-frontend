import React, { FC } from "react";
import styled, { TextThemeTypes } from "styled-components";

interface TextProps {
  theme?: TextThemeTypes;
}

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.color};
`;

export const Text: FC<TextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
