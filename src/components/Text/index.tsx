import styled from "styled-components";

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.color};
`;
