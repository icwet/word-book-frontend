import styled from "styled-components";

export const Icon = styled.div`
  position: ${({ theme }) => theme.position};
  left: ${({ theme }) => theme.left};
  right: ${({ theme }) => theme.right};
  top: ${({ theme }) => theme.top};
  bottom: ${({ theme }) => theme.bottom};
  margin: ${({ theme }) => theme.margin};
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  background: ${({ theme }) => theme.background};
`;
