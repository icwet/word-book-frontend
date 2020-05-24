import styled from "styled-components";

interface TextProps {
  readonly size?: string;
  readonly color?: string;
  readonly bold?: boolean;
}

export const Text = styled.div<TextProps>`
  font-family: ${({ theme }) => theme.Text.fontFamily.Roboto};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Text.fontSize.s;
      case "m":
        return theme.Text.fontSize.m;
      case "l":
        return theme.Text.fontSize.l;
      case "xl":
        return theme.Text.fontSize.xl;
      default:
        return theme.Text.fontSize.l;
    }
  }};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  line-height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Text.lineHeight.s;
      case "m":
        return theme.Text.lineHeight.m;
      case "l":
        return theme.Text.lineHeight.l;
      case "xl":
        return theme.Text.lineHeight.xl;
      default:
        return theme.Text.lineHeight.l;
    }
  }};
  color: ${({ theme, color }) => {
    switch (color) {
      case "disabled":
        return theme.Text.color.alt;
      default:
        return theme.Text.color.current;
    }
  }};
`;
