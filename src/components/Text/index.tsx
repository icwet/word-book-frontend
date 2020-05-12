import styled from "styled-components";

interface TextProps {
  readonly size?: string;
  readonly color?: string;
  readonly bold?: boolean;
}

export const Text = styled.div<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.fontSize.s;
      case "m":
        return theme.fontSize.m;
      case "l":
        return theme.fontSize.l;
      case "xl":
        return theme.fontSize.xl;
      default:
        return theme.fontSize.l;
    }
  }};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  line-height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.lineHeight.s;
      case "m":
        return theme.lineHeight.m;
      case "l":
        return theme.lineHeight.l;
      case "xl":
        return theme.lineHeight.xl;
      default:
        return theme.lineHeight.l;
    }
  }};
  color: ${({ theme, color }) => {
    switch (color) {
      case "disabled":
        return theme.color.text.alt;
      default:
        return theme.color.text.current;
    }
  }};
`;
